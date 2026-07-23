import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import ProcessStepper from './components/ProcessStepper';
import PPMCalculator from './components/PPMCalculator';
import PortfolioAndResources from './components/PortfolioAndResources';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { ArrowRight, Quote, Award, Shield, Cpu, ChevronRight } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');

  // Renders the main view based on the active tab state
  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-0">
            {/* Hero Section with custom CTA handoffs */}
            <Hero 
              onExploreClick={() => {
                setActiveTab('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
              onContactClick={() => {
                setActiveTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
            />

            {/* Elite MD Message Segment - Directly transcribed from the PDF */}
            <section className="bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Photo / Slogan Area */}
                  <div className="lg:col-span-5 relative">
                    <div className="relative rounded-3xl bg-slate-900 overflow-hidden shadow-xl aspect-4/3 flex items-center justify-center p-8 border border-slate-800 text-center">
                      {/* Technical drawing overlay */}
                      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1.5px,transparent_1.5px)] bg-[size:1rem_1rem] opacity-30"></div>
                      <div className="relative z-10 space-y-4">
                        <Quote className="w-12 h-12 text-sky-400 mx-auto opacity-80" />
                        <h3 className="text-xl font-bold text-white tracking-tight">
                          "Infrastructure is the backbone of productivity, safety, and sustainable growth."
                        </h3>
                        <p className="text-xs text-sky-300 font-bold uppercase tracking-wider">
                          Halilu Adam • Founder & Managing Director
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Message body from PDF page 1 */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="space-y-2">
                      <span className="text-xs font-bold tracking-widest text-[#0E3572] uppercase block">
                        Managing Director's Message
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        Welcome to H-Engineers Enterprise
                      </h2>
                    </div>

                    <div className="text-gray-600 text-sm sm:text-base space-y-4 leading-relaxed">
                      <p>
                        At H-Engineers Enterprise, we believe infrastructure is more than equipment—it is the backbone of productivity, safety, and sustainable growth.
                      </p>
                      <p>
                        Our mission is to provide engineering solutions that continue to deliver value long after project completion. Whether we are designing electrical systems, deploying ICT networks, installing renewable energy solutions, implementing smart automation, or maintaining critical infrastructure, our commitment remains the same: professionalism, quality, and reliability.
                      </p>
                      <p>
                        Our aspiration is to become the engineering partner that consultants, architects, contractors, developers, facility managers, and businesses confidently recommend whenever dependable engineering solutions are required.
                      </p>
                    </div>

                    {/* Author Signature */}
                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div>
                        <p className="text-base font-extrabold text-[#0E3572]">Halilu Adam</p>
                        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Founder & Managing Director</p>
                      </div>
                      
                      {/* Certified check badge */}
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-100">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        COREN Registered Firm
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </section>

            {/* Quick Vision / Mission Statement Box */}
            <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Vision */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-150 shadow-xs space-y-4">
                  <div className="p-3 bg-blue-50 text-[#0E3572] rounded-2xl w-fit">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900">Our Vision</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    To become Nigeria's most trusted engineering and infrastructure solutions company, recognized for professionalism, technical excellence, innovation, and long-term partnerships.
                  </p>
                </div>

                {/* Mission */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-150 shadow-xs space-y-4">
                  <div className="p-3 bg-blue-50 text-[#0E3572] rounded-2xl w-fit">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900">Our Mission</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    To deliver high-quality engineering solutions through professional consultation, efficient procurement, precise installation, proactive maintenance, and continuous technical support while building lasting relationships founded on trust, integrity, safety, and excellence.
                  </p>
                </div>

              </div>
            </section>

            {/* Showcase the core features/business units */}
            <FeatureGrid />

            {/* Showcase the interactive engineering stepper */}
            <ProcessStepper />

            {/* Showcase a summary layout for Page 2 & 3 callout */}
            <section className="bg-radial from-slate-900 to-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-25"></div>
              <div className="max-w-3xl mx-auto space-y-6 relative z-10">
                <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest block">Explore Technical Hub</span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Need a Customized BOEQ for Your Next Project?
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Navigate to our Portfolio page to view our completed works, or utilize our contact page to request a physical site survey instantly.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                  <button 
                    onClick={() => {
                      setActiveTab('resources');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    View Project Portfolio
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => {
                      setActiveTab('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="bg-transparent hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-xl text-sm border border-slate-700 hover:border-slate-500 transition-all cursor-pointer"
                  >
                    Contact Certified Engineers
                  </button>
                </div>
              </div>
            </section>
          </div>
        );

      case 'services':
        return (
          <div className="space-y-0">
            {/* Services Page Content */}
            <div className="bg-slate-950 text-white py-12 px-4 text-center border-b border-slate-900">
              <div className="max-w-3xl mx-auto space-y-3">
                <h1 className="text-3xl sm:text-4xl font-extrabold">Professional Engineering Solutions</h1>
                <p className="text-slate-400 text-sm sm:text-base">
                  Delivering end-to-end electrical, clean solar energy, ICT network, and HVAC designs in accordance with COREN, IEEE, and local safety regulatory standards.
                </p>
              </div>
            </div>
            <FeatureGrid />
            <PPMCalculator />
          </div>
        );

      case 'process':
        return (
          <div className="space-y-0">
            {/* Process Page Content */}
            <div className="bg-slate-950 text-white py-12 px-4 text-center border-b border-slate-900">
              <div className="max-w-3xl mx-auto space-y-3">
                <h1 className="text-3xl sm:text-4xl font-extrabold">Our Quality Control Blueprint</h1>
                <p className="text-slate-400 text-sm sm:text-base">
                  Explore how we guarantee zero-fault commissioning, rigorous site surveys, and scheduled thermography inspections.
                </p>
              </div>
            </div>
            <ProcessStepper />
            
            {/* Slogan details block */}
            <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 text-center border-t border-gray-150">
              <div className="max-w-2xl mx-auto space-y-4">
                <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight">Our Quality Guarantee</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Eligible new installations include six (6) months of comprehensive installation warranty and complimentary Planned Preventive Maintenance (PPM) sweeps as agreed in the project scope.
                </p>
                <button
                  onClick={() => setActiveTab('contact')}
                  className="bg-[#0E3572] hover:bg-blue-900 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all"
                >
                  Schedule Initial Consultation
                </button>
              </div>
            </section>
          </div>
        );

      case 'resources':
        return <PortfolioAndResources />;

      case 'contact':
        return <ContactForm />;

      default:
        return <Hero onExploreClick={() => setActiveTab('services')} onContactClick={() => setActiveTab('contact')} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between text-slate-800 font-sans" id="app-root-container">
      {/* Universal Header with state router props */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Primary Dynamic Main Content stage */}
      <main className="flex-grow">
        {renderTabContent()}
      </main>

      {/* Corporate Slogan Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
