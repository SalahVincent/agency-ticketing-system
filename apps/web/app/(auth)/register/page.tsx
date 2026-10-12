import { SignUp } from '@clerk/nextjs';
import Link from 'next/link';
import { clerkAppearance } from '@/lib/clerk-appearance';

export default function RegisterPage() {
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

        <SignUp
          routing="hash"
          signInUrl="/login"
          forceRedirectUrl="/dashboard"
          appearance={clerkAppearance}
        />

        <div className="text-center mt-6 pt-4 border-t border-[#cfc4c5]/30">
          <p className="text-xs text-[#7e7576]">
            Already registered?{' '}
            <Link href="/login" className="font-bold text-[#1a1c1c] hover:underline">
              Sign In
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}