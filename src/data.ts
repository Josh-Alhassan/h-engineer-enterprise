import { ServiceItem, ProjectItem, ProcessStep, ArticleItem, CoreValue, IndustryServed } from './types';

export const HERO_SAVES = {
  headline: "Building Trust Through Engineering Excellence",
  subheadline: "H-Engineers Enterprise delivers premier multidisciplinary engineering and infrastructure solutions across West Africa. From clean solar energy to smart security networks, we power and protect what matters.",
  ctaPrimary: "Explore Services",
  ctaSecondary: "Get Free Consultation"
};

export const CORE_VALUES: CoreValue[] = [
  {
    title: "Professionalism",
    description: "Executing projects with highly disciplined methods, technical precision, and certified engineering standards.",
    icon: "ShieldCheck"
  },
  {
    title: "Integrity",
    description: "Honest advice, fair pricing, and transparency at every step from initial site survey to final commissioning.",
    icon: "Briefcase"
  },
  {
    title: "Quality",
    description: "We use premium materials and industry-best equipment to ensure systems deliver value long after completion.",
    icon: "Award"
  },
  {
    title: "Innovation",
    description: "Adopting smart building technologies, automated control frameworks, and high-efficiency solar models.",
    icon: "Cpu"
  },
  {
    title: "Safety",
    description: "Protecting lives and infrastructure with rigid safety protocols, fault-tolerant earthing, and fire containment.",
    icon: "Heart"
  },
  {
    title: "Customer Commitment",
    description: "Dedicated to building lasting relationships founded on continuous technical support and preventative maintenance.",
    icon: "Handshake"
  }
];

export const BUSINESS_UNITS: ServiceItem[] = [
  {
    id: "electrical",
    title: "Electrical Engineering",
    description: "Comprehensive power distribution, standard industrial panel wiring, fault diagnostics, earthing, and lightening protection.",
    icon: "Zap",
    features: [
      "Low-Voltage & Medium-Voltage systems",
      "Industrial distribution panels & DB boards",
      "Domestic & commercial conduit wiring",
      "Earthing and surge lightning protection systems"
    ]
  },
  {
    id: "solar",
    title: "Renewable Energy Solutions",
    description: "High-yield hybrid solar design, premium battery storage bank installations, solar water pumping, and inverter configurations.",
    icon: "Sun",
    features: [
      "Off-grid and Hybrid solar power systems",
      "Lithium battery integration & BMS configuration",
      "Solar pumping for rural and agricultural use",
      "Energy audits and load optimization"
    ]
  },
  {
    id: "networks",
    title: "ICT & Network Infrastructure",
    description: "High-speed structured cabling, server room design, fiber-optic splicing, enterprise Wi-Fi coverage, and routing architectures.",
    icon: "Network",
    features: [
      "Cat6/Cat6A structured Ethernet cabling",
      "Fiber-optic termination, splicing, and OTDR testing",
      "Server rack cabinets and cable organization",
      "Ubiquiti & Cisco network design & configuration"
    ]
  },
  {
    id: "security",
    title: "Security & CCTV Systems",
    description: "Enterprise IP security cameras, multi-channel Video Management Systems, biometric access controls, and electronic perimeter fences.",
    icon: "Eye",
    features: [
      "Ultra-HD 4K IP CCTV network design",
      "Remote view configuration for smartphones/desktops",
      "RFID, Face ID, and fingerprint biometric access control",
      "Intrusion alarm triggers and electric security fences"
    ]
  },
  {
    id: "smart-building",
    title: "Smart Building Solutions",
    description: "Automation of lighting, climate, security sensors, and integrated building management systems (BMS) for energy efficiency.",
    icon: "Cpu",
    features: [
      "Smart lighting schedules & motion-sensing triggers",
      "Automated load shedding and smart breaker arrays",
      "Integrated audio-visual conferencing links",
      "Remote HVAC controls and energy analytics dashboards"
    ]
  },
  {
    id: "hvac",
    title: "HVAC & Climate Systems",
    description: "Commercial VRF air conditioning design, ventilation ductwork, chiller systems, and routine precision mechanical upkeep.",
    icon: "Wind",
    features: [
      "VRF (Variable Refrigerant Flow) centralized cooling",
      "Precision server room air conditioning (CRAC)",
      "Ventilation duct fabrication and installation",
      "Compressor diagnostics and scheduled filter overhauls"
    ]
  },
  {
    id: "maintenance",
    title: "Facility Maintenance & PPM",
    description: "Structured Planned Preventive Maintenance (PPM) to avoid catastrophic failures, keep equipment calibrated, and save costs.",
    icon: "Wrench",
    features: [
      "Complimentary 6-month post-install warranty support",
      "Bi-weekly or monthly custom preventative checkups",
      "Emergency troubleshooting and on-demand dispatch",
      "Thermal camera electrical inspections and battery health assessments"
    ]
  },
  {
    id: "consultancy",
    title: "Procurement & Engineering Consultancy",
    description: "Third-party site inspection, bill of engineering quantities (BOEQ) compilation, and procurement of authentic global brands.",
    icon: "ClipboardCheck",
    features: [
      "Precise project bill of engineering quantities (BOEQ)",
      "Strict quality assurance and brand authentication",
      "Independent technical audits and structural feedback",
      "Regulatory compliance & safety checks"
    ]
  }
];

