import React from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from '../components/Brand.jsx';

/* ─── Icon Components ──────────────────────────────────────────────── */

function EasyTransfersIcon({ className = 'w-12 h-12' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#0ea5e9" />
      <path
        d="M14 20h14m0 0l-4-4m4 4l-4 4M34 28H20m0 0l4 4m-4-4l4-4"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SecureBankingIcon({ className = 'w-12 h-12' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#06b6d4" />
      <path
        d="M24 12l-10 5v7c0 6.5 4.2 12.6 10 14 5.8-1.4 10-7.5 10-14v-7l-10-5z"
        fill="none"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M20 24l3 3 5-6"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SupportIcon({ className = 'w-12 h-12' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#8b5cf6" />
      <path d="M16 28v-4a8 8 0 1116 0v4" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <rect x="12" y="26" width="4" height="8" rx="2" fill="white" />
      <rect x="32" y="26" width="4" height="8" rx="2" fill="white" />
      <path d="M32 34c0 3-3 4-6 4h-2" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function GreenCheckIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#10b981" />
      <path
        d="M8 12l3 3 5-6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 1l-8 4v7c0 6 8 11 8 11s8-5 8-11V5l-8-4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrendIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="17 6 23 6 23 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LockIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const serviceCards = [
  {
    title: 'Smart Checking',
    desc: 'Real-time balance updates, instant transfers, and intelligent spending insights at your fingertips.',
    icon: EasyTransfersIcon,
  },
  {
    title: 'Secure Banking',
    desc: 'Enterprise-grade encryption, multi-factor authentication, and continuous fraud protection.',
    icon: SecureBankingIcon,
  },
  {
    title: '24/7 Support',
    desc: 'Dedicated support team available round-the-clock to help with any questions or concerns.',
    icon: SupportIcon,
  },
];

const securityFeatures = [
  {
    icon: ShieldIcon,
    title: 'Multi-Layer Security',
    desc: 'Advanced encryption and biometric authentication protect every transaction.',
  },
  {
    icon: LockIcon,
    title: 'Privacy First',
    desc: 'Your data is never shared. Complete control over your personal information.',
  },
  {
    icon: TrendIcon,
    title: 'Real-Time Monitoring',
    desc: 'AI-powered fraud detection monitors activities 24/7 for maximum protection.',
  },
];

const stats = [
  { value: '2M+', label: 'Active Users' },
  { value: '99.9%', label: 'Uptime' },
  { value: '$150B+', label: 'Assets Managed' },
];

/* ─── Landing Page ──────────────────────────────────────────────────── */

export function Landing() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-hidden">
      {/* ── Header ─────────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <BrandLogo variant="dark" />
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
            <a href="#home" className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
              Home
            </a>
            <a href="#features" className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
              Features
            </a>
            <a href="#security" className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
              Security
            </a>
            <a href="#stats" className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
              Why Us
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="hidden sm:inline-flex px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors text-sm font-medium"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="inline-flex px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm font-semibold shadow-md"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* ── Hero Section ───────────────────────────────────────────── */}
      <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Background gradient elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob" />
          <div className="absolute top-40 left-10 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
        </div>

        <div className="mx-auto max-w-7xl relative">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Left column - Text */}
            <div className="flex flex-col justify-center">
              <div className="mb-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold tracking-widest">
                  NEXT-GEN BANKING
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
                Banking
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600">
                  Reimagined
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                Experience modern banking with lightning-fast transactions, bank-grade security, and an interface designed for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
                >
                  Open Account
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-gray-300 text-gray-900 font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                >
                  Sign In
                </Link>
              </div>
              <div className="mt-12 flex items-center gap-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column - Visual */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-sm">
                {/* Floating card illustration */}
                <svg
                  viewBox="0 0 400 480"
                  className="w-full drop-shadow-2xl"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                    <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                      <feDropShadow dx="0" dy="10" stdDeviation="20" floodOpacity="0.15" />
                    </filter>
                  </defs>

                  {/* Main card */}
                  <rect x="30" y="40" width="340" height="380" rx="28" fill="url(#cardGradient)" filter="url(#shadow)" />

                  {/* Card gloss effect */}
                  <rect x="30" y="40" width="340" height="190" rx="28" fill="white" opacity="0.1" />

                  {/* Card chip */}
                  <rect x="50" y="80" width="60" height="40" rx="4" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                  <circle cx="60" cy="90" r="3" fill="rgba(255,255,255,0.5)" />
                  <circle cx="70" cy="90" r="3" fill="rgba(255,255,255,0.5)" />
                  <circle cx="80" cy="90" r="3" fill="rgba(255,255,255,0.5)" />
                  <circle cx="60" cy="105" r="3" fill="rgba(255,255,255,0.5)" />
                  <circle cx="70" cy="105" r="3" fill="rgba(255,255,255,0.5)" />

                  {/* Cardholder name area */}
                  <text x="50" y="150" fontSize="11" fill="rgba(255,255,255,0.6)" fontWeight="500">
                    CARDHOLDER
                  </text>
                  <rect x="50" y="160" width="180" height="12" rx="4" fill="rgba(255,255,255,0.2)" />

                  {/* Card number */}
                  <text x="50" y="200" fontSize="28" fill="white" fontWeight="bold" letterSpacing="4">
                    ••••  ••••  ••••  5829
                  </text>

                  {/* Expiry and CVV */}
                  <g>
                    <text x="50" y="245" fontSize="10" fill="rgba(255,255,255,0.7)" fontWeight="500">
                      VALID THRU
                    </text>
                    <rect x="50" y="250" width="50" height="14" rx="3" fill="rgba(255,255,255,0.15)" />
                    <text x="58" y="261" fontSize="11" fill="white" fontWeight="bold">
                      12/26
                    </text>
                  </g>

                  {/* Dashboard preview - balance section */}
                  <rect x="50" y="290" width="300" height="2" fill="rgba(255,255,255,0.2)" />

                  {/* Account balance */}
                  <text x="50" y="320" fontSize="12" fill="rgba(255,255,255,0.7)" fontWeight="500">
                    Available Balance
                  </text>
                  <text x="50" y="345" fontSize="32" fill="white" fontWeight="bold">
                    $24,850
                  </text>

                  {/* Quick stats */}
                  <g>
                    <rect x="50" y="370" width="80" height="35" rx="8" fill="rgba(255,255,255,0.12)" />
                    <text x="65" y="385" fontSize="10" fill="rgba(255,255,255,0.7)" fontWeight="500">
                      Income
                    </text>
                    <text x="65" y="400" fontSize="14" fill="white" fontWeight="bold">
                      +$4,200
                    </text>
                  </g>

                  <g>
                    <rect x="160" y="370" width="80" height="35" rx="8" fill="rgba(255,255,255,0.12)" />
                    <text x="175" y="385" fontSize="10" fill="rgba(255,255,255,0.7)" fontWeight="500">
                      Spending
                    </text>
                    <text x="175" y="400" fontSize="14" fill="white" fontWeight="bold">
                      -$892
                    </text>
                  </g>

                  <g>
                    <rect x="270" y="370" width="80" height="35" rx="8" fill="rgba(255,255,255,0.12)" />
                    <text x="280" y="385" fontSize="10" fill="rgba(255,255,255,0.7)" fontWeight="500">
                      Savings
                    </text>
                    <text x="280" y="400" fontSize="14" fill="white" fontWeight="bold">
                      $8,340
                    </text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features Section ───────────────────────────────────────── */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold tracking-widest mb-4">
              FEATURES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything you need to thrive
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful tools designed for modern banking, all in one secure platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="group relative p-8 rounded-2xl border border-gray-200 bg-white hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="mb-6 inline-block p-3 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{card.desc}</p>
                    <div className="mt-6 flex items-center text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn more
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Security Section ───────────────────────────────────────── */}
      <section id="security" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold tracking-widest mb-4">
                SECURITY FIRST
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Your security is our obsession
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We use enterprise-grade encryption, continuous monitoring, and industry-leading authentication to keep your money and data safe 24/7.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <GreenCheckIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">FDIC Insured</p>
                    <p className="text-gray-600 text-sm">Up to $250,000 per account</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <GreenCheckIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Bank-Grade Encryption</p>
                    <p className="text-gray-600 text-sm">256-bit SSL security standard</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <GreenCheckIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Zero Liability</p>
                    <p className="text-gray-600 text-sm">Protected against fraud and theft</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              {securityFeatures.map((feature) => {
                const FeatureIcon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="p-6 rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 hover:border-emerald-300 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-emerald-50">
                        <FeatureIcon className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Section ───────────────────────────────────────────── */}
      <section id="stats" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trusted by millions worldwide
            </h2>
            <p className="text-xl text-blue-100">Join our growing community of smart savers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-5xl md:text-6xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-lg text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/register"
              className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-blue-600 font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg"
            >
              Start Your Journey Today
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to bank better?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join thousands of customers who've switched to smarter banking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              Create Free Account
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-gray-300 text-gray-900 font-bold hover:border-gray-400 transition-all duration-300"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────── */}
      <footer className="bg-gray-900 text-gray-400 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-bold text-white mb-4">Product</h3>
              <ul className="space-y-3">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#security" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">License</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Connect</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Pine Truist Finance Bank. All rights reserved.
              </p>
              <div className="flex items-center gap-6 mt-4 md:mt-0 text-sm">
                <span className="text-gray-500">Secure Banking Since 2020</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
