import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = ["Intro", "Experience", "Skills", "Resume"];

function AccordionRow({ header, children, isOpen, onToggle }) {
  return (
    <div className="border-b border-[#E6E6E3] py-6">
      <button
        onClick={onToggle}
        className="w-full text-left flex items-start justify-between gap-6"
      >
        {header}

        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="text-[#8A8F95]"
        >
          ↓
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SkillPill({ icon: Icon, label }) {
  return (
    <span
      className="
        inline-flex items-center gap-2
        px-3 py-1.5
        rounded-full
        border border-[#E6E6E3]
        text-sm text-[#0B0B0C]
        bg-transparent
        hover:border-[#CFCFCA]
        transition-colors
      "
    >
      {Icon && <Icon size={15} className="text-[#4FA3A5]" />}
      <span className="whitespace-nowrap">{label}</span>
    </span>
  );
}



function SkillCard({ title, skills }) {
  return (
    <div
      className="
        rounded-[20px]
        border border-[#E6E6E3]
        bg-white
        p-6
        hover:shadow-sm
        transition-shadow
      "
    >
      <h3 className="text-base font-medium text-[#0B0B0C] mb-4">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillPill
            key={skill.label}
            icon={skill.icon}
            label={skill.label}
          />
        ))}
      </div>
    </div>
  );
}


function Intro() {
  return (
    <div className="space-y-10">
      <h2 className="text-2xl font-medium text-[#0B0B0C]">
        How my thinking around software has evolved.
      </h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[#4FA3A5]">
            Foundations
          </h3>
          <p className="mt-2 text-base sm:text-lg text-[#6B6F76] leading-relaxed">
            I started with the web as a way to build things people could actually
            use. Early on, my focus was on clarity — writing code that was easy
            to reason about and interfaces that didn’t get in the user’s way.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[#4FA3A5]">
            Building Products
          </h3>
          <p className="mt-2 text-base sm:text-lg text-[#6B6F76] leading-relaxed">
            Shipping real projects shifted my perspective. Features mattered
            less than how systems behaved under change, feedback, and iteration.
            This is where maintainability and structure became non-negotiable.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[#4FA3A5]">
            Systems Thinking
          </h3>
          <p className="mt-2 text-base sm:text-lg text-[#6B6F76] leading-relaxed">
            As projects grew, I began thinking beyond individual components.
            Trade-offs, data flow, and failure cases became just as important as
            implementation details.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[#4FA3A5]">
            Applied AI
          </h3>
          <p className="mt-2 text-base sm:text-lg text-[#6B6F76] leading-relaxed">
            My interest in AI emerged naturally from this mindset. Models became
            useful only when they fit into well-designed systems — supporting
            real use cases instead of existing as isolated experiments.
          </p>
        </div>
      </div>
    </div>
  );
}

function Experience() {
  const navigate = useNavigate();
  const [openId, setOpenId] = useState(null);

  const data = [
    {
      id: "steg",
      title: "Research Internship – Satellite Image Steganography",
      organization: "Medi-Caps University · In-house Research",
      duration: "Jun 2025 – Jul 2025",
      description:
        "Worked on an encoder–decoder based CNN approach for steganography in satellite images. Identified gaps in existing literature, designed a custom methodology, and validated it through experimentation, culminating in an authored research paper.",
      projectSlug: "steganography-detection",
    },
    {
      id: "fire",
      title: "Virtual Internship – Artificial Intelligence & Data Analytics (Green Skills)",
      organization:
        "AICTE · Shell India Markets Pvt. Ltd. · Edunet Foundation",
      duration: "Apr 2025 – May 2025",
      description:
        "Designed and trained a CNN-based forest fire detection system using satellite imagery, focusing on real-world environmental monitoring.",
      projectSlug: "forest-fire-detection",
    },
    {
      id: "reimagine",
      title: "Re-Imagine Hackathon",
      organization: "Sheryians Coding School",
      description:
        "Re-imagined an existing brand website from a design-first perspective, improving layout, hierarchy, and interactions.",
      projectSlug: "aorus-redesign",
    },
    {
      id: "hackndore",
      title: "Hack’Ndore Hackathon",
      organization:
        "Indore Municipal Corporation · Acropolis Institute of Technology & Research",
      description:
        "Built a revenue management system during a 48-hour civic hackathon addressing real municipal challenges.",
      githubUrl: "https://github.com/vaidika1410/RevenueManagementSystem",
    },
  ];

  return (
    <div className="space-y-2">
      {data.map((item) => {
        const isOpen = openId === item.id;

        const header = (
          <div className="flex flex-col sm:flex-row sm:justify-between gap-2 w-full">
            <div>
              <p className="font-medium text-[#0B0B0C]">
                {item.title}
              </p>
              <p className="text-sm text-[#8A8F95]">
                {item.organization}
              </p>
            </div>

            {item.duration && (
              <span className="inline-flex w-max items-center
      px-3 h-max py-1
      rounded-full
      text-xs font-medium
     bg-[#4FA3A51A]
      text-[#3E8F90]
      whitespace-nowrap">
                {item.duration}
              </span>
            )}
          </div>
        );

        return (
          <AccordionRow
            key={item.id}
            header={header}
            isOpen={isOpen}
            onToggle={() => setOpenId(isOpen ? null : item.id)}
          >
            <p className="text-base sm:text-lg text-[#6B6F76] leading-relaxed">
              {item.description}
            </p>

            <div className="mt-4 flex gap-4">
              {item.projectSlug && (
                <button
                  onClick={() =>
                    navigate(`/projects/${item.projectSlug}`)
                  }
                  className="text-sm text-[#4FA3A5] hover:underline"
                >
                  View project →
                </button>
              )}

              {item.githubUrl && (
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#4FA3A5] hover:underline"
                >
                  View repository ↗
                </a>
              )}
            </div>
          </AccordionRow>
        );
      })}
    </div>
  );
}


import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiOpenjdk,
  SiMongodb,
  SiMysql,
  SiGithub,
  SiGit,
  SiGooglecloud,
  SiOpenai,
  SiGooglegemini,
  SiVercel,
  SiFirebase,
  SiDocker,
  SiPostman,
  SiHeroku,
  SiRender,
  SiFramer,
  // FaTrain,
  SiSwiper,
  SiRedux,
  SiShadcnui,
  SiStreamlit,
  SiGithubactions,
  SiNextdotjs,

} from "react-icons/si";

import { FaTerminal } from "react-icons/fa";
import { SiGreensock } from "react-icons/si";


function Skills() {
  return (
    <div className="space-y-8">
      <p className="text-base sm:text-lg text-[#6B6F76] leading-relaxed">
        My skill set spans frontend engineering, backend development,
        applied AI research, and the tools required to ship reliable systems.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <SkillCard
          title="Frontend Development"
          skills={[
            { label: "HTML5", icon: SiHtml5 },
            { label: "CSS3", icon: SiCss3 },
            { label: "JavaScript (ES6+)", icon: SiJavascript },
            { label: "React", icon: SiReact },
            { label: "Next.js", icon: SiNextdotjs},
            { label: "Tailwind CSS", icon: SiTailwindcss },
            { label: "Framer Motion", icon: SiFramer },
            { label: "GSAP", icon: SiGreensock },
            { label: "Locomotive Scroll" },
            { label: "Swiper.js", icon: SiSwiper },
            { label: "Redux", icon: SiRedux },
            { label: "shadcn/ui", icon: SiShadcnui },
          ]}
        />

        <SkillCard
          title="Backend Development"
          skills={[
            { label: "Node.js", icon: SiNodedotjs },
            { label: "Express.js", icon: SiExpress },
            { label: "Java", icon: SiOpenjdk },
            { label: "JSP" },
            { label: "Servlets" },
            { label: "MongoDB", icon: SiMongodb },
            { label: "MySQL", icon: SiMysql },
            { label: "Firebase", icon: SiFirebase },
          ]}
        />

        <SkillCard
          title="Gen AI"
          skills={[
            { label: "AI API Integration" },
            { label: "Prompt Engineering" },
            { label: "Client-side AI Workflows" },
            { label: "AI-assisted UI Features" },
            { label: "AI Output Visualization" },

            { label: "ChatGPT", icon: SiOpenai },
            { label: "Gemini", icon: SiGooglegemini },
            { label: "Gemini CLI", icon: FaTerminal },
          ]}
        />

        <SkillCard
          title="Tools & Services"
          skills={[
            { label: "Git", icon: SiGit },
            { label: "GitHub", icon: SiGithub },
            {
              label: "GitHub Actions", icon: SiGithubactions
            },

            { label: "Vercel", icon: SiVercel },
            { label: "Render", icon: SiRender },
            { label: "Heroku", icon: SiHeroku },

            { label: "Docker", icon: SiDocker },
            { label: "Postman", icon: SiPostman },

            { label: "Google Cloud", icon: SiGooglecloud },
            { label: "Streamlit", icon: SiStreamlit },
          ]}
        />
      </div>
    </div>
  );
}


function Resume() {
  return (
    <div className="space-y-6">
      {/* Resume Preview */}
      <div className="rounded-[20px] border border-[#E6E6E3] overflow-hidden bg-white">
        <iframe
          src="/Vaidika_Kaul_Software_Developer_Resume_2025.pdf"
          title="Resume Preview"
          className="w-full h-[520px] sm:h-[640px]"
        />
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-4 pt-2">
        <a
          href="/Vaidika_Kaul_-_Frontend_Dev_Resume_2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex px-5 py-2.5 rounded-full
            bg-[#0B0B0C] text-white text-sm font-medium
            hover:opacity-90 transition
          "
        >
          Open in new tab
        </a>

        <a
          href="/Vaidika_Kaul_-_Frontend_Dev_Resume_2025.pdf"
          download
          className="
            inline-flex px-5 py-2.5 rounded-full
            border border-[#E6E6E3]
            text-[#0B0B0C] text-sm font-medium
            hover:bg-[#F0F0EE] transition
          "
        >
          Download PDF
        </a>
      </div>
    </div>
  );
}

export default function About() {
  const [activeTab, setActiveTab] = useState("Intro");
  const contentRef = useRef(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);

    // Smooth scroll to content
    requestAnimationFrame(() => {
      contentRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  return (
    <main className="bg-[#F6F6F4] ">
      <div ref={contentRef} className="-scroll-mt-20 ">

        <div className="page-wrapper max-w-4xl mx-auto sm:px-6 px-5">

          {/* Header */}
          <header className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-semibold text-[#0B0B0C]">
              About Me
            </h1>
          </header>

          <p className="mb-10 text-lg text-[#6B6F76]">
            A look into my journey as a developer — blending full-stack engineering with applied AI and a strong emphasis on clean, reliable systems.
          </p>

          {/* Tabs */}
          <nav className="mb-10">
            <div className="relative overflow-x-auto no-scrollbar">
              <div className="relative inline-flex items-center bg-white border border-[#E6E6E3] rounded-full p-1 min-w-max">


                {/* Moving background */}
                <motion.div
                  layout
                  layoutId="active-pill"
                  className="absolute inset-y-1 rounded-full bg-[#0B0B0C]"
                  style={{
                    width: "var(--pill-width)",
                    left: "var(--pill-left)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />

                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => handleTabClick(tab)}
                    ref={(el) => {
                      if (activeTab === tab && el) {
                        el.parentElement.style.setProperty(
                          "--pill-width",
                          `${el.offsetWidth}px`
                        );
                        el.parentElement.style.setProperty(
                          "--pill-left",
                          `${el.offsetLeft}px`
                        );
                      }
                    }}
                    className={`
          relative z-10 px-5 py-2.5 rounded-full text-sm font-medium transition-colors
          ${activeTab === tab
                        ? "text-white"
                        : "text-[#0B0B0C] hover:text-[#0B0B0C]"
                      }
        `}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </nav>


          {/* Content */}
          <div ref={contentRef}>
            <AnimatePresence mode="wait">
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="w-full"
              >

                {activeTab === "Intro" && <Intro />}
                {activeTab === "Experience" && <Experience />}
                {activeTab === "Skills" && <Skills />}
                {activeTab === "Resume" && <Resume />}
              </motion.section>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </main>
  );
}