export const INDUSTRIES_SERVED: IndustryServed[] = [
  { name: "Construction Companies", icon: "Building" },
  { name: "Engineering Consultants", icon: "Calculator" },
  { name: "Architectural Firms", icon: "Compass" },
  { name: "SMEs & Retailers", icon: "ShoppingBag" },
  { name: "Educational Institutions", icon: "GraduationCap" },
  { name: "Healthcare Facilities", icon: "Stethoscope" },
  { name: "Hotels & Hospitality", icon: "Bed" },
  { name: "Residential Estates", icon: "Home" },
  { name: "Commercial Office Blocks", icon: "Building2" },
  { name: "Government Agencies", icon: "Landmark" }
];

export const ENGINEERING_PROCESS: ProcessStep[] = [
  {
    number: 1,
    title: "Consultation",
    description: "Initial physical or virtual meeting to discuss power loads, security specs, connectivity requirements, or facility scopes.",
    icon: "MessageSquare"
  },
  {
    number: 2,
    title: "Site Survey",
    description: "Physical inspection of the building or site layout. We test radio frequencies, measure light levels, analyze roofs, and verify power lines.",
    icon: "Search"
  },
  {
    number: 3,
    title: "Design & Proposal",
    description: "Our engineers prepare comprehensive structural CAD layouts, single-line diagrams, and details of materials paired with pricing.",
    icon: "FileText"
  },
  {
    number: 4,
    title: "Procurement",
    description: "Sourcing certified, authentic components directly from international manufacturers, ensuring compliance with our quality values.",
    icon: "Truck"
  },
  {
    number: 5,
    title: "Installation",
    description: "Experienced technicians mount solar racks, run neat fire-retardant conduits, organize racks, and terminate cables.",
    icon: "Wrench"
  },
  {
    number: 6,
    title: "Testing & Commissioning",
    description: "Rigorous load tests, cable speed validation, camera alignment verification, and calibration checks before final approval.",
    icon: "Activity"
  },
  {
    number: 7,
    title: "Handover",
    description: "We explain system controls, hand over technical manuals, provide access keys, and review simple daily safety checklists with you.",
    icon: "Key"
  },
  {
    number: 8,
    title: "PPM Agreements",
    description: "Activation of your complimentary 6-month warranty and scheduling of routine preventative site checks to ensure reliability.",
    icon: "Calendar"
  }
];

// Based closely on the user's uploaded real photos
export const SAMPLE_PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "65kWp Hybrid Rooftop Solar Power Plant",
    category: "solar",
    description: "High-yield monocrystalline solar panel installation on standard metallic trapezoidal roofing, coupled with heavy-duty Lithium-Iron-Phosphate battery banks and smart tracking inverters. Features modern load optimization algorithms.",
    location: "Garki, Abuja",
    imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1200", // Representative premium Unsplash photo of rooftop solar installation
    specs: ["65kWp Monocrystalline Panels", "120kWh LFP Battery Bank", "Smart Remote Monitoring Hub", "Hybrid Automatic Transfer Switch (ATS)"]
  },
  {
    id: "proj-2",
    title: "Enterprise Server Cabinet Structured Cabling",
    category: "networks",
    description: "Clean server rack installation highlighting high-speed fiber patch cables, yellow multi-core network distribution cords, Gigabit switches, and structured patch panels. Perfect horizontal and vertical layout management.",
    location: "Corporate HQ, Abuja",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200", // Representative high-quality rack/networking cable photo
    specs: ["Cat6A Shielded Twisted Pair Cabling", "OM4 Multi-Mode Fiber Trunks", "48-Port Smart Managed PoE+ Switches", "Wire-Manager Cable Organizers"]
  },
  {
    id: "proj-3",
    title: "Multi-Channel Security Control Center Integration",
    category: "security",
    description: "Advanced surveillance monitoring hub featuring multiple wall-mounted screens, synchronized 24/7 video feeds, customized PTZ cameras, remote streaming setup, and digital cloud recording with failovers.",
    location: "Commercial Complex, Abuja",
    imageUrl: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1200", // CCTV monitoring screens
    specs: ["32-Channel 4K NVR with Redundant Raid", "Remote View Configuration on iOS/Android/PC", "Fisheye 360-Degree Panoramic Feeds", "AI Motion Detection & Virtual Tripwires"]
  },
  {
    id: "proj-4",
    title: "Fiber-Optic Splicing & Distribution Box Deployment",
    category: "networks",
    description: "Delicate core-alignment splicing of high-capacity fiber ribbons into customized wall distribution patch trays. Completed with high reliability and ultra-low decibel attenuation losses.",
    location: "Residential Estate, Abuja",
    imageUrl: "https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&q=80&w=1200", // Fiber optic splicer hands or cabling
    specs: ["Core-Alignment Fusion Splicing", "Wall-Mount Splice Distribution Trays", "OTDR Fiber Attenuation Testing", "FTTH (Fiber to the Home) splitters"]
  },
  {
    id: "proj-5",
    title: "Commercial Multi-Zone VRF Air Conditioning",
    category: "hvac",
    description: "Multi-Zone VRF systems installed in a high-rise office complex. Comprises efficient external heat-exchangers, digital variable flow controllers, and sleek low-profile internal ceiling cassette diffusers.",
    location: "CBD, Abuja",
    imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200", // AC / HVAC installer or machinery
    specs: ["Centralized VRF Control Panel", "Low-noise ceiling cassette modules", "Environmentally safe R410A coolant", "Fresh Air Infiltration Ductwork"]
  }
];

