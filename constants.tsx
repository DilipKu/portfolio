
import { Project, Experience, SkillGroup, BlogPost } from './types';

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/dilipkrgupta/",
  github: "https://github.com/DilipKu",
  email: "maildilip45@gmail.com",
  phone: "+91-9910624074",
  location: "New Delhi, India"
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Technical Leadership",
    skills: [
      { name: "Mobile Product Management", icon: "📱" },
      { name: "Scrum Master / Agile", icon: "🌀" },
      { name: "AI/ML Telematics", icon: "🤖" },
      { name: "Connected Vehicles & EV", icon: "⚡" }
    ]
  },
  {
    category: "Core Android Development",
    skills: [
      { name: "Kotlin, Java & KMP", icon: "💻" },
      { name: "Jetpack Compose & UI", icon: "🎨" },
      { name: "Coroutines, Flow & WorkManager", icon: "⚡" },
      { name: "MVVM, MVI & Dagger Hilt", icon: "🏗️" }
    ]
  },
  {
    category: "Platform Engineering",
    skills: [
      { name: "IoT / BLE / MQTT / FOTA", icon: "🌐" },
      { name: "Clean / Modular Architecture", icon: "🏗️" },
      { name: "Git, Jenkins & CI/CD Pipelines", icon: "🚀" },
      { name: "Android Studio & Proguard", icon: "🛠️" }
    ]
  },
  {
    category: "Testing & Integrations",
    skills: [
      { name: "REST, Retrofit & APIs", icon: "🔗" },
      { name: "Unit Testing (Mockito, Turbine)", icon: "🧪" },
      { name: "UI Testing (Espresso)", icon: "📱" },
      { name: "Google Play Services & SDKs", icon: "🧩" }
    ]
  },
  {
    category: "Delivery & Operations",
    skills: [
      { name: "API Testing / Postman", icon: "🧪" },
      { name: "Data-driven Monitoring", icon: "📊" },
      { name: "Firmware & Hardware Integration", icon: "🔧" },
      { name: "Mentoring & Code Reviews", icon: "👥" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "EV Charging & Telematics Suite",
    description: "Led development of an EV charging and telematics platform delivering real-time vehicle diagnostics, remote charging controls, and fleet monitoring.",
    tech: ["Android", "iOS", "Kotlin", "MQTT", "BLE", "FOTA"],
    challenges: "Unifying firmware communication, OTA updates, and live telemetry data while keeping latency low for mobile users.",
    solutions: "Built a modular MVVM architecture with Kotlin Coroutines, robust BLE/Wi-Fi SDK integrations, and predictive alerting for vehicle health.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2072&auto=format&fit=crop",
    github: "#",
    link: "#"
  },
  {
    id: "p2",
    title: "AI Telematics Insight Engine",
    description: "Designed AI/ML-driven telematics dashboards for anomaly detection, driver scoring, and usage-based analytics across connected fleets.",
    tech: ["Python", "Kotlin", "Cloud APIs", "Machine Learning", "REST"],
    challenges: "Delivering actionable insights from streaming vehicle data while maintaining reliability across mobile and backend systems.",
    solutions: "Implemented data-driven monitoring, optimized API reliability, and launched predictive maintenance features with ML support.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    github: "#",
    link: "#"
  },
  {
    id: "p3",
    title: "AI Sales Intelligence Pipeline",
    description: "An end-to-end AI pipeline that automates the analysis of sales conversations, extracting key intent signals and classifying leads in real-time.",
    tech: ["Python", "Machine Learning", "NLP", "Cloud Infrastructure", "Real-time Processing"],
    challenges: "High volumes of call recordings relied on manual review for lead qualification, leading to delayed decisions, inconsistent evaluations, high operational costs, and missed high-intent leads.",
    solutions: "Engineered an automated AI/ML pipeline that processes conversational data to extract intent signals and classify leads instantly, significantly reducing operational costs and accelerating decision-making.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    github: "#",
    link: "#"
  },
  {
    id: "p4",
    title: "Centralized Fleet Control Platform",
    description: "Designed and implemented a centralized fleet control platform enabling remote vehicle immobilization, real-time tracking, FOTA updates, and automated workflows.",
    tech: ["IoT", "Telematics", "Cloud Architecture", "FOTA", "AI Alerts"],
    challenges: "Fleet operators faced operational inefficiency, revenue leakage, and delayed decision-making due to delayed theft response, manual tracking, inefficient FOTA updates, and poor fleet visibility.",
    solutions: "Built a comprehensive control platform featuring real-time fleet tracking, remote vehicle immobilization, seamless FOTA updates, AI-driven theft alerts, and automated dues recovery workflows.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    github: "#",
    link: "#"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp1",
    role: "Tech Lead (Scrum Master)",
    company: "Bits & Bytes Soft Pvt. Ltd, Gurugram",
    period: "Sep 2023 - Jun 2025",
    description: "Led delivery of AI/ML-powered telematics solutions for connected vehicles, coordinating mobile, backend, and cloud teams.",
    achievements: [
      "Delivered real-time driver behavior and predictive maintenance features for connected vehicle platforms.",
      "Reduced API failure rate by 20% through backend optimization and load handling improvements.",
      "Designed remote immobilization and fleet visibility controls for improved operational safety."
    ]
  },
  {
    id: "exp2",
    role: "Project Lead",
    company: "Samin Tekmindz Pvt. Ltd, Noida",
    period: "Aug 2022 - Sep 2023",
    description: "Led a team of 7+ developers to launch EV charging apps for Android and iOS, defining modular architecture and quality standards.",
    achievements: [
      "Delivered end-to-end EV charging and telematics experiences with Kotlin, Coroutines, and MVVM.",
      "Introduced scalable app architecture, improving release velocity and code quality.",
      "Mentored developers to strengthen engineering practices and feature delivery."
    ]
  },
  {
    id: "exp3",
    role: "Technical Project Manager",
    company: "Oodles Technologies Pvt. Ltd, Gurugram",
    period: "Apr 2021 - Aug 2022",
    description: "Managed enterprise Android product delivery and CI/CD pipelines for large-scale mobile applications.",
    achievements: [
      "Built scalable Android apps using Kotlin, REST APIs, and modern architecture patterns.",
      "Implemented CI/CD workflows to accelerate deployment cycles and improve reliability.",
      "Aligned product and engineering goals across multiple stakeholders."
    ]
  },
  {
    id: "exp4",
    role: "Senior Android Developer",
    company: "Softcore Infotech Pvt. Ltd., Delhi",
    period: "Dec 2016 - Apr 2021",
    description: "Delivered client-facing Android applications in e-commerce, styling, and consumer domains with high usability.",
    achievements: [
      "Built 5+ custom Android apps that boosted client satisfaction and user retention.",
      "Enhanced UI responsiveness and experience with modern Android patterns.",
      "Promoted reusable architecture and maintainable code practices."
    ]
  },
  {
    id: "exp5",
    role: "Android Developer",
    company: "Netcomm Labs Pvt. Ltd, Noida",
    period: "Feb 2016 - Nov 2016",
    description: "Developed location-aware Android applications for geospatial mapping and offline functionality.",
    achievements: [
      "Improved location accuracy and responsiveness by ~20%.",
      "Integrated map SDKs and offline storage for seamless user experiences.",
      "Delivered robust GPS-based features for mobile users."
    ]
  },
  {
    id: "exp6",
    role: "Android Developer",
    company: "Stunner IT Solution Pvt. Ltd, Delhi",
    period: "Nov 2014 - Feb 2016",
    description: "Built Android applications integrating REST APIs and third-party SDKs across early-stage mobile products.",
    achievements: [
      "Developed location-based apps with GPS and sensor integration.",
      "Delivered stable features across multiple mobile product initiatives."
    ]
  }
];

export const EDUCATION = [
  {
    degree: "MCA",
    institution: "GNIOT, Greater Noida",
    period: "2009 - 2012"
  },
  {
    degree: "B.Sc. Mathematics",
    institution: "DDU Gorakhpur University",
    period: "2006 - 2009"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "b1",
    title: "The Future of Mobile: AI & Automation",
    excerpt: "Exploring how tools like Make.com and Gemini 3 are revolutionizing the way we build apps.",
    date: "Sep 10, 2024",
    readTime: "7 min read",
    category: "Innovation"
  },
  {
    id: "b2",
    title: "Mastering React Native Performance",
    excerpt: "A comprehensive guide to profiling, memory management, and 60fps animations.",
    date: "Jul 05, 2024",
    readTime: "12 min read",
    category: "Technical"
  }
];
