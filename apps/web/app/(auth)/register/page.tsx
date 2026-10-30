"use client";

import React, { useState } from "react";
import { useAuth, useSignUp } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { postApi } from "@/lib/api";

export default function RegisterPage() {
  const router = useRouter();
  const { getToken } = useAuth();
  const { signUp } = useSignUp();
  const [formData, setFormData] = useState({
    agencyName: "",
    agentName: "",
    agentPhone: "",
    hqLocation: "",
    primaryRoutes: "",
    serviceType: "",
    activeFleetCount: "",
    terminalName: "",
    email: "",
    password: "",
  });
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerifyingEmail, setIsVerifyingEmail] = useState(false);
  const [isClerkSessionFinalized, setIsClerkSessionFinalized] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authError, setAuthError] = useState("");

  const finishSignUp = async () => {
    if (!isClerkSessionFinalized) {
      const { error } = await signUp.finalize();
      if (error) {
        setAuthError(error.message || "Unable to complete registration.");
        return;
      }
      setIsClerkSessionFinalized(true);
    }

    try {
      await postApi("/agencies/register", getToken, {
        agencyName: formData.agencyName,
        agentName: formData.agentName,
        agentPhone: formData.agentPhone,
        hqLocation: formData.hqLocation,
        primaryRoutes: formData.primaryRoutes,
        serviceType: formData.serviceType,
        activeFleetCount: formData.activeFleetCount,
        terminalName: formData.terminalName,
      });
      router.replace("/dashboard");
    } catch (error) {
      setAuthError(
        error instanceof Error
          ? error.message
          : "Unable to link your agency. Please retry.",
      );
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAuthError("");
    setIsSubmitting(true);

    try {
      if (isClerkSessionFinalized) {
        await finishSignUp();
        return;
      }

      if (isVerifyingEmail) {
        const { error } = await signUp.verifications.verifyEmailCode({
          code: verificationCode,
        });
        if (error) {
          setAuthError(
            error.message || "That verification code could not be confirmed.",
          );
          return;
        }

        if (signUp.status === "complete") {
          await finishSignUp();
        } else {
          setAuthError(
            "More information is required to complete registration.",
          );
        }
        return;
      }

      const [firstName, ...lastNameParts] = formData.agentName
        .trim()
        .split(/\s+/);
      const { error } = await signUp.password({
        emailAddress: formData.email,
        password: formData.password,
        firstName,
        lastName: lastNameParts.join(" ") || undefined,
        unsafeMetadata: { agencyName: formData.agencyName },
      });

      if (error) {
        setAuthError(
          error.message ||
            "Unable to create your account. Check your details and try again.",
        );
        return;
      }

      if (signUp.status === "complete") {
        await finishSignUp();
        return;
      }

      const verification = await signUp.verifications.sendEmailCode();
      if (verification.error) {
        setAuthError(
          verification.error.message ||
            "Unable to send an email verification code.",
        );
        return;
      }

      setIsVerifyingEmail(true);
    } catch {
      setAuthError("Unable to complete registration. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col justify-center items-center px-4 py-8">
      <div className="w-full max-w-md bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.03)] rounded-3xl p-6 sm:p-8">
        {/* Brand Header */}
        <div className="text-center mb-6">
          <div className="text-xl font-extrabold tracking-tight text-[#1a1c1c]">
            CAMEWEGO
          </div>
          <p className="text-xs text-[#7e7576] font-medium mt-1">
            Create an Agency Operator Account
          </p>
        </div>

        {authError && (
          <p role="alert" className="mb-4 text-xs font-medium text-red-700">
            {authError}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-3.5">
          {isVerifyingEmail ? (
            <div>
              <label className="block text-xs font-semibold text-[#1a1c1c] mb-1">
                Email Verification Code
              </label>
              <div className="bg-white/80 border border-gray-200 rounded-2xl px-4 py-2.5 flex items-center gap-2 shadow-2xs">
                <span className="material-symbols-outlined text-[#7e7576] text-lg">
                  mail
                </span>
                <input
                  type="text"
                  required
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  placeholder="Enter the code from your email"
                  value={verificationCode}
                  onChange={(event) => setVerificationCode(event.target.value)}
                  className="w-full text-xs font-medium text-[#1a1c1c] bg-transparent outline-none placeholder:text-[#cfc4c5]"
                />
              </div>
            </div>
          ) : (
            <>
              <div>
                <label className="block text-xs font-semibold text-[#1a1c1c] mb-1">
                  Agency Name
                </label>
                <div className="bg-white/80 border border-gray-200 rounded-2xl px-4 py-2.5 flex items-center gap-2 shadow-2xs">
                  <span className="material-symbols-outlined text-[#7e7576] text-lg">
                    corporate_fare
                  </span>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Finex, Touristique, General Express"
                    value={formData.agencyName}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        agencyName: event.target.value,
                      })
                    }
                    className="w-full text-xs font-medium text-[#1a1c1c] bg-transparent outline-none placeholder:text-[#cfc4c5]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1a1c1c] mb-1">
                  Agent Full Name
                </label>
                <div className="bg-white/80 border border-gray-200 rounded-2xl px-4 py-2.5 flex items-center gap-2 shadow-2xs">
                  <span className="material-symbols-outlined text-[#7e7576] text-lg">
                    badge
                  </span>
                  <input
                    type="text"
                    required
                    placeholder="Agent Name"
                    value={formData.agentName}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        agentName: event.target.value,
                      })
                    }
                    className="w-full text-xs font-medium text-[#1a1c1c] bg-transparent outline-none placeholder:text-[#cfc4c5]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1a1c1c] mb-1">
                  Agent Phone Number
                </label>
                <input
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="+237 6XX XXX XXX"
                  value={formData.agentPhone}
                  onChange={(event) => setFormData({ ...formData, agentPhone: event.target.value })}
                  className="w-full bg-white/80 border border-gray-200 rounded-2xl px-4 py-2.5 text-xs font-medium text-[#1a1c1c] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1a1c1c] mb-1">
                  Agency Headquarters / Main Station
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Douala Central Terminal"
                  value={formData.hqLocation}
                  onChange={(event) => setFormData({ ...formData, hqLocation: event.target.value })}
                  className="w-full bg-white/80 border border-gray-200 rounded-2xl px-4 py-2.5 text-xs font-medium text-[#1a1c1c] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1a1c1c] mb-1">
                  Primary Routes / Network
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Douala–Yaoundé, Bafoussam–Bamenda"
                  value={formData.primaryRoutes}
                  onChange={(event) => setFormData({ ...formData, primaryRoutes: event.target.value })}
                  className="w-full bg-white/80 border border-gray-200 rounded-2xl px-4 py-2.5 text-xs font-medium text-[#1a1c1c] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1a1c1c] mb-1">
                  Agent&apos;s Assigned Terminal <span className="font-normal text-[#7e7576]">(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Defaults to the agency main station"
                  value={formData.terminalName}
                  onChange={(event) => setFormData({ ...formData, terminalName: event.target.value })}
                  className="w-full bg-white/80 border border-gray-200 rounded-2xl px-4 py-2.5 text-xs font-medium text-[#1a1c1c] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1a1c1c] mb-1">
                  Service Type <span className="font-normal text-[#7e7576]">(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Intercity passenger transport"
                  value={formData.serviceType}
                  onChange={(event) => setFormData({ ...formData, serviceType: event.target.value })}
                  className="w-full bg-white/80 border border-gray-200 rounded-2xl px-4 py-2.5 text-xs font-medium text-[#1a1c1c] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1a1c1c] mb-1">
                  Fleet Size <span className="font-normal text-[#7e7576]">(optional)</span>
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Number of buses"
                  value={formData.activeFleetCount}
                  onChange={(event) => setFormData({ ...formData, activeFleetCount: event.target.value })}
                  className="w-full bg-white/80 border border-gray-200 rounded-2xl px-4 py-2.5 text-xs font-medium text-[#1a1c1c] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1a1c1c] mb-1">
                  Work Email
                </label>
                <div className="bg-white/80 border border-gray-200 rounded-2xl px-4 py-2.5 flex items-center gap-2 shadow-2xs">
                  <span className="material-symbols-outlined text-[#7e7576] text-lg">
                    mail
                  </span>
                  <input
                    type="email"
                    required
                    placeholder="agent@agency.cm"
                    value={formData.email}
                    onChange={(event) =>
                      setFormData({ ...formData, email: event.target.value })
                    }
                    className="w-full text-xs font-medium text-[#1a1c1c] bg-transparent outline-none placeholder:text-[#cfc4c5]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1a1c1c] mb-1">
                  Password
                </label>
                <div className="bg-white/80 border border-gray-200 rounded-2xl px-4 py-2.5 flex items-center gap-2 shadow-2xs">
                  <span className="material-symbols-outlined text-[#7e7576] text-lg">
                    lock
                  </span>
                  <input
                    type="password"
                    required
                    placeholder="Create password"
                    value={formData.password}
                    onChange={(event) =>
                      setFormData({ ...formData, password: event.target.value })
                    }
                    className="w-full text-xs font-medium text-[#1a1c1c] bg-transparent outline-none placeholder:text-[#cfc4c5]"
                  />
                </div>
              </div>
            </>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#1a1c1c] text-white font-semibold py-3.5 rounded-full hover:scale-[1.02] active:scale-95 transition-all shadow-md text-xs sm:text-sm cursor-pointer mt-4 disabled:opacity-60"
          >
            {isSubmitting
              ? isClerkSessionFinalized
                ? "Linking Agency..."
                : isVerifyingEmail
                  ? "Verifying..."
                  : "Creating Account..."
              : isClerkSessionFinalized
                ? "Finish Agency Setup"
                : isVerifyingEmail
                  ? "Verify Email"
                  : "Create Account"}
          </button>
        </form>

        <div className="text-center mt-6 pt-4 border-t border-[#cfc4c5]/30">
          <p className="text-xs text-[#7e7576]">
            Already registered?{" "}
            <Link
              href="/login"
              className="font-bold text-[#1a1c1c] hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
