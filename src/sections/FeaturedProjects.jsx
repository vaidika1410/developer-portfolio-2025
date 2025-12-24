import ProjectCard from "../components/projects/ProjectCard";
import { featuredProjects } from "../data/projects";

export default function FeaturedProjects() {
  return (
    <section className="section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <header className="mb-14 mt-10">
          <h2 className="text-2xl font-bold text-[#0B0B0C]">
            Featured projects
          </h2>
          <p className="mt-3 text-[#5F6368] max-w-xl">
            A selection of projects that reflect my interests in web development,
            AI, and scalable systems.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
