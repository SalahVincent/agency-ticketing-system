"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface Slide {
  id: number;
  icon: string;
  badge: string;
  badgeBg: string;
  badgeText: string;
  iconBg: string;
  iconColor: string;
  title: string;
  subtitle: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: 1,
    icon: "directions_bus",
    badge: "Operations",
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-700",
    iconBg: "bg-blue-600",
    iconColor: "text-white",
    title: "Fleet & Seat Management",
    subtitle: "Real-time Station Dispatch",
    description:
      "Effortlessly track schedules, manage coaster and VIP seat layouts, and process passenger pre-bookings.",
  },
  {
    id: 2,
    icon: "qr_code_scanner",
    badge: "Express Gate",
    badgeBg: "bg-amber-100",
    badgeText: "text-amber-800",
    iconBg: "bg-amber-500",
    iconColor: "text-white",
    title: "Instant Boarding & Scan",
    subtitle: "Terminal Check-in Verification",
    description:
      "Validate e-tickets instantly at terminal gates using our integrated jsQR code scanner.",
  },
  {
    id: 3,
    icon: "chat",
    badge: "Automation",
    badgeBg: "bg-emerald-100",
    badgeText: "text-emerald-700",
    iconBg: "bg-emerald-600",
    iconColor: "text-white",
    title: "WhatsApp Booking Bot",
    subtitle: "Automated Client Booking",
    description:
      "Configure auto-reply rules for passenger schedule inquiries, seat map checks, and instant ticket issues.",
  },
];

export default function OnboardingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else {
      completeOnboarding();
    }
  };

  const completeOnboarding = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("has_onboarded", "true");
    }
    router.replace("/login");
  };

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col justify-between items-center px-4 py-8 sm:py-12">
      {/* Container matching dashboard container styling */}
      <div className="w-full max-w-md flex-1 flex flex-col justify-between bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.03)] rounded-3xl p-6 sm:p-8">
        {/* Top Bar */}
        <div className="flex justify-between items-center">
          <span
            className={`text-[10px] sm:text-xs font-bold tracking-wider px-3 py-1 rounded-full ${slide.badgeBg} ${slide.badgeText}`}
          >
            {slide.badge}
          </span>
          {currentSlide < slides.length - 1 && (
            <button
              type="button"
              onClick={completeOnboarding}
              className="text-xs font-semibold text-[#7e7576] hover:text-[#1a1c1c] transition-colors cursor-pointer"
            >
              Skip
            </button>
          )}
        </div>

        {/* Center Content */}
        <div className="my-auto text-center space-y-6 py-8">
          <div
            className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full ${slide.iconBg} ${slide.iconColor} flex items-center justify-center shadow-md transition-all duration-300`}
          >
            <span className="material-symbols-outlined text-3xl sm:text-4xl">
              {slide.icon}
            </span>
          </div>

          <div className="space-y-2">
            <span className="text-xs text-[#7e7576] font-medium">
              {slide.subtitle}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1c1c] tracking-tight">
              {slide.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#4c4546] leading-relaxed max-w-xs mx-auto">
              {slide.description}
            </p>
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="space-y-6 pt-4">
          {/* Slide Indicator Dots */}
          <div className="flex justify-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide
                    ? "w-8 bg-[#1a1c1c]"
                    : "w-2 bg-[#cfc4c5]/50"
                }`}
              />
            ))}
          </div>

          {/* Action Button */}
          <button
            type="button"
            onClick={handleNext}
            className="w-full bg-[#1a1c1c] text-white font-semibold py-3.5 rounded-full hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md text-xs sm:text-sm"
          >
            <span>
              {currentSlide === slides.length - 1 ? "Get Started" : "Continue"}
            </span>
            <span className="material-symbols-outlined text-base">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
