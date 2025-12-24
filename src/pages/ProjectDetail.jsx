import { useParams, useNavigate } from "react-router-dom";
import { featuredProjects, allProjects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-24 sm:py-28">

        {/* ================= HEADER ================= */}
        <header className="mb-16 max-w-3xl">

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

        {/* ================= HERO IMAGE ================= */}
        {project.coverImage && (
          <figure className="mb-20">
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

        <DetailSection title="Overview">
          {project.overview}
        </DetailSection>

        <ListSection title="Services" items={project.services} />

        <ListSection title="Deliverables" items={project.deliverables} />

        <ListSection title="Challenges" items={project.challenges} />

        <ListSection title="Solutions" items={project.solutions} />

        <ListSection title="Impact & Results" items={project.impact} />

        {/* ================= TECH STACK ================= */}
        {project.stack?.length > 0 && (
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-[#0B0B0C] mb-6">
              Technology stack
            </h2>

            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="
                    px-4 py-2
                    rounded-full
                    text-sm
                    bg-white
                    border border-[#E6E6E3]
                    text-[#5F6368]
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* ================= LINKS ================= */}
        {(project.liveUrl || project.githubUrl) && (
          <section className="mb-24 flex flex-wrap gap-4">
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

        {/* ================= NAVIGATION ================= */}
        <section className="flex justify-between text-sm text-[#5F6368]">
          {prevProject ? (
            <button
              onClick={() => navigate(`/projects/${prevProject.slug}`)}
              className="hover:underline"
            >
              ← {prevProject.title}
            </button>
          ) : <span />}

          {nextProject && (
            <button
              onClick={() => navigate(`/projects/${nextProject.slug}`)}
              className="hover:underline"
            >
              {nextProject.title} →
            </button>
          )}
        </section>

      </div>
    </main>
  );
}

/* ================= HELPERS ================= */

function DetailSection({ title, children }) {
  if (!children) return null;

  return (
    <section className="mb-20 max-w-3xl">
      <h2 className="text-2xl font-semibold text-[#0B0B0C] mb-4">
        {title}
      </h2>
      <p className="text-[#5F6368] leading-relaxed">
        {children}
      </p>
    </section>
  );
}

function ListSection({ title, items }) {
  if (!items || items.length === 0) return null;

  return (
    <section className="mb-20">
      <h2 className="text-2xl font-semibold text-[#0B0B0C] mb-6">
        {title}
      </h2>

      <ul className="space-y-4">
        {items.map((item, i) => (
          <li
            key={i}
            className="
              bg-white
              border border-[#E6E6E3]
              rounded-[20px]
              p-5
              text-[#5F6368]
            "
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
