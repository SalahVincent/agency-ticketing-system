'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    agencyName: '',
    agentName: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect registration API
    router.push('/');
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

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="block text-xs font-semibold text-[#1a1c1c] mb-1">
              Agency Name
            </label>
            <div className="bg-white/80 border border-gray-200 rounded-2xl px-4 py-2.5 flex items-center gap-2 shadow-2xs">
              <span className="material-symbols-outlined text-[#7e7576] text-lg">corporate_fare</span>
              <input
                type="text"
                required
                placeholder="e.g. Finex, Touristique, General Express"
                value={formData.agencyName}
                onChange={(e) => setFormData({ ...formData, agencyName: e.target.value })}
                className="w-full text-xs font-medium text-[#1a1c1c] bg-transparent outline-none placeholder:text-[#cfc4c5]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1a1c1c] mb-1">
              Agent Full Name
            </label>
            <div className="bg-white/80 border border-gray-200 rounded-2xl px-4 py-2.5 flex items-center gap-2 shadow-2xs">
              <span className="material-symbols-outlined text-[#7e7576] text-lg">badge</span>
              <input
                type="text"
                required
                placeholder="Agent Name"
                value={formData.agentName}
                onChange={(e) => setFormData({ ...formData, agentName: e.target.value })}
                className="w-full text-xs font-medium text-[#1a1c1c] bg-transparent outline-none placeholder:text-[#cfc4c5]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1a1c1c] mb-1">
              Work Email
            </label>
            <div className="bg-white/80 border border-gray-200 rounded-2xl px-4 py-2.5 flex items-center gap-2 shadow-2xs">
              <span className="material-symbols-outlined text-[#7e7576] text-lg">mail</span>
              <input
                type="email"
                required
                placeholder="agent@agency.cm"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full text-xs font-medium text-[#1a1c1c] bg-transparent outline-none placeholder:text-[#cfc4c5]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1a1c1c] mb-1">
              Password
            </label>
            <div className="bg-white/80 border border-gray-200 rounded-2xl px-4 py-2.5 flex items-center gap-2 shadow-2xs">
              <span className="material-symbols-outlined text-[#7e7576] text-lg">lock</span>
              <input
                type="password"
                required
                placeholder="Create password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full text-xs font-medium text-[#1a1c1c] bg-transparent outline-none placeholder:text-[#cfc4c5]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1a1c1c] text-white font-semibold py-3.5 rounded-full hover:scale-[1.02] active:scale-95 transition-all shadow-md text-xs sm:text-sm cursor-pointer mt-4"
          >
            Create Account
          </button>
        </form>

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