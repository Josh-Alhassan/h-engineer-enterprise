import React, { useState } from 'react';
import { Phone, Mail, MapPin, ArrowUp, Send, CheckCircle2 } from 'lucide-react';
import { OFFICE_CONTACT_INFO } from '../data';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-900">
          
          {/* Brand block (Col 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleNavClick('home')}>
              {/* Custom Hexagon 'H' Logo in footer */}
              <div className="relative w-10 h-10 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-10 h-10 text-sky-500 fill-current">
                  <polygon points="50,3 93,25 93,75 50,97 7,75 7,25" />
                  <path 
                    d="M 32 28 L 44 28 L 44 44 L 56 44 L 56 28 L 68 28 L 68 72 L 56 72 L 56 56 L 44 56 L 44 72 L 32 72 Z" 
                    fill="black" 
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-tight uppercase leading-none">
                  H-Engineers
                </span>
                <span className="text-[9px] font-semibold text-sky-400 tracking-widest uppercase mt-0.5 leading-none">
                  Enterprise
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              "Building Trust Through Engineering Excellence." We deliver premium turnkey solutions across electrical power grids, hybrid solar grids, ICT networks, and security surveillance systems.
            </p>

            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`tel:${OFFICE_CONTACT_INFO.phoneRaw}`} className="hover:text-white transition-colors">{OFFICE_CONTACT_INFO.phone}</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${OFFICE_CONTACT_INFO.email}`} className="hover:text-white transition-colors">{OFFICE_CONTACT_INFO.email}</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{OFFICE_CONTACT_INFO.officeAddress}</span>
              </div>
            </div>
          </div>

          {/* Quick links block (Col 6-8) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Quick Directory
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-sky-400 transition-colors cursor-pointer text-left">
                  Homepage
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-sky-400 transition-colors cursor-pointer text-left">
                  Business Units
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('process')} className="hover:text-sky-400 transition-colors cursor-pointer text-left">
                  Our Engineering Process
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('resources')} className="hover:text-sky-400 transition-colors cursor-pointer text-left">
                  Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-sky-400 transition-colors cursor-pointer text-left">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter block (Col 9-12) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Technical Resources Bulletin
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe to receive complimentary engineering guidelines, technical webinar links, and solar cost optimization checklists.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-950/40 border border-emerald-900 rounded-xl flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Subscription Saved! Check inbox shortly.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="name@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 rounded-xl px-3 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-sky-500 flex-1"
                  id="footer-email-input"
                />
                <button
                  type="submit"
                  className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-3 py-2.5 rounded-xl text-xs flex items-center justify-center transition-colors cursor-pointer"
                  id="footer-subscribe-button"
                  aria-label="Subscribe"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}

            <div className="text-[10px] text-slate-500 leading-relaxed pt-2">
              *H-Engineers Enterprise does not spam or share emails with external databases.
            </div>
          </div>

        </div>

        {/* Lower footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-slate-500 text-center sm:text-left">
            &copy; 2026 H-Engineers Enterprise. All Rights Reserved. Abuja, Nigeria.
          </p>

          {/* Slogan line from bottom of the PDF */}
          <div className="text-[11px] font-bold text-slate-400 flex flex-wrap justify-center gap-1">
            <span>Engineering</span>
            <span>•</span>
            <span>Technology</span>
            <span>•</span>
            <span>Infrastructure</span>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 rounded-full transition-colors flex items-center justify-center"
            id="back-to-top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
