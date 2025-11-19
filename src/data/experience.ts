export interface Experience {
  id: string;
  role: string;
  organization: string;
  location?: string;
  date: string;
  type: "work" | "research" | "volunteer";
  description: string[];
  attachments?: {
    pdf?: string;
    pptx?: string;
  };
}

export const experiences: Experience[] = [
  {
    id: "mastercard",
    role: "Machine Learning Intern",
    organization: "Mastercard",
    location: "Remote",
    date: "Sept 2023",
    type: "work",
    description: [
      "Applied AI algorithms to detect fraud in payment systems, improving detection accuracy",
      "Conducted comprehensive SWOT analysis evaluating company strategy and innovation",
      "Assessed alignment with UN Sustainable Development Goals and corporate responsibility initiatives",
      "Gained hands-on experience with production ML systems at enterprise scale",
    ],
    attachments: {
      pdf: `${import.meta.env.BASE_URL}experiences/mastercard.pdf`,
      pptx: `${import.meta.env.BASE_URL}experiences/mastercard.pptx`,
    },
  },
  {
    id: "salesforce",
    role: "Data Analysis Intern",
    organization: "Salesforce",
    location: "Remote",
    date: "Jun 2023",
    type: "work",
    description: [
      "Utilized AI tools to analyze financial, R&D, and marketing datasets for strategic insights",
      "Assessed market competition and contributed insights on innovation strategies",
      "Examined application of AI tools for marketing campaign optimization",
      "Evaluated diversity, inclusion, and social responsibility initiatives",
    ],
    attachments: {
      pdf: `${import.meta.env.BASE_URL}experiences/salesforce.pdf`,
      pptx: `${import.meta.env.BASE_URL}experiences/salesforce.pptx`,
    },
  },
  {
    id: "cerrahpasa",
    role: "Researcher",
    organization: "Istanbul Cerrahpasa University",
    location: "Istanbul",
    date: "Jul-Nov 2023",
    type: "research",
    description: [
      "Co-authored published paper: 'The Role of AI-Enhanced Medical Computer Vision in Diagnostic Automation'",
      "Implemented CNN and Vision Transformer models for medical image classification",
      "Investigated implementation and benefits of medical computer vision methods",
      "Mentored by Oxford Tutor Joseph Young throughout research process",
      "Published in Journal of Next Frontier for Life Sciences and AI (2023, Volume 6, Issue 2)",
    ],
    attachments: {
      pdf: `${import.meta.env.BASE_URL}experiences/cerrahpasa.pdf`,
      pptx: `${import.meta.env.BASE_URL}experiences/cerrahpasa.pptx`,
    },
  },
  {
    id: "bogazici",
    role: "Researcher",
    organization: "Bogazici University",
    location: "Istanbul",
    date: "Nov 2023 - Jan 2024",
    type: "research",
    description: [
      "Investigated cloud computing applications in big data analytics",
      "Researched scalability, cost-efficiency, and emerging cloud trends",
      "Explored practical benefits of cloud computing in data analytics context",
      "Supervised by Prof. Dr. Tuna Tugcu",
    ],
    attachments: {
      pdf: `${import.meta.env.BASE_URL}experiences/bogazici.pdf`,
      pptx: `${import.meta.env.BASE_URL}experiences/bogazici.pptx`,
    },
  },
  {
    id: "rcec",
    role: "Vice President",
    organization: "Robert College Efficiency Challenge (RCEC)",
    location: "Istanbul",
    date: "2022-2024",
    type: "volunteer",
    description: [
      "Led electronic systems development for electric vehicle in TEKNOFEST competition",
      "Managed team of 15+ members and organized workload distribution",
      "Completed Technical Report Document and passed first competition stage",
      "Worked on electronic differential systems, steering systems, and electric motor integration",
    ],
    attachments: {
      pdf: `${import.meta.env.BASE_URL}experiences/rcec.pdf`,
      pptx: `${import.meta.env.BASE_URL}experiences/rcec.pptx`,
    },
  },
  {
    id: "english-tutoring",
    role: "English Tutor",
    organization: "ESET - Elementary School English Tutoring CIP",
    location: "Online",
    date: "2021",
    type: "volunteer",
    description: [
      "Taught English to 15+ elementary school students over 7 weeks",
      "Organized fun online activities, quizzes, and interactive learning sets",
      "Prepared educational slides to enhance learning experience",
      "Supported young students in their first foreign language journey",
    ],
    attachments: {
      pdf: `${import.meta.env.BASE_URL}experiences/english-tutoring.pdf`,
      pptx: `${import.meta.env.BASE_URL}experiences/english-tutoring.pptx`,
    },
  },
  {
    id: "stem-tutoring",
    role: "STEM Tutor",
    organization: "STEM4FUN",
    location: "Online",
    date: "Jun 2021",
    type: "volunteer",
    description: [
      "Taught 5 different science subjects from 6th grade curriculum to 10 middle school students",
      "Organized and demonstrated experiments remotely via Zoom",
      "Prepared educational slides aligned with science curriculum",
      "Ensured all experiment equipment was delivered to students",
    ],
    attachments: {
      pdf: `${import.meta.env.BASE_URL}experiences/stem-tutoring.pdf`,
      pptx: `${import.meta.env.BASE_URL}experiences/stem-tutoring.pptx`,
    },
  },
];
