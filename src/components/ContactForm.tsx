import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock, Building2 } from 'lucide-react';
import { OFFICE_CONTACT_INFO, BUSINESS_UNITS } from '../data';

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  serviceCategory: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  serviceCategory?: string;
  message?: string;
  consent?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    serviceCategory: '',
    message: '',
    consent: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    
    if (!formData.fullName.trim()) {
      tempErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 3) {
      tempErrors.fullName = "Name must be at least 3 characters";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      tempErrors.email = "Email address is required";
    } else if (!emailPattern.test(formData.email)) {
      tempErrors.email = "Invalid email formatting";
    }

    if (!formData.phone) {
      tempErrors.phone = "Phone number is required";
    } else if (formData.phone.length < 8) {
      tempErrors.phone = "Provide a valid contact phone number";
    }

    if (!formData.serviceCategory) {
      tempErrors.serviceCategory = "Please select a business unit of interest";
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Please describe your engineering or service scope";
    } else if (formData.message.trim().length < 15) {
      tempErrors.message = "Project description should be at least 15 characters";
    }

    if (!formData.consent) {
      tempErrors.consent = "You must consent to scheduling a site survey";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Real-time clearance of specific field error
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate backend BOEQ analysis / server submittal
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        // Reset state
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          serviceCategory: '',
          message: '',
          consent: false
        });
      }, 1800);
    }
  };

  return (
    <section className="bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8" id="contact-form-section">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left panel: Company credentials and interactive contact details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest text-[#0E3572] uppercase">
                Page 3 • Contact & Engagement
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Let's Build Confidence Together
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Contact H-Engineers Enterprise for procurement, installation, audits, or preventative maintenance schedules. Our certified engineers are ready to compile your BOEQ and schedule a site survey.
              </p>
            </div>

            {/* Quick Credentials Info cards */}
            <div className="space-y-4">
              
              <div className="flex gap-4 items-start p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="p-3 bg-blue-100 text-[#0E3572] rounded-xl shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Calling Hotlines</p>
                  <p className="text-sm sm:text-base font-extrabold text-slate-900">{OFFICE_CONTACT_INFO.phone}</p>
                  <p className="text-xs text-gray-500">Available Mon - Sat (8:00 AM - 6:00 PM WAT)</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="p-3 bg-blue-100 text-[#0E3572] rounded-xl shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">E-mail Correspondence</p>
                  <a href={`mailto:${OFFICE_CONTACT_INFO.email}`} className="text-sm sm:text-base font-extrabold text-[#0E3572] hover:underline block truncate max-w-[240px] sm:max-w-none">
                    {OFFICE_CONTACT_INFO.email}
                  </a>
                  <p className="text-xs text-gray-500">Expect replies under 24 hours.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="p-3 bg-blue-100 text-[#0E3572] rounded-xl shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Strategic Abuja Office</p>
                  <p className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">
                    {OFFICE_CONTACT_INFO.officeAddress}
                  </p>
                  <p className="text-xs text-gray-500">Noble Plaza, Garki Area 10, Federal Capital Territory</p>
                </div>
              </div>

            </div>

            {/* Simulated Interactive Map Pin component for local Abuja Area */}
            <div className="bg-slate-950 rounded-3xl p-6 text-white border border-slate-800 relative overflow-hidden shadow-lg h-56 flex flex-col justify-between">
              {/* grid overlays */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-20"></div>
              
              <div className="relative z-10 flex justify-between items-center">
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-sky-400" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-sky-400">Map Localization</span>
                </div>
                <span className="text-[9px] font-mono text-slate-500">COORD: {OFFICE_CONTACT_INFO.mapCoordinates}</span>
              </div>

              {/* Graphic map simulation */}
              <div className="relative z-10 my-4 flex items-center justify-center">
                <div className="relative w-full h-16 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-center overflow-hidden">
                  <div className="absolute w-2.5 h-2.5 bg-sky-500 rounded-full animate-ping"></div>
                  <div className="absolute w-2 h-2 bg-sky-400 rounded-full"></div>
                  <span className="text-[11px] text-slate-300 font-bold ml-4">H-Engineers @ Garki Area 10</span>
                </div>
              </div>

              <div className="relative z-10 text-[10px] text-slate-400 flex justify-between items-center">
                <span>Awka Street, Abuja, Nigeria</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> Visitor Parking Available
                </span>
              </div>
            </div>

          </div>

          {/* Right panel: Validated Form */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-xs relative">
            
            {submitSuccess ? (
              <div className="py-12 px-4 text-center space-y-6 animate-in fade-in duration-300 flex flex-col items-center">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shadow-md">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-slate-900">Project Scope Logged!</h3>
                  <p className="text-gray-600 text-sm sm:text-base max-w-md mx-auto">
                    Thank you for contacting H-Engineers Enterprise. Your technical requirements have been parsed successfully.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200/60 max-w-md text-xs sm:text-sm text-slate-700 leading-relaxed text-left space-y-2.5 shadow-2xs">
                  <p className="font-bold text-[#0E3572] uppercase tracking-wider text-center border-b border-slate-100 pb-2">What Happens Next?</p>
                  <p>• Our Founder & Managing Director, <span className="font-bold text-slate-950">Engr. Halilu Adam</span>, or a certified site surveyor will review your message.</p>
                  <p>• A representative will dial you at your provided phone line within <span className="font-bold text-slate-950">4 business hours</span> to schedule a physical site inspection.</p>
                </div>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="bg-[#0E3572] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-blue-900 transition-all mt-4 cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
                
                <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200/60 pb-3">
                  Compile Your Engineering Request
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="fullName" className="text-xs font-bold text-slate-700 uppercase">
                      Client Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl border bg-white focus:outline-none text-sm text-slate-800 ${
                        errors.fullName ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-slate-200 focus:border-[#0E3572] focus:ring-1 focus:ring-[#0E3572]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-xs font-semibold flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-bold text-slate-700 uppercase">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +234 808 115 8382"
                      className={`w-full px-4 py-3 rounded-xl border bg-white focus:outline-none text-sm text-slate-800 ${
                        errors.phone ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-[#0E3572]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs font-semibold flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-slate-700 uppercase">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. client@company.com"
                    className={`w-full px-4 py-3 rounded-xl border bg-white focus:outline-none text-sm text-slate-800 ${
                      errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-[#0E3572]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs font-semibold flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Service Category */}
                <div className="space-y-1.5">
                  <label htmlFor="serviceCategory" className="text-xs font-bold text-slate-700 uppercase">
                    Engineering Business Unit of Interest *
                  </label>
                  <select
                    id="serviceCategory"
                    name="serviceCategory"
                    value={formData.serviceCategory}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-white focus:outline-none text-sm text-slate-800 ${
                      errors.serviceCategory ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-[#0E3572]'
                    }`}
                  >
                    <option value="">-- Choose Business Unit --</option>
                    {BUSINESS_UNITS.map((unit) => (
                      <option key={unit.id} value={unit.title}>{unit.title}</option>
                    ))}
                    <option value="General Consultation">General Engineering Consultation</option>
                  </select>
                  {errors.serviceCategory && (
                    <p className="text-red-500 text-xs font-semibold flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.serviceCategory}
                    </p>
                  )}
                </div>

                {/* Message Scope */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-bold text-slate-700 uppercase">
                    Project Scope / Infrastructure Requirements *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your load sizing, camera channel requirements, server layouts, or site location..."
                    className={`w-full px-4 py-3 rounded-xl border bg-white focus:outline-none text-sm text-slate-800 resize-none ${
                      errors.message ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-[#0E3572]'
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-xs font-semibold flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Consent Checkbox */}
                <div className="space-y-1.5">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-1 accent-[#0E3572]"
                      id="consent-checkbox"
                    />
                    <span className="text-xs text-slate-600 select-none">
                      I consent to allowing H-Engineers technicians to perform structured load calculations, design a custom single-line diagram, and contact me about scheduling a physical site survey. *
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="text-red-500 text-xs font-semibold flex items-center gap-1 mt-0.5">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.consent}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0E3572] hover:bg-blue-900 disabled:bg-blue-300 text-white font-bold py-4 rounded-xl text-base transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  id="submit-contact-button"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Analyzing Project Scope...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Request for Site Survey</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
