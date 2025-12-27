import { useParams, useNavigate } from "react-router-dom";
import { featuredProjects, allProjects } from "../data/projects";
import { CircleCheck, Check, AlertTriangle, Sparkles, ArrowUpRight } from "lucide-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { techIconMap } from "../constants/techIcons.jsx";
import ProjectTimeline from "../components/projects/ProjectTimeline.jsx";
import { useRef } from "react";



export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const projectRef = useRef(null);

  const allCombinedProjects = [...featuredProjects, ...allProjects];
  const projectIndex = allCombinedProjects.findIndex((p) => p.slug === slug);
  const project = allCombinedProjects[projectIndex];

  if (!project) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-32">
        <p className="text-[#5F6368]">Project not found.</p>
      </main>
    );
  }

  const prevProject = allCombinedProjects[projectIndex - 1];
  const nextProject = allCombinedProjects[projectIndex + 1];

  return (
    <main className="bg-[#F6F6F4]">
      <div ref={projectRef} className="max-w-4xl mx-auto px-4 sm:px-6 py-24 sm:py-28">

        <ProjectTimeline
          timeline={project.timeline}
          containerRef={projectRef}
        />
        {/* ================= HEADER ================= */}
        <header className="mb-10 max-w-3xl">
          <span
            className="
              inline-block mb-4
              px-4 py-1.5 rounded-full
              text-xs font-medium
              bg-[#EAF5F5] text-[#3E8F90]
            "
          >
            {project.primaryTag}
          </span>

          <h1 className="text-3xl sm:text-4xl font-semibold text-[#0B0B0C] mb-4">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-[#5F6368] leading-relaxed">
            {project.description}
          </p>
        </header>

        {/* ================= LINKS ================= */}
        {(project.liveUrl || project.githubUrl) && (
          <section className="mb-10 flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-6 py-3 rounded-full
                  bg-[#0B0B0C] text-white
                  text-sm font-medium
                  hover:opacity-90 transition
                "
              >
                View Live
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-6 py-3 rounded-full
                  border border-[#E6E6E3]
                  text-sm font-medium
                  text-[#0B0B0C]
                  hover:bg-[#F0F0EE] transition
                "
              >
                View Source
              </a>
            )}
          </section>
        )}

        {/* ================= HERO IMAGE ================= */}
        {project.coverImage && (
          <figure className="mb-10">
            <div
              className="
                rounded-[28px]
                overflow-hidden
                bg-white
                border border-[#E6E6E3]
                shadow-[0_20px_40px_rgba(0,0,0,0.06)]
              "
            >
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            {project.coverCaption && (
              <figcaption className="mt-3 text-sm text-[#6B6F76]">
                {project.coverCaption}
              </figcaption>
            )}
          </figure>
        )}

        {/* ================= CONTENT ================= */}

        <DetailSection title="About This Project">
          {project.overview}
        </DetailSection>

        <section className="mb-20 space-y-12">

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch">
            <ListSection
              title="Services"
              items={project.services}
              icon="dot"
            />
            <ListSection
              title="Deliverables"
              items={project.deliverables}
              icon="check"
            />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch">
            <ListSection
              title="Challenges"
              items={project.challenges}
              icon="warning"
            />
            <ListSection
              title="Solutions"
              items={project.solutions}
              icon="spark"
            />
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch">
            <ListSection
              title="Impact & Results"
              items={project.impact}
              icon="arrow"
            />
            <div /> {/* intentional empty cell for balance */}
          </div>

        </section>

        {/* ================= TECH STACK ================= */}
        {project.stack?.length > 0 && (
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-[#0B0B0C] mb-6">
              Technology stack
            </h2>

            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech) => (
                <div
                  key={tech}
                  className="
            inline-flex items-center gap-2
            px-4 py-2
            rounded-full
            bg-white
            border border-[#E6E6E3]
            text-sm text-[#5F6368]
          "
                >
                  <span className="text-lg">
                    {techIconMap[tech]}
                  </span>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ================= NAVIGATION ================= */}
        <section className="mt-10 border-t border-[#E6E6E3] pt-10">
          <div className="mx-auto max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Previous */}
            {prevProject ? (
              <button
                onClick={() => navigate(`/projects/${prevProject.slug}`)}
                className="
          group
          flex flex-col gap-4
          rounded-2xl
          border border-[#E6E6E3]
          bg-white
          p-6
          text-left
          transition
          hover:bg-[#F6F6F4]
          hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]

        "
              >
                <span className="text-xs uppercase tracking-wide text-[#6B6F76]">
                  Previous project
                </span>

                <div className="flex items-center gap-4">
                  <span
                    className="
              flex h-9 w-9 items-center justify-center
              rounded-full
              bg-[#0B0B0C]
              text-white
              transition-transform
              group-hover:-translate-x-1
            "
                  >
                    <ArrowLeft size={16} />
                  </span>

                  <span className="text-[#0B0B0C] font-medium">
                    {prevProject.title}
                  </span>
                </div>
              </button>
            ) : (
              <div />
            )}

            {/* Next */}
            {nextProject && (
              <button
                onClick={() => navigate(`/projects/${nextProject.slug}`)}
                className="
          group
          flex flex-col gap-4
          rounded-2xl
          border border-[#E6E6E3]
          bg-white
          p-6
          text-right
          transition
          hover:bg-[#F6F6F4]
          hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]

        "
              >
                <span className="text-xs uppercase tracking-wide text-[#6B6F76]">
                  Next project
                </span>

                <div className="flex items-center justify-end gap-4">
                  <span className="text-[#0B0B0C] font-medium">
                    {nextProject.title}
                  </span>

                  <span
                    className="
              flex h-9 w-9 items-center justify-center
              rounded-full
              bg-[#0B0B0C]
              text-white
              transition-transform
              group-hover:translate-x-1
            "
                  >
                    <ArrowRight size={16} />
                  </span>
                </div>
              </button>
            )}

          </div>
        </section>

      </div>
    </main>
  );
}

/* ================= HELPERS ================= */

function DetailSection({ title, children }) {
  if (!children) return null;

  return (
    <section className="mb-16 max-w-3xl">
      <h2
        className="
          text-2xl font-bold tracking-wide
          text-[#141414]
          mb-3
        "
      >
        {title}
      </h2>

      <p className="text-[#3A3D42] leading-[1.8] text-base sm:text-lg">
        {children}
      </p>
    </section>
  );
}

function ListSection({ title, items, icon = "dot" }) {
  if (!items || items.length === 0) return null;

  const iconMap = {
    dot: CircleCheck,
    check: Check,
    warning: AlertTriangle,
    spark: Sparkles,
    arrow: ArrowUpRight,
  };

  const Icon = iconMap[icon];

  return (
    <section className="h-full max-w-3xl">
      <h2 className="text-xl font-bold tracking-wide text-[#202020] mb-4">
        {title}
      </h2>

      <ul className="space-y-2">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-3 text-[#3A3D42] leading-relaxed"
          >
            <Icon
              size={16}
              className="mt-1 shrink-0 text-[#4FA3A5]"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
