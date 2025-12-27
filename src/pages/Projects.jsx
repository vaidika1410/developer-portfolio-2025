import ProjectCard from "../components/projects/ProjectCard";
import { featuredProjects, allProjects } from "../data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";


export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");


  const projectsRef = useRef(null);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);

    requestAnimationFrame(() => {
      projectsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };



  const filters = ["All", "Web", "AI/ML", "Systems", "Research", "Frontend"];

  const allCombinedProjects = [
    ...featuredProjects,
    ...allProjects,
  ];

  const filteredProjects =
    activeFilter === "All"
      ? allCombinedProjects
      : allCombinedProjects.filter((project) =>
        project.tags?.some((tag) =>
          tag.toLowerCase().includes(activeFilter.toLowerCase())
        )
      );

  return (
    <main className="bg-[#F6F6F4]">
      <div className="page-wrapper max-w-4xl mx-auto sm:px-6 px-5">

        {/* Header */}
        <section className="mb-16 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-semibold text-[#0B0B0C] mb-4">
            Projects
          </h1>
          <p className="text-base sm:text-lg text-[#5F6368] leading-relaxed">
            A collection of projects where I explore full-stack development,
            AI/ML systems, frontend engineering, and real-world problem solving.
          </p>
        </section>

        {/* Filters */}
        <div className="mb-14">
          <div className="relative overflow-x-auto no-scrollbar">
            <div
              className="
        relative inline-flex items-center gap-4
        border border-[#E6E6E3]
        rounded-full
        px-4 sm:px-8
        bg-white
        min-w-max
      "
            >
              {/* Animated underline */}
              <motion.div
                layout
                layoutId="project-filter-underline"
                className="absolute bottom-0 h-[3px] rounded-full bg-[#0B0B0C]"
                style={{
                  width: "var(--underline-width)",
                  left: "var(--underline-left)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 24,
                }}
              />

              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => handleFilterChange(filter)}

                  ref={(el) => {
                    if (activeFilter === filter && el) {
                      const parent = el.parentElement;

                      parent.style.setProperty(
                        "--underline-width",
                        `${el.offsetWidth}px`
                      );

                      parent.style.setProperty(
                        "--underline-left",
                        `${el.offsetLeft}px`
                      );
                    }
                  }}
                  className={`
            relative px-3 py-3 text-sm font-medium whitespace-nowrap
            transition-colors
            ${activeFilter === filter
                      ? "text-[#0B0B0C]"
                      : "text-[#6B6F76] hover:text-[#0B0B0C]"
                    }
          `}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>


        {/* Projects Grid with animation */}
        <section
          ref={projectsRef}
          className="scroll-mt-60"
        >

          <motion.div
            layout
            className="grid gap-6 sm:grid-cols-2"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

      </div>
    </main>
  );
}
