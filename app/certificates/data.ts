export interface Certificate {
  id: number;
  title: string;
  organization?: string;
  date?: string;
  url?: string;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Data Analytics",
    organization: "Coder House",
    date: "March 2024",
    url: "/DataAnalyticsCertificate.png",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    organization: "SoyHenry",
    date: "October 2025",
    url: "/HenryCertificate.pdf",
  },
  {
    id: 3,
    title: "Foundation of Project Management",
    organization: "Google",
    date: "December 2025",
    url: "/certificate_pm.jpeg",
  },
  {
    id: 4,
    title: "Project Initialization: Starting a successful project",
    organization: "Google",
    date: "January 2026",
    url: "/Coursera pm2.pdf",
  },
  {
    id: 5,
    title: "Crash Course on Python",
    organization: "Google",
    date: "December 2025",
    url: "/certificate_python.jpeg",
  },
];

