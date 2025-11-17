export interface Course {
  id: string;
  title: string;
  provider: string;
  date?: string;
  description?: string;
  categories: string[];
  certified: boolean;
}

export const courses: Course[] = [
  {
    id: "cs50",
    title: "CS50x: Introduction to Computer Science",
    provider: "Harvard University",
    date: "2022-2023",
    description: "Comprehensive introduction to CS fundamentals including C, Python, SQL, HTML/CSS, and JavaScript. Completed final project: Chrome Web extension for currency conversion.",
    categories: ["Web Dev", "Fundamentals"],
    certified: true,
  },
  {
    id: "ml-course",
    title: "Machine Learning",
    provider: "Education for Innovation Foundation",
    date: "Jul 2022",
    description: "Fundamental concepts of ML algorithms including supervised/unsupervised learning, deep learning, and reinforcement learning. Built image classification model as final project.",
    categories: ["AI", "Machine Learning"],
    certified: true,
  },
  {
    id: "cv-course",
    title: "Computer Vision Course",
    provider: "Education for Innovation Foundation",
    date: "Jul 2022",
    description: "Image and video analysis, feature extraction, object detection, and classification. Implemented grayscale to RGB conversion algorithm.",
    categories: ["AI", "Computer Vision"],
    certified: true,
  },
  {
    id: "blockchain",
    title: "Blockchain Course",
    provider: "Education for Innovation Foundation",
    date: "Jul 2022",
    description: "Blockchain technology, distributed ledgers, smart contracts, and decentralized systems. Covered security, consensus mechanisms, and dApps.",
    categories: ["Blockchain", "Web Dev"],
    certified: true,
  },
  {
    id: "research-skills",
    title: "Oxford/Cambridge Research Skills Intensive",
    provider: "Oxford & Cambridge Universities",
    date: "Jun-Jul 2023",
    description: "Research methodology, source evaluation (CRAAP test), formal bibliography creation, and persuasive writing techniques.",
    categories: ["Research", "Writing"],
    certified: true,
  },
  {
    id: "stats",
    title: "Statistical Methods in Scientific Research",
    provider: "Cerrahpasa University, Istanbul University & SOIL",
    date: "Jul 2022",
    description: "Statistics in scientific research, SPSS and PSPP programs, statistical models, and complex testing methods.",
    categories: ["Data Science", "Research"],
    certified: true,
  },
  {
    id: "java-duke",
    title: "Java Programming: Solving Problems With Software",
    provider: "Duke University (Coursera)",
    date: "Mar-Apr 2021",
    description: "Java syntax and semantics, CSV files, basic statistics. Final project: Baby names popularity comparison tool.",
    categories: ["Programming", "Java"],
    certified: true,
  },
  {
    id: "mechanics",
    title: "Augmented Mechanics Course",
    provider: "Kadir Has University",
    date: "Jul 2021",
    description: "Advanced high-school physics with Prof. Dr. Nihat Berker. Applied calculus to physics problems and theorems.",
    categories: ["Physics", "Mathematics"],
    certified: true,
  },
];

export const getCourseCategories = () => {
  const categories = new Set<string>();
  courses.forEach((course) => {
    course.categories.forEach((cat) => categories.add(cat));
  });
  return ["All", ...Array.from(categories).sort()];
};
