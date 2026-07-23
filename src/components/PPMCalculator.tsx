import React, { useState } from 'react';
import { ShieldCheck, Calendar, Activity, AlertCircle, Sparkles, Wrench } from 'lucide-react';

type SystemType = 'solar' | 'networks' | 'security' | 'electrical' | 'hvac';

export default function PPMCalculator() {
  const [systemType, setSystemType] = useState<SystemType>('solar');
  const [frequency, setFrequency] = useState<'bi-weekly' | 'monthly' | 'quarterly'>('monthly');
  const [complexity, setComplexity] = useState<'standard' | 'complex' | 'enterprise'>('complex');

  const systemSpecs: Record<SystemType, {
    name: string;
    inspections: string[];
    riskPoints: string[];
  }> = {
    solar: {
      name: "Renewable Solar & Battery Systems",
      inspections: [
        "Monocrystalline panel physical debris inspection & dirt wash-downs",
        "Thermal imaging of electrical circuit junctions to isolate hot-spots",
        "Lithium Battery Management System (BMS) cell balancing & log checkups",
        "Inverter parameter calibration & clean out of internal cooling fans"
      ],
      riskPoints: ["Hot-spot corrosion", "Battery cell unbalancing", "Inverter overheating"]
    },
    networks: {
      name: "ICT Cabinets & Structured Cabling",
      inspections: [
        "Network switch port speed tests & fiber attenuation checks",
        "Server rack vertical cable organization & dust vacuuming",
        "Backup UPS battery capacity load testing & backup drills",
        "Router firmware diagnostic checks & IP load optimization reviews"
      ],
      riskPoints: ["Packet losses", "UPS battery degradation", "Thermal trap blockages"]
    },
    security: {
      name: "Security VMS & IP CCTV Systems",
      inspections: [
        "Dome & Bullet camera lens polishing & physical angle recalibration",
        "CCTV 4K NVR Hard-drive health checks & video archiving confirmation",
        "Biometric access control RFID readers & magnetic lock tests",
        "Motion-sensing tripwires & trigger alarm sync checks"
      ],
      riskPoints: ["Video frame losses", "Magnetic reader faults", "Lens moisture build-up"]
    },
    electrical: {
      name: "Electrical Panels & DB Boards",
      inspections: [
        "Main DB board circuit-breaker tightness tests (prevent thermal melting)",
        "Earthing system soil resistivity measurements & electrode checks",
        "Surge protector module checks & primary lightening rod inspection",
        "Load balancing diagnostic sweeps across multi-phase installations"
      ],
      riskPoints: ["Circuit panel thermal melting", "Earthing soil degradation", "Phase overloading"]
    },
    hvac: {
      name: "HVAC & VRF Centralized Cooling",
      inspections: [
        "VRF compressor gas pressure & leakage inspections",
        "Internal ceiling cassette filter extraction & deep wash-downs",
        "Ventilation ducts thermal leakage inspections",
        "Drain tray unclogging & condensation pipe checks"
      ],
      riskPoints: ["Compressor gas leaks", "Condenser coil dust traps", "Algae tray blockages"]
    }
  };

  const getRecommendedSchedule = () => {
    switch(frequency) {
      case 'bi-weekly':
        return { visitsPerYear: 24, text: "Bi-Weekly High-frequency sweeps" };
      case 'monthly':
        return { visitsPerYear: 12, text: "Monthly balance protocol" };
      case 'quarterly':
        return { visitsPerYear: 4, text: "Quarterly seasonal inspection" };
    }
  };

  const scheduleInfo = getRecommendedSchedule();
  const activeSystem = systemSpecs[systemType];

  return (
    <section className="bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold tracking-widest text-[#0E3572] uppercase flex items-center justify-center gap-1.5">
            <Wrench className="w-4 h-4 text-sky-600 animate-spin" style={{ animationDuration: '3s' }} />
            Planned Preventive Maintenance (PPM)
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Design Your Tailored PPM Agreement
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            H-Engineers provides complimentary 6-month PPM warranties on new installations. Have existing third-party infrastructure? Estimate your custom inspection roadmap below.
          </p>
        </div>

        {/* Dynamic Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Inputs Section */}
          <div className="lg:col-span-6 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-100 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* System Selector */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-800">1. Select Your Infrastructure System:</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {(Object.keys(systemSpecs) as SystemType[]).map((type) => (
                    <button
                      key={type}
                      onClick={() => setSystemType(type)}
                      className={`p-3 rounded-xl border text-xs font-bold transition-all ${
                        systemType === type
                          ? 'bg-[#0E3572] border-[#0E3572] text-white shadow-md'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100 hover:border-slate-300'
                      }`}
                    >
                      {systemSpecs[type].name.split(" & ")[0].split(" Systems")[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Frequency Selector */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-800">2. Desired Inspection Frequency:</label>
                <div className="grid grid-cols-3 gap-2.5">
                  {(['bi-weekly', 'monthly', 'quarterly'] as const).map((freq) => (
                    <button
                      key={freq}
                      onClick={() => setFrequency(freq)}
                      className={`p-3 rounded-xl border text-xs font-bold capitalize transition-all ${
                        frequency === freq
                          ? 'bg-[#0E3572] border-[#0E3572] text-white shadow-md'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100 hover:border-slate-300'
                      }`}
                    >
                      {freq.replace('-', ' ')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Complexity Level */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-800">3. System Load Scale / Complexity:</label>
                <div className="grid grid-cols-3 gap-2.5">
                  {(['standard', 'complex', 'enterprise'] as const).map((comp) => (
                    <button
                      key={comp}
                      onClick={() => setComplexity(comp)}
                      className={`p-3 rounded-xl border text-xs font-bold capitalize transition-all ${
                        complexity === comp
                          ? 'bg-[#0E3572] border-[#0E3572] text-white shadow-md'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100 hover:border-slate-300'
                      }`}
                    >
                      {comp}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Quote recommendation alert */}
            <div className="mt-8 bg-blue-50/60 p-4 rounded-2xl border border-blue-100 flex gap-3 items-start text-xs text-[#0E3572] leading-relaxed">
              <AlertCircle className="w-5 h-5 text-[#0E3572] shrink-0" />
              <div>
                <span className="font-bold block">PPM Slogan:</span>
                "A scheduled thermal camera sweep saves 40% on emergency repair visits and extends commercial equipment life expectancy by up to 5 years."
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div className="lg:col-span-6 bg-slate-900 text-white p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between shadow-xl relative overflow-hidden">
            {/* Background design elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-sky-500/10 rounded-full filter blur-xl"></div>
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-sky-400" />
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Recommended PPM Strategy</span>
                </div>
                <span className="text-[10px] bg-slate-800 px-2 py-1 rounded-md text-sky-400 uppercase font-mono font-bold">Active Scope</span>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-slate-400 uppercase font-bold tracking-wider">Estimated Visits</p>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white flex items-baseline gap-2">
                  {scheduleInfo.visitsPerYear}
                  <span className="text-lg text-sky-300 font-semibold">Inspections / Year</span>
                </h3>
                <p className="text-xs text-slate-400 font-medium">
                  Configured Level: <span className="text-white capitalize font-bold">{complexity}</span> load on {activeSystem.name}
                </p>
              </div>

              {/* Maintenance checklist section */}
              <div className="space-y-3.5 pt-4 border-t border-slate-800">
                <h4 className="text-xs font-bold text-sky-300 uppercase tracking-widest flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  H-Engineers Checklist Includes:
                </h4>
                <ul className="space-y-2 max-h-[190px] overflow-y-auto pr-2 custom-scrollbar">
                  {activeSystem.inspections.map((check, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start text-xs text-slate-300">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{check}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prevented Risks */}
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/80 space-y-1.5">
                <p className="text-[10px] font-bold text-red-400 uppercase tracking-wider flex items-center gap-1">
                  <Activity className="w-3.5 h-3.5" /> Core Risks Prevented:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {activeSystem.riskPoints.map((risk, idx) => (
                    <span key={idx} className="text-[9px] font-bold bg-red-950 text-red-300 px-2 py-0.5 rounded-md border border-red-900/30">
                      {risk}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            <div className="pt-6 mt-6 border-t border-slate-800 flex flex-col sm:flex-row gap-3 items-center justify-between">
              <span className="text-[10px] text-slate-400 text-center sm:text-left">
                *Warranty includes full parts certification and priority response times.
              </span>
              <button
                onClick={() => {
                  const contactBtn = document.getElementById('nav-contact');
                  if (contactBtn) {
                    (contactBtn as HTMLButtonElement).click();
                    // Set timeout to populate message if needed
                    setTimeout(() => {
                      const msgInput = document.getElementById('contact-message') as HTMLTextAreaElement;
                      if (msgInput) msgInput.value = `Hello H-Engineers, I am interested in establishing a ${frequency} PPM Maintenance agreement for my ${complexity}-level ${systemSpecs[systemType].name} installation. Please provide a formal BOEQ.`;
                    }, 100);
                  }
                }}
                className="w-full sm:w-auto bg-[#328CC1] hover:bg-sky-600 text-slate-950 font-extrabold px-5 py-2.5 rounded-xl text-xs tracking-wider uppercase transition-all shadow-md cursor-pointer"
              >
                Request Custom BOEQ
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
