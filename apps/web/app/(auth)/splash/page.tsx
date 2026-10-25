"use client";

import { useRouter } from "next/navigation";
import SplashScreen from "@/components/auth/SplashScreen";

export default function SplashPage() {
  const router = useRouter();

  const handleFinish = () => {
    const hasOnboarded =
      typeof window !== "undefined" &&
      localStorage.getItem("has_onboarded") === "true";

    if (hasOnboarded) {
      router.replace("/login");
    } else {
      router.replace("/onboarding");
    }
  };

  return <SplashScreen onFinish={handleFinish} />;
}
