'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Lock, Mail, Loader2, Shield } from 'lucide-react';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      router.push('/admin/dashboard');
    }
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001'}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('adminToken', data.token);
        localStorage.setItem('adminName', data.name);
        router.push('/admin/dashboard');
      } else {
        setError(data.message || 'Invalid credentials');
      }
    } catch (err) {
      setError('Connection refused. Is the backend running?');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1e1e1f] flex items-center justify-center p-4 sm:p-6 font-sans">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-sm"
      >
        <div className="mb-8 sm:mb-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Shield size={24} className="text-teal-400 sm:w-7 sm:h-7" />
            <h1 className="text-white text-xl sm:text-2xl font-black tracking-tight uppercase">Admin <span className="text-teal-400">Login</span></h1>
          </div>
          <p className="text-white/40 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">Authorized Access Only</p>
        </div>

        <div className="bg-[#2b2b2c] p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-white/5 shadow-2xl relative">
          {error && (
            <div className="mb-6 p-3 sm:p-4 bg-red-400/10 border border-red-400/20 rounded-xl sm:rounded-2xl text-red-400 text-xs font-bold">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <label className="text-white/40 text-[10px] font-bold uppercase tracking-widest ml-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@email.com"
                required
                className="w-full bg-[#1e1e1f] text-white/90 px-4 py-3.5 sm:px-5 sm:py-4 rounded-xl sm:rounded-2xl border border-white/5 focus:outline-none focus:border-teal-400/30 transition-all text-sm font-medium placeholder:text-white/10"
              />
            </div>

            <div className="space-y-2">
              <label className="text-white/40 text-[10px] font-bold uppercase tracking-widest ml-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full bg-[#1e1e1f] text-white/90 px-4 py-3.5 sm:px-5 sm:py-4 rounded-xl sm:rounded-2xl border border-white/5 focus:outline-none focus:border-teal-400/30 transition-all text-sm font-medium placeholder:text-white/10"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-teal-400 hover:bg-teal-500 text-black py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-black text-sm transition-all active:scale-95 disabled:opacity-50 mt-2 shadow-lg shadow-teal-400/10"
            >
              {loading ? <Loader2 className="animate-spin mx-auto" size={20} /> : 'ENTER DASHBOARD'}
            </button>
          </form>
        </div>

      </motion.div>
    </div>
  );
}
