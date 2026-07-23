import React, { useState } from 'react';
import { 
  MessageSquare, Search, FileText, Truck, Wrench, Activity, Key, Calendar,
  ArrowRight, ShieldCheck, CheckCircle2
} from 'lucide-react';
import { ENGINEERING_PROCESS } from '../data';

const iconMap: { [key: string]: React.ComponentType<any> } = {
  MessageSquare, Search, FileText, Truck, Wrench, Activity, Key, Calendar
};

export default function ProcessStepper() {
  const [activeStep, setActiveStep] = useState(1);

  const renderIcon = (iconName: string, className: string = "w-5 h-5") => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className={className} /> : <Wrench className={className} />;
  };

  const currentStepData = ENGINEERING_PROCESS.find(step => step.number === activeStep) || ENGINEERING_PROCESS[0];

  return (
    <section className="bg-slate-950 text-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Visual blueprint overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-20"></div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
            Rigorous Delivery Framework
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our 8-Step Engineering Process
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We follow a standardized, certified engineering blueprint from first consultation to long-term preventive diagnostics.
          </p>
        </div>

        {/* Stepper Container (Desktop Row, Mobile Scroll Grid) */}
        <div className="hidden lg:block">
          <div className="relative flex justify-between items-center bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
            {/* Horizontal Line connecting steps */}
            <div className="absolute top-1/2 left-12 right-12 h-1 bg-slate-800 -translate-y-1/2 z-0"></div>
            {/* Animated progress bar fill */}
            <div 
              className="absolute top-1/2 left-12 h-1 bg-[#328CC1] -translate-y-1/2 z-0 transition-all duration-500 ease-out"
              style={{ width: `${((activeStep - 1) / (ENGINEERING_PROCESS.length - 1)) * 90}%` }}
            ></div>

            {ENGINEERING_PROCESS.map((step) => {
              const isActive = step.number === activeStep;
              const isCompleted = step.number < activeStep;
              return (
                <button
                  key={step.number}
                  id={`process-step-trigger-${step.number}`}
                  onClick={() => setActiveStep(step.number)}
                  className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none"
                >
                  {/* Step Bubble */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all duration-300 ${
                    isActive 
                      ? 'bg-[#0E3572] border-[#328CC1] text-white scale-110 shadow-lg shadow-blue-500/30' 
                      : isCompleted
                        ? 'bg-slate-900 border-emerald-500 text-emerald-400'
                        : 'bg-slate-950 border-slate-800 text-slate-500 group-hover:border-slate-700 group-hover:text-slate-300'
                  }`}>
                    {isCompleted ? <CheckCircle2 className="w-5 h-5 text-emerald-400" /> : step.number}
                  </div>
                  {/* Step Label */}
                  <span className={`text-xs font-semibold mt-3 transition-colors ${
                    isActive ? 'text-sky-300' : 'text-slate-400 group-hover:text-slate-200'
                  }`}>
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Active Card Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
          
          {/* Left panel: Selected step deep-dive */}
          <div className="lg:col-span-7 bg-slate-900/80 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold px-3 py-1 bg-slate-800 text-sky-400 rounded-full">
                  PHASE 0{currentStepData.number}
                </span>
                <span className="text-xs text-slate-500">H-Engineers Quality Standard</span>
              </div>

              <div className="flex gap-4 sm:gap-6 items-start">
                <div className="p-4 rounded-2xl bg-slate-800/80 text-sky-400 border border-slate-700">
                  {renderIcon(currentStepData.icon, "w-8 h-8")}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {currentStepData.title}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {currentStepData.description}
                  </p>
                </div>
              </div>

              {/* Extra professional details */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Deliverables & QC Checks:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center gap-2 bg-slate-950 p-2 rounded-lg border border-slate-800/40">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Certified Sign-off Sheet</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-950 p-2 rounded-lg border border-slate-800/40">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Rigid safety compliance check</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-8 mt-6 border-t border-slate-800">
              <span className="text-xs text-slate-400">
                Tap step circles above to explore other phases.
              </span>
              <button
                onClick={() => {
                  if (activeStep < ENGINEERING_PROCESS.length) {
                    setActiveStep(activeStep + 1);
                  } else {
                    setActiveStep(1);
                  }
                }}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors"
              >
                <span>{activeStep === ENGINEERING_PROCESS.length ? "Restart Flow" : "Next Phase"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right panel: Static vertical checklist representing Mobile Timeline */}
          <div className="lg:col-span-5 bg-slate-900/40 p-6 sm:p-8 rounded-3xl border border-slate-800/50 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
                Flow Checklist
              </h4>
              <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {ENGINEERING_PROCESS.map((step) => (
                  <button
                    key={step.number}
                    onClick={() => setActiveStep(step.number)}
                    className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between ${
                      step.number === activeStep
                        ? 'bg-[#0E3572]/40 border-[#328CC1] text-white shadow-md'
                        : 'bg-transparent border-slate-800/60 text-slate-400 hover:bg-slate-900/60 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center border ${
                        step.number === activeStep 
                          ? 'bg-[#328CC1] border-sky-400 text-slate-950' 
                          : 'border-slate-700 bg-slate-950'
                      }`}>
                        {step.number}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold truncate max-w-[200px] sm:max-w-none">
                        {step.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500">0{step.number}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs text-slate-400 space-y-2">
              <span className="font-bold text-slate-200 block">Our Promise:</span>
              "We don't just complete projects—we build confidence. Our promise is to be the engineering partner you can rely on—today, tomorrow, and for years to come."
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
