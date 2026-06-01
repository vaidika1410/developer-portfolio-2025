import {
  SiNestjs,
  SiPostgresql,
  SiPrisma,
  SiAxios,
  SiRedis,
  SiPnpm,
  SiJest,
} from "react-icons/si";

import {
  Database,
  ShieldCheck,
  Puzzle,
  Clock3,
  Chrome,
  Layers3,
  Boxes,
  CheckCircle2,
} from "lucide-react";

import { SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiJsonwebtokens, SiStripe, SiDocker, SiLinux, SiHtml5, SiCss3, SiJavascript, SiFigma, SiGit, SiGithub, SiTensorflow, SiKeras, SiNumpy, SiPandas, SiScikitlearn, SiOpencv, SiPython, SiNextdotjs, SiTypescript, SiFramer, SiMongoose, SiThunderbird, SiVercel, } from "react-icons/si";

import { Activity, Brain, Mail, BarChart2, Server, } from "lucide-react";

import { Sparkles, Workflow, Bot, Cpu, } from "lucide-react";

import { SiOpenai, SiHuggingface, } from "react-icons/si";

export const techIconMap = {
  /* ========= FRONTEND ========= */
  "React": <SiReact color="#61DAFB" />,
  "Tailwind CSS": <SiTailwindcss color="#38BDF8" />,
  "HTML": <SiHtml5 color="#E34F26" />,
  "CSS": <SiCss3 color="#1572B6" />,
  "JavaScript": <SiJavascript color="#F7DF1E" />,
  "GSAP": <Activity color="#0AE448" />,
  "Next.js": <SiNextdotjs color="#000000" />,
  "TypeScript": <SiTypescript color="#3178C6" />,
  "Framer Motion": <SiFramer color="#0055FF" />,
  "Lucide Icons": <Server color="#6B7280" />,
  "Radix UI": <Layers3 color="#6B7280" />,
  "shadcn/ui": <Puzzle color="#000000" />,
  "TanStack Query": <Database color="#FF4154" />,
  "Axios": <SiAxios color="#5A29E4" />,

  /* ========= BACKEND ========= */
  "Node.js": <SiNodedotjs color="#339933" />,
  "Express.js": <SiExpress color="#000000" />,
  "MongoDB": <SiMongodb color="#47A248" />,
  "JWT Authentication": <SiJsonwebtokens color="#000000" />,
  "Nodemailer": <Mail color="#0A66C2" />,
  "Flask": <SiPython color="#000000" />,
  "REST API": <Server color="#10B981" />,
  "Mongoose": <SiMongoose color="#880000" />,
  "NestJS": <SiNestjs color="#E0234E" />,
  "PostgreSQL": <SiPostgresql color="#4169E1" />,
  "Prisma ORM": <SiPrisma color="#2D3748" />,
  "Passport.js": <ShieldCheck color="#34D399" />,
  "Zod": <CheckCircle2 color="#3B82F6" />,
  "class-validator": <CheckCircle2 color="#10B981" />,
  "date-fns": <Clock3 color="#F97316" />,

  /* ========= EXTENSION ========= */
  "Chrome Extension API": <Chrome color="#4285F4" />,
  "Manifest V3": <Chrome color="#EA4335" />,
  "Plasmo": <Boxes color="#8B5CF6" />,

  /* ========= INFRA ========= */
  "Payment Gateway": <SiStripe color="#635BFF" />,
  "Render": <Server color="#46E3B7" />,
  "Docker": <SiDocker color="#2496ED" />,
  "Linux System Calls": <SiLinux color="#FCC624" />,
  "Redis": <SiRedis color="#DC382D" />,
  "Turborepo": <Boxes color="#EF4444" />,
  "pnpm Workspaces": <SiPnpm color="#F69220" />,

  /* ========= ML / AI ========= */
  "Python": <SiPython color="#3776AB" />,
  "TensorFlow": <SiTensorflow color="#FF6F00" />,
  "Keras": <SiKeras color="#D00000" />,
  "NumPy": <SiNumpy color="#013243" />,
  "Pandas": <SiPandas color="#150458" />,
  "Scikit-learn": <SiScikitlearn color="#F7931E" />,
  "OpenCV": <SiOpencv color="#5C3EE8" />,
  "Isolation Forest": <Brain color="#6B7280" />,
  "Streamlit": <BarChart2 color="#FF4B4B" />,

  /* ========= AI / LLM ========= */
  "OpenAI": <SiOpenai color="#10A37F" />,
  "LLMs": <Brain color="#8B5CF6" />,
  "AI Integration": <Sparkles color="#F59E0B" />,
  "Prompt Engineering": <Bot color="#3B82F6" />,
  "AI Automation": <Workflow color="#EC4899" />,
  "Machine Learning": <Cpu color="#6366F1" />,
  "Hugging Face": <SiHuggingface color="#FFD21E" />,

  /* ========= TOOLS ========= */
  "Figma": <SiFigma color="#F24E1E" />,
  "Git": <SiGit color="#F05032" />,
  "GitHub": <SiGithub color="#181717" />,
  "Thunder Client": <SiThunderbird color="#FF6C37" />,
  "Vercel": <SiVercel color="#000000" />,
  "Neon Database": <Database color="#00E699" />,

  /* ========= TESTING ========= */
  "Jest": <SiJest color="#C21325" />,
  "Supertest": <CheckCircle2 color="#14B8A6" />,
};
