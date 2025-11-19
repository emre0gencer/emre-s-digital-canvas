export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  impact?: string;
  techStack: string[];
  category: string;
  categories?: string[];
  date: string;
  githubUrl?: string;
  liveUrl?: string;
  details?: {
    problem: string;
    solution: string;
    contribution: string;
    learned: string[];
  };
}

export const projects: Project[] = [
  {
    id: "duquesne-incline",
    title: "Duquesne Incline Visitor Experience Website",
    role: "Solo Developer",
    description: "Responsive multi-page website for Pittsburgh's historic Duquesne Incline featuring live weather via API, interactive photo gallery, FAQ accordion, embedded map, and validated contact form, built as the final project for CMU 67-250.",
    techStack: ["HTML", "CSS", "JavaScript", "jQuery", "OpenWeatherMap API", "Google Maps Embed API"],
    category: "Web Dev",
    categories: ["Web Dev", "Course Project"],
    date: "2024",
    githubUrl: "https://github.com/emre0gencer/DuquesneIncline",
    liveUrl: "https://emre0gencer.github.io/DuquesneIncline/",
    details: {
      problem: "Pittsburgh's historic Duquesne Incline needed a modern, user-friendly website to enhance visitor experience and provide essential information about this iconic landmark.",
      solution: "Developed a fully responsive multi-page website integrating real-time weather data, interactive galleries, and visitor resources to create a comprehensive digital experience.",
      contribution: "Sole developer responsible for all aspects: responsive design, API integrations (OpenWeatherMap and Google Maps), interactive UI components including FAQ accordion and photo gallery, and form validation.",
      learned: [
        "API integration with third-party services",
        "Responsive web design principles",
        "jQuery for DOM manipulation and effects",
        "User experience design for visitor information",
      ],
    },
  },
  {
    id: "tok-tut",
    title: "TOK-TUT Earthquake Relief Platform",
    role: "Co-Founder, Developer",
    description: "Visual computing platform that enabled $2M+ in relief donations for earthquake victims in Turkey through efficient data processing and display.",
    impact: "Raised over $2 million in donations",
    techStack: ["Visual Computing", "Image Processing", "Video Processing", "QR Codes", "Data Analytics"],
    category: "Community Impact",
    date: "2023",
    liveUrl: "https://drive.google.com/file/d/1kDBAwEYzf0SXLgMciZydWeeN4hbkTOxP/view?usp=sharing",
    details: {
      problem: "After devastating earthquakes in Turkey, there was a critical need for a transparent, efficient platform to mobilize resources and donations for relief efforts.",
      solution: "Built a comprehensive visual computing platform that processed and displayed images, videos, and QR code data to facilitate donations and track relief operations.",
      contribution: "Led the technical development including data acquisition, processing pipelines, and visual display systems. Managed water treatment plant operations in container cities.",
      learned: [
        "Large-scale data processing and visualization",
        "Crisis response technology development",
        "Community impact through technology",
        "Team coordination in high-pressure situations",
      ],
    },
  },
  {
    id: "visiosoft",
    title: "Visiosoft - AI Public Safety System",
    role: "Designer, Developer",
    description: "AI-powered startup concept utilizing Transfer Learning to extract information from camera footage for enhanced public security.",
    impact: "1st Place: Human-Centered AI & UN SDG Good Health and Wellbeing",
    techStack: ["AI", "Computer Vision", "Transfer Learning", "Video Analysis"],
    category: "Hackathon",
    date: "Jul-Oct 2023",
    liveUrl: "https://drive.google.com/file/d/10AOQRtBcEIV1VmgJ-oDvPwjTtSYg1Zfh/view?usp=sharing",
    details: {
      problem: "Public safety systems often lack real-time intelligent analysis capabilities to detect and respond to security threats effectively.",
      solution: "Designed an AI system that leverages Transfer Learning to analyze camera footage in real-time, detecting potential security incidents and alerting authorities.",
      contribution: "Developed the core AI architecture, trained models for threat detection, and designed the alert system infrastructure.",
      learned: [
        "Transfer Learning applications in security",
        "Real-time video processing at scale",
        "Ethical considerations in AI surveillance",
        "Human-centered AI design principles",
      ],
    },
  },
  {
    id: "basketball-duels",
    title: "1v1 Basketball Duels",
    role: "Solo Developer",
    description: "Single-player 2D basketball game featuring Quick Match and Tournament modes, adjustable AI difficulty (action cooldown tuning), and an NBA-style four-round bracket where winning consecutive games earns the championship, developed as the final project for CMU 15-112 and delivered within 1.5 weeks.",
    techStack: ["Python", "pygame", "Game Loop & State Management", "Object-Oriented Programming"],
    category: "Course Project",
    date: "2023",
    githubUrl: "https://github.com/emre0gencer/1v1duels",
    details: {
      problem: "Create an engaging single-player basketball game with intelligent AI opponents and multiple game modes within a tight 1.5-week deadline for the CMU 15-112 final project.",
      solution: "Developed a 2D basketball game using pygame with a complete game loop, state management system, and object-oriented architecture featuring Quick Match and Tournament modes with adjustable AI difficulty.",
      contribution: "Sole developer responsible for all aspects: game mechanics, AI opponent logic with tunable action cooldowns, tournament bracket system, state management, and physics-based ball movement.",
      learned: [
        "Game development with pygame",
        "AI difficulty balancing through cooldown mechanics",
        "State machine architecture for game modes",
        "Rapid prototyping and delivery under time constraints",
      ],
    },
  },
  {
    id: "currency-converter",
    title: "Live Currency Converter Extension",
    role: "Solo Developer",
    description: "Chrome Web extension enabling real-time currency conversion with live exchange rates, built as final project for Harvard CS50x.",
    techStack: ["JavaScript", "HTML", "CSS", "Chrome Extension API"],
    category: "Web Dev",
    date: "2022-2023",
    githubUrl: "https://github.com/emre0gencer/currencyconverter2022",
    liveUrl: "https://drive.google.com/file/d/18MOsKSO-cPPHlqefuA-icX1pYPSYeOwX/view?usp=sharing",
    details: {
      problem: "Users need quick access to accurate currency conversions while browsing without switching to separate websites or apps.",
      solution: "Developed a Chrome extension that integrates with live exchange rate APIs to provide instant currency conversions directly in the browser.",
      contribution: "Sole developer responsible for all aspects: API integration, UI/UX design, extension architecture, and deployment.",
      learned: [
        "Chrome Extension development",
        "API integration and data handling",
        "Cross-platform web development",
        "User experience optimization",
      ],
    },
  },
  {
    id: "hydroport",
    title: "Hydroport - Clean Water Delivery System",
    role: "Designer, Developer",
    description: "AI/ML-driven autonomous clean water delivery system combining satellite data, automated transfers, and sustainable energy.",
    impact: "1st Place: UN SDG Clean Water & Social Innovation",
    techStack: ["AI", "Machine Learning", "IoT", "Satellite Data", "Autonomous Systems"],
    category: "Hackathon",
    date: "Jul-Sept 2022",
    liveUrl: "https://drive.google.com/file/d/1lrAaoNR0M5finkQphWzTOIJWsdAXotol/view?usp=sharing",
    details: {
      problem: "Millions lack access to clean water. Traditional distribution methods are inefficient and costly, especially in remote areas.",
      solution: "Created an automated water delivery system using AI for route optimization, ML for demand prediction, and autonomous vehicles powered by sustainable energy.",
      contribution: "Designed the AI/ML algorithms for route optimization and demand forecasting. Integrated satellite data for real-time monitoring and decision-making.",
      learned: [
        "IoT systems integration",
        "Satellite data processing",
        "Sustainable technology design",
        "Social impact through innovation",
      ],
    },
  },
];

export const getProjectById = (id: string) => projects.find((p) => p.id === id);

export const getProjectCategories = () => {
  const categorySet = new Set<string>();
  projects.forEach((p) => {
    if (p.categories) {
      p.categories.forEach((cat) => categorySet.add(cat));
    } else {
      categorySet.add(p.category);
    }
  });
  const categories = Array.from(categorySet).sort();
  
  // Move "Community Impact" to the end
  const communityIndex = categories.indexOf("Community Impact");
  if (communityIndex > -1) {
    categories.splice(communityIndex, 1);
    categories.push("Community Impact");
  }
  
  return ["All", ...categories];
};
