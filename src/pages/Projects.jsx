import { useState } from "react";
import ProjectCard from "../components/projects/ProjectCard";
import { featuredProjects, allProjects } from "../data/projects";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-24 sm:py-28">

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
        <section className="mb-16">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`
                    px-5 py-2 rounded-full text-sm font-medium border
                    transition-all duration-200
                    ${
                      isActive
                        ? "bg-[#0B0B0C] text-white border-[#0B0B0C] shadow-[0_4px_14px_rgba(0,0,0,0.12)]"
                        : "bg-white text-[#5F6368] border-[#E6E6E3] hover:bg-[#F0F0EE]"
                    }
                  `}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </section>

        {/* Projects Grid with animation */}
        <section>
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