export const ARTICLES_AND_EVENTS: ArticleItem[] = [
  {
    id: "art-1",
    title: "Transitioning to Clean Energy: A Guide for Nigerian Businesses",
    excerpt: "With rising grid costs and diesel supply fluctuations, hybrid solar systems offer stable power. Learn the core factors of ROI and sizing.",
    content: "Solar systems have transitioned from being a luxurious eco-friendly choice to a strict financial necessity for Nigerian businesses. On average, a standard office block in Abuja operating primarily on diesel generators can recoup their solar capital expenditure in under 24 months, while completely stabilizing their operations against sudden power grid drops and fuel price spikes. Our guide details loads auditing, battery bank selections (why Lithium-Iron-Phosphate holds the future over old lead-acid), and inverter sizing to match industrial machinery requirements.",
    category: "Guide",
    date: "July 12, 2026",
    author: "Engr. Halilu Adam",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "event-1",
    title: "Technical Seminar: Smart Automation & IoT Systems in Modern Buildings",
    excerpt: "Join H-Engineers for a live hands-on seminar demonstrating smart climate panels, biometric safety integrations, and remote diagnostics.",
    content: "We are thrilled to host our quarterly technical seminar at our main office in Abuja. This interactive session is tailored for architects, real estate developers, and commercial facility managers. We will demonstrate how integration of smart lighting, motion triggers, and digital Variable Refrigerant Flow (VRF) air conditioning into a unified dashboard reduces monthly electricity utility bills by up to 35%. Attendees will gain hands-on access to smart relay configuration boards and modern network hubs.",
    category: "Event",
    date: "August 15, 2026 (10:00 AM WAT)",
    author: "H-Engineers Enterprise",
    readTime: "Free Registry • Location: Abuja Office",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "art-2",
    title: "Structured Cabling Demystified: The Hidden Backbone of High-Speed ICT",
    excerpt: "Messy server cabinets lead to packet losses, routing issues, and slow networks. Explore how fiber trunks and correct rack organization keep data fluid.",
    content: "Many companies invest heavily in top-tier multi-gigabit fiber subscriptions only to experience sluggish database loads or dropping video calls. The culprit is almost always poorly managed local cabling. When network racks become a 'spaghetti' of unlabelled wires, it leads to thermal traps, magnetic cross-talk interference, and physical stress on Ethernet connectors. By adopting structured Cat6A shielding, certified patch panels, and OM4 fiber trunks, organizations preserve speed integrity and facilitate rapid, intuitive diagnostic checks during future updates.",
    category: "Guide",
    date: "June 28, 2026",
    author: "ICT Systems Specialist",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "event-2",
    title: "Webinar: The Critical Value of Planned Preventative Maintenance (PPM)",
    excerpt: "A deep dive into electrical safety, avoiding catastrophic equipment failures, and managing long-term structural health with structured maintenance.",
    content: "Register for this live webinar panel where our senior electrical and mechanical engineers dissect the financial impacts of reactive fixes vs preventative schedules. We will analyze real-world case studies showing how a pre-scheduled thermal imaging inspection of electrical panels can identify loose connections and localized heating before they lead to costly circuit melts or fire hazards.",
    category: "Event",
    date: "September 02, 2026 (2:00 PM WAT)",
    author: "Operations & Maintenance Team",
    readTime: "Live on Zoom • Free RSVP",
    imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "art-3",
    title: "H-Engineers Launches Complimentary 6-Month Installation Warranty",
    excerpt: "Reflecting our motto 'Building Trust', we introduce full comprehensive parts & service warranty on all engineering works.",
    content: "At H-Engineers Enterprise, we believe a commercial installation is just the start of a multi-year partnership. To demonstrate our commitment to professional quality, all newly commissioned installations starting this quarter automatically receive a full 6-month post-installation warranty. This includes bi-weekly planned system sweeps, remote diagnostic monitoring, and priority emergency response dispatches completely free of charge.",
    category: "Company",
    date: "May 18, 2026",
    author: "Halilu Adam",
    readTime: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
  }
];

export const OFFICE_CONTACT_INFO = {
  phone: "+234(0) 808 115 8382",
  phoneRaw: "08081158382",
  email: "hengineersenterprise@gmail.com",
  officeAddress: "GF04 Noble Plaza, Awka Street, Area 10 Garki, Abuja, Nigeria",
  mapCoordinates: "9.0425, 7.4819" // Abuja Garki Area 10 coordinates for simulation
};
