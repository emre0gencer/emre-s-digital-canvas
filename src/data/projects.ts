export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  impact?: string;
  techStack: string[];
  category: string;
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
    id: "tok-tut",
    title: "TOK-TUT Earthquake Relief Platform",
    role: "Co-Founder, Developer",
    description: "Visual computing platform that enabled $2M+ in relief donations for earthquake victims in Turkey through efficient data processing and display.",
    impact: "Raised over $2 million in donations",
    techStack: ["Visual Computing", "Image Processing", "Video Processing", "QR Codes", "Data Analytics"],
    category: "Community Impact",
    date: "2023",
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
    id: "hydroport",
    title: "Hydroport - Clean Water Delivery System",
    role: "Designer, Developer",
    description: "AI/ML-driven autonomous clean water delivery system combining satellite data, automated transfers, and sustainable energy.",
    impact: "1st Place: UN SDG Clean Water & Social Innovation",
    techStack: ["AI", "Machine Learning", "IoT", "Satellite Data", "Autonomous Systems"],
    category: "Hackathon",
    date: "Jul-Sept 2022",
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
  {
    id: "currency-converter",
    title: "Live Currency Converter Extension",
    role: "Solo Developer",
    description: "Chrome Web extension enabling real-time currency conversion with live exchange rates, built as final project for Harvard CS50x.",
    techStack: ["JavaScript", "HTML", "CSS", "Chrome Extension API"],
    category: "Web Dev",
    date: "2022-2023",
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
];

export const getProjectById = (id: string) => projects.find((p) => p.id === id);

export const getProjectCategories = () => {
  const categories = Array.from(new Set(projects.map((p) => p.category)));
  return ["All", ...categories];
};
