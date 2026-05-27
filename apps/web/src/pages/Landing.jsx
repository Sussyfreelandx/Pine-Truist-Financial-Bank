import React from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from '../components/Brand.jsx';

/* ──────────────────────────────────────────────────────────
   Icons
────────────────────────────────────────────────────────── */

function ShieldIcon({ className = 'w-6 h-6' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3L5 6V11C5 16 8.4 20.4 12 21C15.6 20.4 19 16 19 11V6L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 11.5L11.2 13.2L14.8 9.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TransferIcon({ className = 'w-6 h-6' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 7H18M18 7L15 4M18 7L15 10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 17H6M6 17L9 14M6 17L9 20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon({ className = 'w-6 h-6' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="8"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 8V12L15 14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon({ className = 'w-5 h-5' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="10" fill="#16a34a" />
      <path
        d="M6 10L8.5 12.5L14 7"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ──────────────────────────────────────────────────────────
   Data
────────────────────────────────────────────────────────── */

const features = [
  {
    title: 'Real-Time Transfers',
    description:
      'Move funds instantly between accounts with secure transfer infrastructure and live transaction updates.',
    icon: TransferIcon,
  },
  {
    title: 'Advanced Protection',
    description:
      'Multi-layered authentication, encrypted sessions, and continuous fraud monitoring protect every account.',
    icon: ShieldIcon,
  },
  {
    title: '24/7 Accessibility',
    description:
      'Access your accounts, monitor activity, and manage finances securely anytime from anywhere.',
    icon: ClockIcon,
  },
];

const securityPoints = [
  'FDIC insured banking accounts',
  'Encrypted account access and authentication',
  'Continuous fraud and risk monitoring',
  'Secure digital account management',
];

/* ──────────────────────────────────────────────────────────
   Landing Page
────────────────────────────────────────────────────────── */

export function Landing() {
  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-[-120px] w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-[-250px] right-[-120px] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
          <BrandLogo variant="dark" />

          <nav className="hidden lg:flex items-center gap-10 text-sm text-slate-300 font-medium">
            <a href="#home" className="hover:text-white transition-colors">
              Home
            </a>

            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>

            <a href="#security" className="hover:text-white transition-colors">
              Security
            </a>

            <a href="#support" className="hover:text-white transition-colors">
              Support
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="hidden sm:flex items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-5 py-2.5 text-sm font-semibold transition-all"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="flex items-center justify-center rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black px-5 py-2.5 text-sm font-bold transition-all shadow-[0_0_25px_rgba(16,185,129,0.35)]"
            >
              Open Account
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative pt-24 pb-20 lg:pt-32 lg:pb-28"
      >
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-emerald-300 mb-8">
              Secure Digital Banking
            </div>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight">
              Banking
              <span className="block text-slate-400 font-semibold">
                Designed For
              </span>
              <span className="block bg-gradient-to-r from-white via-emerald-200 to-emerald-500 bg-clip-text text-transparent">
                Modern Finance
              </span>
            </h1>

            <p className="mt-8 text-lg text-slate-400 leading-relaxed max-w-xl">
              Experience a premium banking platform focused on security,
              transparency, and seamless financial management with real-time
              account access and protected digital transactions.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/register"
                className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-7 py-4 transition-all shadow-[0_0_35px_rgba(16,185,129,0.35)]"
              >
                Get Started
              </Link>

              <Link
                to="/login"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 px-7 py-4 font-semibold transition-all"
              >
                Secure Login
              </Link>
            </div>

            <div className="mt-12 grid sm:grid-cols-3 gap-5">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-3xl font-black">24/7</p>
                <p className="text-sm text-slate-400 mt-1">
                  Account accessibility
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-3xl font-black">256-bit</p>
                <p className="text-sm text-slate-400 mt-1">
                  Encrypted security
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-3xl font-black">Real-Time</p>
                <p className="text-sm text-slate-400 mt-1">
                  Transaction updates
                </p>
              </div>
            </div>
          </div>

          {/* Right UI */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full" />

            <div className="relative w-full max-w-[520px] rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-2xl overflow-hidden">
              {/* Top */}
              <div className="flex items-center justify-between px-7 py-6 border-b border-white/10">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                    Pine Truist
                  </p>
                  <h3 className="text-xl font-bold mt-1">
                    Account Overview
                  </h3>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center border border-emerald-500/20">
                  <ShieldIcon className="w-6 h-6 text-emerald-400" />
                </div>
              </div>

              {/* Body */}
              <div className="p-7">
                {/* Balance Card */}
                <div className="rounded-3xl bg-gradient-to-br from-emerald-500 to-emerald-700 p-7 shadow-xl">
                  <p className="text-sm text-emerald-100">
                    Primary Checking
                  </p>

                  <div className="mt-7 flex items-end justify-between">
                    <div>
                      <div className="h-4 w-24 rounded-full bg-white/25 mb-3" />
                      <div className="h-8 w-40 rounded-full bg-white/30" />
                    </div>

                    <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center">
                      <TransferIcon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  {['Transfer', 'Payments', 'Security'].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all p-4 text-center"
                    >
                      <div className="w-11 h-11 mx-auto rounded-xl bg-white/10 flex items-center justify-center mb-3">
                        <div className="w-4 h-4 rounded-full bg-emerald-400" />
                      </div>

                      <p className="text-sm font-semibold text-slate-200">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Activity */}
                <div className="mt-8">
                  <div className="flex items-center justify-between mb-5">
                    <h4 className="font-bold text-lg">
                      Recent Activity
                    </h4>

                    <span className="text-sm text-emerald-400 font-medium">
                      Live Updates
                    </span>
                  </div>

                  <div className="space-y-4">
                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 flex items-center justify-center">
                            <div className="w-3 h-3 rounded-full bg-emerald-400" />
                          </div>

                          <div>
                            <div className="h-3 w-28 rounded-full bg-white/20 mb-2" />
                            <div className="h-2 w-20 rounded-full bg-white/10" />
                          </div>
                        </div>

                        <div className="h-4 w-16 rounded-full bg-white/20" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="relative py-24 border-t border-white/5"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-emerald-400 font-bold">
              Services
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-black leading-tight">
              Secure banking infrastructure built for everyday finance
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-7 mt-16">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-[28px] border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] p-8 transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="mt-7 text-2xl font-bold">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security */}
      <section
        id="security"
        className="relative py-24 border-t border-white/5"
      >
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-emerald-400 font-bold">
              Security
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-black leading-tight">
              Built with protection at every layer
            </h2>

            <p className="mt-6 text-lg text-slate-400 leading-relaxed">
              Pine Truist Finance Bank combines encrypted infrastructure,
              real-time account monitoring, and secure authentication systems
              to protect user access and financial activity across every
              session.
            </p>
          </div>

          <div className="space-y-5">
            {securityPoints.map((point) => (
              <div
                key={point}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <CheckIcon className="w-6 h-6 flex-shrink-0 mt-0.5" />

                <p className="text-slate-200 font-medium">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="support"
        className="relative py-24 border-t border-white/5"
      >
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-10 md:p-16 text-center overflow-hidden relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-emerald-500/10 blur-3xl rounded-full" />

            <div className="relative">
              <p className="text-sm uppercase tracking-[0.25em] text-emerald-400 font-bold">
                Start Banking
              </p>

              <h2 className="mt-5 text-4xl md:text-5xl font-black leading-tight">
                Secure access to modern digital banking
              </h2>

              <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
                Create your account and manage your finances through a secure,
                real-time banking experience designed for reliability and
                accessibility.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-8 py-4 transition-all"
                >
                  Open Account
                </Link>

                <Link
                  to="/login"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 px-8 py-4 font-semibold transition-all"
                >
                  Access Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-sm text-slate-500 text-center lg:text-left">
            © {new Date().getFullYear()} Pine Truist Finance Bank.
            All rights reserved.
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <a href="#security" className="hover:text-white transition-colors">
              Security
            </a>

            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>

            <a href="#support" className="hover:text-white transition-colors">
              Support
            </a>

            <a href="#home" className="hover:text-white transition-colors">
              Home
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
