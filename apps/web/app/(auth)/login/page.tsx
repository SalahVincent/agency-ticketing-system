import { SignIn } from '@clerk/nextjs';
import Link from 'next/link';
import { clerkAppearance } from '@/lib/clerk-appearance';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col justify-center items-center px-4 py-8">
      <div className="w-full max-w-md bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.03)] rounded-3xl p-6 sm:p-8">
        
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-black text-white flex items-center justify-center mb-3 shadow-sm">
            <span className="material-symbols-outlined text-2xl">directions_bus</span>
          </div>
          <div className="text-xl font-extrabold tracking-tight text-[#1a1c1c]">
            CAMEWEGO
          </div>
          <p className="text-xs text-[#7e7576] font-medium mt-1">
            Sign in to access your terminal dashboard
          </p>
        </div>

        <SignIn
          routing="hash"
          signUpUrl="/register"
          forceRedirectUrl="/dashboard"
          appearance={clerkAppearance}
        />

        {/* Register Redirect */}
        <div className="text-center mt-6 pt-4 border-t border-[#cfc4c5]/30">
          <p className="text-xs text-[#7e7576]">
            Don't have an agent account?{' '}
            <Link href="/register" className="font-bold text-[#1a1c1c] hover:underline">
              Register Station
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}