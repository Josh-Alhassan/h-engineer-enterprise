import React, { useState } from 'react';
import { 
  Zap, Sun, Network, Eye, Cpu, Wind, Wrench, ClipboardCheck, 
  ShieldCheck, Briefcase, Award, Heart, Handshake, 
  Building, Calculator, Compass, ShoppingBag, GraduationCap, 
  Stethoscope, Bed, Home, Building2, Landmark, ChevronRight, X
} from 'lucide-react';
import { BUSINESS_UNITS, CORE_VALUES, INDUSTRIES_SERVED } from '../data';
import { ServiceItem } from '../types';

// Safe map for Lucide icon string lookup
const iconMap: { [key: string]: React.ComponentType<any> } = {
  Zap, Sun, Network, Eye, Cpu, Wind, Wrench, ClipboardCheck,
  ShieldCheck, Briefcase, Award, Heart, Handshake,
  Building, Calculator, Compass, ShoppingBag, GraduationCap,
  Stethoscope, Bed, Home, Building2, Landmark
};

export default function FeatureGrid() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const renderIcon = (iconName: string, className: string = "w-6 h-6") => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className={className} /> : <Zap className={className} />;
  };

  return (
    <section className="bg-slate-50 py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Business Units Section */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-xs font-bold tracking-widest text-[#0E3572] uppercase">
              Core Capabilities
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Multidisciplinary Business Units
            </p>
            <p className="text-gray-600 text-lg">
              H-Engineers Enterprise maintains in-house specialists to deliver precise, high-performance infrastructure across several key modern disciplines.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BUSINESS_UNITS.map((unit) => (
              <div 
                key={unit.id}
                id={`service-card-${unit.id}`}
                onClick={() => setSelectedService(unit)}
                className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-xs hover:shadow-md hover:border-blue-500/20 transition-all cursor-pointer flex flex-col justify-between hover:-translate-y-1 duration-300"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="p-3 rounded-xl bg-blue-50 text-[#0E3572] w-fit group-hover:bg-[#0E3572] group-hover:text-white transition-colors duration-300">
                    {renderIcon(unit.icon, "w-6 h-6")}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0E3572] transition-colors">
                    {unit.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-3">
                    {unit.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-50 flex items-center justify-between text-[#0E3572] font-semibold text-xs">
                  <span>View Deliverables</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for Service Deliverables */}
        {selectedService && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl border border-gray-100">
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-slate-900 hover:bg-gray-100 transition-colors"
                id="close-modal-button"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-blue-50 text-[#0E3572]">
                    {renderIcon(selectedService.icon, "w-8 h-8")}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-[#0E3572] uppercase block">
                      Business Unit
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {selectedService.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Engineering Deliverables
                  </h4>
                  <ul className="grid grid-cols-1 gap-2.5">
                    {selectedService.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                        <span className="text-sky-500 font-bold mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSelectedService(null);
                      // Scroll to contact form or trigger click
                      const contactBtn = document.getElementById('nav-contact');
                      if (contactBtn) (contactBtn as HTMLButtonElement).click();
                    }}
                    className="w-full bg-[#0E3572] hover:bg-blue-900 text-white font-bold py-3 rounded-xl text-sm transition-all shadow-md"
                  >
                    Discuss Your {selectedService.title} Need
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Core Values Section */}
        <div className="border-t border-slate-200/60 pt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4 space-y-4 text-center lg:text-left">
            <span className="text-xs font-bold tracking-widest text-sky-600 uppercase">
              Our Foundations
            </span>
            <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Six Core Values
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              These values govern our operations, our quality control checklists, and how we treat every single site survey, installation, and preventative contract.
            </p>
            <div className="bg-blue-50/60 border border-blue-100 p-4 rounded-2xl text-xs text-[#0E3572] font-semibold text-center lg:text-left">
              "We don't just complete projects—we build confidence."
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CORE_VALUES.map((val, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-gray-100 flex gap-4 items-start shadow-2xs hover:shadow-xs transition-shadow">
                <div className="p-2.5 rounded-lg bg-slate-50 text-[#0E3572]">
                  {renderIcon(val.icon, "w-5 h-5")}
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                    {val.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industries Served Section */}
        <div className="border-t border-slate-200/60 pt-20 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold tracking-widest text-[#0E3572] uppercase">
              Operational Scope
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Industries We Serve
            </h3>
            <p className="text-gray-500 text-sm">
              We cater to diverse clients across corporate, governmental, commercial, and educational domains.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {INDUSTRIES_SERVED.map((ind, idx) => (
              <div 
                key={idx} 
                className="bg-white px-4 py-3 rounded-xl border border-slate-200/60 flex items-center gap-2.5 hover:border-[#0E3572] hover:text-[#0E3572] transition-colors shadow-2xs text-gray-700 text-xs sm:text-sm font-semibold cursor-default"
              >
                <span className="text-[#0E3572]">
                  {renderIcon(ind.icon, "w-4 h-4")}
                </span>
                <span>{ind.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
