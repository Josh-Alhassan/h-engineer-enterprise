import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { OFFICE_CONTACT_INFO } from '../data';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'Our Process' },
    { id: 'resources', label: 'Portfolio' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-xs">
      {/* Top bar with quick contact info */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6">
            <a href={`tel:${OFFICE_CONTACT_INFO.phoneRaw}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3 h-3 text-sky-400" />
              <span>{OFFICE_CONTACT_INFO.phone}</span>
            </a>
            <a href={`mailto:${OFFICE_CONTACT_INFO.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3 h-3 text-sky-400" />
              <span>{OFFICE_CONTACT_INFO.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-1.5 text-center sm:text-right">
            <MapPin className="w-3 h-3 text-sky-400" />
            <span className="truncate max-w-[280px] sm:max-w-none">GF04 Noble Plaza, Garki, Abuja</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Brand matching the PDF screen logo */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-3 cursor-pointer group"
            id="logo-button"
          >
            {/* Custom Hexagonal 'H' Logo */}
            <div className="relative w-12 h-12 flex items-center justify-center">
              {/* Outer Blue Hexagon */}
              <svg viewBox="0 0 100 100" className="w-12 h-12 text-[#0E3572] fill-current drop-shadow-md group-hover:scale-105 transition-transform duration-300">
                <polygon points="50,3 93,25 93,75 50,97 7,75 7,25" />
                {/* Internal lighter border polygon for depth */}
                <polygon points="50,9 88,28 88,72 50,91 12,72 12,28" className="text-white fill-none stroke-[#0E3572] stroke-2 opacity-10" />
                {/* White stylized letter H in the center */}
                <path 
                  d="M 32 28 L 44 28 L 44 44 L 56 44 L 56 28 L 68 28 L 68 72 L 56 72 L 56 56 L 44 56 L 44 72 L 32 72 Z" 
                  fill="white" 
                />
              </svg>
            </div>
            
            {/* Text branding */}
            <div className="flex flex-col">
              <span className="text-xl font-bold text-[#0E3572] tracking-tight font-sans leading-none uppercase">
                H-Engineers
              </span>
              <span className="text-[10px] font-semibold text-gray-500 tracking-widest uppercase mt-1 leading-none">
                Enterprise
              </span>
            </div>
          </div>

          {/* Desktop Navigation links */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === item.id
                    ? 'bg-slate-100 text-[#0E3572] font-semibold'
                    : 'text-gray-600 hover:text-[#0E3572] hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              id="header-cta"
              className="ml-4 bg-[#0E3572] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-950 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-md"
            >
              Get Consultation
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-[#0E3572] hover:bg-gray-100 transition-colors focus:outline-none"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white shadow-xl absolute top-20 left-0 w-full z-40 animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-colors flex items-center justify-between ${
                  activeTab === item.id
                    ? 'bg-slate-100 text-[#0E3572]'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-[#0E3572]'
                }`}
              >
                <span>{item.label}</span>
                {activeTab === item.id && <span className="w-2 h-2 rounded-full bg-[#0E3572]"></span>}
              </button>
            ))}
            <div className="pt-4 border-t border-gray-100">
              <button
                onClick={() => handleNavClick('contact')}
                id="mobile-header-cta"
                className="w-full text-center bg-[#0E3572] text-white py-3.5 rounded-xl font-bold text-base hover:bg-blue-950 transition-all shadow-md"
              >
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
