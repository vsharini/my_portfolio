export interface Skill {
  name: string;
  group: string;
}

export interface Project {
  id: string;
  title: string;
  blurb: string;
  stack: string[];
  link: string;
}

export interface Certification {
  name: string;
  issuer: string;
  status: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  points: string[];
}

export const SKILLS: Skill[] = [
  { name: "Java", group: "Language" },
  { name: "SQL", group: "Language" },
  { name: "HTML", group: "Language" },
  { name: "CSS", group: "Language" },
  { name: "Spring Boot", group: "Framework" },
  { name: "MySQL", group: "Database" },
  { name: "PostgreSQL", group: "Database" },
  { name: "GitHub", group: "Tools" },
  { name: "VS Code", group: "Tools" },
  { name: "Postman", group: "Tools" },
  { name: "Problem-Solving", group: "Core" },
  { name: "Communication", group: "Core" },
  { name: "Analytical Thinking", group: "Core" },
  { name: "Creativity", group: "Core" },
];

export const GROUPS = ["All", ...Array.from(new Set(SKILLS.map((s) => s.group)))];

export const PROJECTS: Project[] = [
  {
    id: "01",
    title: "Drug detection system",
    blurb:
      "AI-powered facial analysis system using computer vision and deep learning to identify drug-affected individuals, with real-time webcam monitoring and detection pipelines.",
    stack: ["Python", "OpenCV", "YOLOv8"],
    link: "#",
  },
  {
    id: "02",
    title: "CyberNest",
    blurb:
      "Android-based child safety application that detects harmful messages using NLP, with secure MongoDB storage, real-time alerts, and a monitoring dashboard.",
    stack: ["FastAPI", "NLP", "MongoDB", "Android Studio"],
    link: "#",
  },
  {
    id: "03",
    title: "Digital fortune teller",
    blurb:
      "A cloud-native fortune-telling app delivering real-time predictions with secure data handling, built for scale on serverless infrastructure.",
    stack: ["AWS Lambda", "DynamoDB", "API Gateway"],
    link: "#",
  },
];

export const CERTIFICATIONS: Certification[] = [
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", status: "Certified" },
  { name: "Database Management System", issuer: "NPTEL · 30 Days Cloud Challenge", status: "Completed" },
  { name: "Design Thinking — A Primer", issuer: "NPTEL Hack-A-Cloud 2.0 Hackathon", status: "Participant" },
  { name: "Python for Data Science", issuer: "NPTEL", status: "Completed" },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Intern (Trainee)",
    company: "Neurealm Private Limited",
    period: "2026 · 3 months · Chennai",
    points: [
      "Contributed to backend feature development using Java, Spring Boot, and PostgreSQL.",
      "Designed and tested RESTful APIs using Postman to support application functionality and system integration.",
      "Collaborated on requirement understanding, debugging, and feature validation.",
    ],
  },
  {
    role: "Student Intern",
    company: "Ashok Leyland Limited",
    period: "2026 · 3 months · Chennai",
    points: [
      "Observed IT department operations, gaining exposure to enterprise software systems and support processes.",
      "Learned about system analysis, troubleshooting workflows, and IT infrastructure management.",
    ],
  },
];
