"use client";

import React, { useState } from "react";
import { useAuth, useSignIn } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { postApi } from "@/lib/api";

type SecondFactorType = "email_code" | "phone_code" | "totp" | "backup_code";

export default function LoginPage() {
  const router = useRouter();
  const { getToken } = useAuth();
  const { signIn } = useSignIn();
  const [formData, setFormData] = useState({ identifier: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isClerkSessionFinalized, setIsClerkSessionFinalized] = useState(false);
  const [secondFactor, setSecondFactor] = useState<SecondFactorType | null>(
    null,
  );
  const [verificationCode, setVerificationCode] = useState("");

  const finishSignIn = async () => {
    if (!isClerkSessionFinalized) {
      const finalizeResult = await signIn.finalize();
      if (finalizeResult.error) {
        setAuthError(
          finalizeResult.error.message || "Unable to complete sign-in.",
        );
        return;
      }
      setIsClerkSessionFinalized(true);
    }

    await postApi("/agencies/register", getToken, {});
    router.replace("/dashboard");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setAuthError("");
    setIsSubmitting(true);

    try {
      if (isClerkSessionFinalized) {
        await finishSignIn();
        return;
      }

      if (secondFactor) {
        const verificationResult =
          secondFactor === "email_code"
            ? await signIn.mfa.verifyEmailCode({ code: verificationCode })
            : secondFactor === "phone_code"
              ? await signIn.mfa.verifyPhoneCode({ code: verificationCode })
              : secondFactor === "totp"
                ? await signIn.mfa.verifyTOTP({ code: verificationCode })
                : await signIn.mfa.verifyBackupCode({ code: verificationCode });

        if (verificationResult.error) {
          setAuthError(
            verificationResult.error.message ||
              "That verification code could not be confirmed.",
          );
          return;
        }

        if (signIn.status !== "complete") {
          setAuthError("Additional verification is still required.");
          return;
        }

        await finishSignIn();
        return;
      }

      const { error } = await signIn.password({
        identifier: formData.identifier,
        password: formData.password,
      });

      if (error) {
        setAuthError(
          error.message ||
            "Unable to sign in. Check your details and try again.",
        );
        return;
      }

      if (
        signIn.status === "needs_second_factor" ||
        signIn.status === "needs_client_trust"
      ) {
        const emailFactor = signIn.supportedSecondFactors.find(
          (factor) => factor.strategy === "email_code",
        );
        const phoneFactor = signIn.supportedSecondFactors.find(
          (factor) => factor.strategy === "phone_code",
        );
        const totpFactor = signIn.supportedSecondFactors.find(
          (factor) => factor.strategy === "totp",
        );
        const backupCodeFactor = signIn.supportedSecondFactors.find(
          (factor) => factor.strategy === "backup_code",
        );

        if (emailFactor) {
          const result = await signIn.mfa.sendEmailCode();
          if (result.error) {
            setAuthError(
              result.error.message ||
                "Unable to send an email verification code.",
            );
            return;
          }
          setSecondFactor("email_code");
        } else if (phoneFactor) {
          const result = await signIn.mfa.sendPhoneCode();
          if (result.error) {
            setAuthError(
              result.error.message ||
                "Unable to send an SMS verification code.",
            );
            return;
          }
          setSecondFactor("phone_code");
        } else if (totpFactor) {
          setSecondFactor("totp");
        } else if (backupCodeFactor) {
          setSecondFactor("backup_code");
        } else {
          setAuthError(
            "This account requires a verification method that this form does not support.",
          );
          return;
        }

        setVerificationCode("");
        return;
      }

      if (signIn.status !== "complete") {
        setAuthError(
          "Unable to complete sign-in with the available verification methods.",
        );
        return;
      }

      await finishSignIn();
    } catch (error) {
      const clerkError = error as {
        errors?: Array<{ longMessage?: string; message?: string }>;
      };
      setAuthError(
        error instanceof Error
          ? error.message
          : (clerkError.errors?.[0]?.longMessage ??
              clerkError.errors?.[0]?.message ??
              "Unable to sign in. Check your details and try again."),
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col justify-center items-center px-4 py-8">
      <div className="w-full max-w-md bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.03)] rounded-3xl p-6 sm:p-8">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-black text-white flex items-center justify-center mb-3 shadow-sm">
            <span className="material-symbols-outlined text-2xl">
              directions_bus
            </span>
          </div>
          <div className="text-xl font-extrabold tracking-tight text-[#1a1c1c]">
            CAMEWEGO
          </div>
          <p className="text-xs text-[#7e7576] font-medium mt-1">
            Sign in to access your terminal dashboard
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {authError && (
            <p role="alert" className="text-xs font-medium text-red-700">
              {authError}
            </p>
          )}
          {secondFactor ? (
            <div>
              <label className="block text-xs font-semibold text-[#1a1c1c] mb-1.5">
                {secondFactor === "totp"
                  ? "Authenticator Code"
                  : secondFactor === "backup_code"
                    ? "Backup Code"
                    : "Verification Code"}
              </label>
              <div className="bg-white/80 border border-gray-200 rounded-2xl px-4 py-3 flex items-center gap-2 shadow-2xs focus-within:border-black transition-colors">
                <span className="material-symbols-outlined text-[#7e7576] text-lg">
                  verified_user
                </span>
                <input
                  type="text"
                  required
                  autoComplete="one-time-code"
                  inputMode={
                    secondFactor === "backup_code" ? "text" : "numeric"
                  }
                  placeholder={
                    secondFactor === "backup_code"
                      ? "Enter a backup code"
                      : "Enter your verification code"
                  }
                  value={verificationCode}
                  onChange={(event) => setVerificationCode(event.target.value)}
                  className="w-full text-xs font-medium text-[#1a1c1c] bg-transparent outline-none placeholder:text-[#cfc4c5]"
                />
              </div>
              <p className="mt-2 text-xs text-[#7e7576]">
                {secondFactor === "email_code"
                  ? "A code was sent to your email address."
                  : secondFactor === "phone_code"
                    ? "A code was sent to your phone."
                    : secondFactor === "totp"
                      ? "Enter the current code from your authenticator app."
                      : "Enter one of the backup codes for your account."}
              </p>
            </div>
          ) : (
            <>
              <div>
                <label className="block text-xs font-semibold text-[#1a1c1c] mb-1.5">
                  Email or Phone Number
                </label>
                <div className="bg-white/80 border border-gray-200 rounded-2xl px-4 py-3 flex items-center gap-2 shadow-2xs focus-within:border-black transition-colors">
                  <span className="material-symbols-outlined text-[#7e7576] text-lg">
                    person
                  </span>
                  <input
                    type="text"
                    required
                    placeholder="agent@camewego.com or +237..."
                    value={formData.identifier}
                    onChange={(e) =>
                      setFormData({ ...formData, identifier: e.target.value })
                    }
                    className="w-full text-xs font-medium text-[#1a1c1c] bg-transparent outline-none placeholder:text-[#cfc4c5]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1a1c1c] mb-1.5">
                  Password
                </label>
                <div className="bg-white/80 border border-gray-200 rounded-2xl px-4 py-3 flex items-center gap-2 shadow-2xs focus-within:border-black transition-colors">
                  <span className="material-symbols-outlined text-[#7e7576] text-lg">
                    lock
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="w-full text-xs font-medium text-[#1a1c1c] bg-transparent outline-none placeholder:text-[#cfc4c5]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-[#7e7576] hover:text-[#1a1c1c] text-xs font-medium"
                  >
                    <span className="material-symbols-outlined text-lg">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center text-xs">
                <label className="flex items-center gap-2 text-[#4c4546] cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-black focus:ring-0"
                  />
                  <span>Remember me</span>
                </label>
                <a
                  href="#"
                  className="font-semibold text-xs text-[#1a1c1c] hover:underline"
                >
                  Forgot password?
                </a>
              </div>
            </>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#1a1c1c] text-white font-semibold py-3.5 rounded-full hover:scale-[1.02] active:scale-95 transition-all shadow-md text-xs sm:text-sm cursor-pointer mt-2"
          >
            {isSubmitting
              ? isClerkSessionFinalized
                ? "Linking Agency..."
                : secondFactor
                  ? "Verifying..."
                  : "Signing In..."
              : isClerkSessionFinalized
                ? "Finish Agency Setup"
                : secondFactor
                  ? "Verify and Sign In"
                  : "Sign In"}
          </button>
        </form>

        {/* Register Redirect */}
        <div className="text-center mt-6 pt-4 border-t border-[#cfc4c5]/30">
          <p className="text-xs text-[#7e7576]">
            Don't have an agent account?{" "}
            <Link
              href="/register"
              className="font-bold text-[#1a1c1c] hover:underline"
            >
              Register Station
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
