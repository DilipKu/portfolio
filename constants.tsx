
import { Project, Experience, SkillGroup, BlogPost } from './types';

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/dilipkrgupta/",
  github: "https://github.com/dilipkrgupta",
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
    category: "Platform Engineering",
    skills: [
      { name: "Android (Kotlin / Jetpack Compose)", icon: "🤖" },
      { name: "IoT / BLE / MQTT / FOTA", icon: "🌐" },
      { name: "Clean / Modular Architecture", icon: "🏗️" },
      { name: "CI/CD & Automation", icon: "🚀" }
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
    image: "https://images.unsplash.com/photo-1480472169628-018b2f00d3cd?q=80&w=2072&auto=format&fit=crop",
    github: "#",
    link: "#"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp1",
    role: "Scrum Master",
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
    role: "Technical Program Manager",
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
