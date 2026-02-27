import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiStripe,
  SiDocker,
  SiLinux,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFigma,
  SiGit,
  SiGithub,
  SiTensorflow,
  SiKeras,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiOpencv,
  SiPython,
  SiNextdotjs,
  SiTypescript,
  SiFramer,
  SiMongoose,
  SiThunderbird,
  SiVercel,
} from "react-icons/si";

import {
  Activity,
  Brain,
  Mail,
  BarChart2,
  Server,
} from "lucide-react";

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

  /* ========= BACKEND ========= */
  "Node.js": <SiNodedotjs color="#339933" />,
  "Express.js": <SiExpress color="#000000" />,
  "MongoDB": <SiMongodb color="#47A248" />,
  "JWT Authentication": <SiJsonwebtokens color="#000000" />,
  "Nodemailer": <Mail color="#0A66C2" />,
  "Flask": <SiPython color="#000000" />,
  "REST API": <Server color="#10B981" />,
  "Mongoose": <SiMongoose color="#880000" />,

  /* ========= INFRA ========= */
  "Payment Gateway": <SiStripe color="#635BFF" />,
  "Render": <Server color="#46E3B7" />,
  "Docker": <SiDocker color="#2496ED" />,
  "Linux System Calls": <SiLinux color="#FCC624" />,

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

  /* ========= TOOLS ========= */
  "Figma": <SiFigma color="#F24E1E" />,
  "Git": <SiGit color="#F05032" />,
  "GitHub": <SiGithub color="#181717" />,
  "Thunder Client": <SiThunderbird color="#FF6C37" />,
  "Vercel": <SiVercel color="#000000" />,
};
