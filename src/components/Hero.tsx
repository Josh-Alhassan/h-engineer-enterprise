import React from 'react';
import { ArrowRight, Zap, Shield, Sun, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export default function Hero({ onExploreClick, onContactClick }: HeroProps) {
  const specialties = [
    { label: "Design", icon: "📐" },
    { label: "Procurement", icon: "📦" },
    { label: "Installation", icon: "🛠️" },
    { label: "Maintenance", icon: "⚙️" },
    { label: "Consultancy", icon: "🤝" }
  ];

  return (
    <section className="relative overflow-hidden bg-radial from-slate-900 via-slate-950 to-black text-white py-16 lg:py-28 px-4 sm:px-6 lg:px-8">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25"></div>

      {/* Decorative colored blurred spheres */}
      <div className="absolute top-12 left-1/4 w-72 h-72 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-12 right-1/4 w-96 h-96 bg-sky-500 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse duration-5000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero text and buttons */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#0E3572] text-sky-300 border border-blue-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping"></span>
                Engineering • Technology • Infrastructure
              </span>
            </div>

            {/* Slogan from the PDF */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Building Trust Through <br />
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Engineering Excellence
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              H-Engineers Enterprise delivers premier multidisciplinary infrastructure solutions across electrical systems, renewable solar power, ICT network cabins, and industrial security automation.
            </p>

            {/* Quick value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300 py-2 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="w-4 h-4 text-[#328CC1]" />
                <span>Complimentary 6-Month PPM</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="w-4 h-4 text-[#328CC1]" />
                <span>Certified COREN Engineers</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="w-4 h-4 text-[#328CC1]" />
                <span>Authentic Global Brand Sourcing</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="w-4 h-4 text-[#328CC1]" />
                <span>Turnkey Diagnostic Testing</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button
                onClick={onExploreClick}
                id="hero-primary-cta"
                className="bg-[#0E3572] hover:bg-blue-900 text-white font-bold px-8 py-4 rounded-xl text-base transition-all shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group cursor-pointer"
              >
                Explore Business Units
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={onContactClick}
                id="hero-secondary-cta"
                className="bg-transparent hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl text-base border border-slate-700 hover:border-slate-500 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Get Free Consultation
              </button>
            </div>

            {/* Specialties tag cloud */}
            <div className="pt-6 border-t border-slate-800/60">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 text-center lg:text-left">
                End-To-End Deliverables:
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
                {specialties.map((spec, idx) => (
                  <span 
                    key={idx} 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800/40 text-slate-200 border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    <span>{spec.icon}</span>
                    <span>{spec.label}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Interactive Hero Side Panel (Visual representation of core business units) */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <div className="relative w-full max-w-md aspect-square bg-slate-900/60 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl overflow-hidden flex flex-col justify-between">
              {/* Internal layout graphics */}
              <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#0E3572]/30 rounded-full filter blur-xl"></div>
              
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-emerald-400">
                    Live Project Status
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">ID: H-ENG-72</span>
              </div>

              {/* Graphic elements showcasing their services */}
              <div className="space-y-4 my-6">
                <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800/80 hover:border-blue-500/40 transition-colors flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400">
                    <Sun className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-baseline">
                      <h4 className="text-sm font-bold text-slate-100">Renewable Solar</h4>
                      <span className="text-xs text-slate-400">65 kWp Installed</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className="bg-amber-400 h-full w-[88%] rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800/80 hover:border-blue-500/40 transition-colors flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-baseline">
                      <h4 className="text-sm font-bold text-slate-100">Electrical Engineering</h4>
                      <span className="text-xs text-slate-400">Commissioned</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className="bg-sky-400 h-full w-full rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800/80 hover:border-blue-500/40 transition-colors flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-baseline">
                      <h4 className="text-sm font-bold text-slate-100">Security IP CCTV</h4>
                      <span className="text-xs text-slate-400">VMS Active</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className="bg-indigo-400 h-full w-[94%] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats row in the card */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-800 text-center">
                <div>
                  <p className="text-lg font-extrabold text-white">99.8%</p>
                  <p className="text-[10px] uppercase tracking-wider text-slate-400">Uptime Rate</p>
                </div>
                <div>
                  <p className="text-lg font-extrabold text-white">100%</p>
                  <p className="text-[10px] uppercase tracking-wider text-slate-400">Authentic</p>
                </div>
                <div>
                  <p className="text-lg font-extrabold text-[#328CC1]">6 Mo</p>
                  <p className="text-[10px] uppercase tracking-wider text-slate-400">Free PPM</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
