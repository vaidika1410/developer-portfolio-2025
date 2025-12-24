import { useNavigate } from "react-router-dom";

export default function ProjectCard({ project }) {
  const navigate = useNavigate();
  const {
    title,
    description,
    slug,
    liveUrl,
    githubUrl,
    tags = [],
    coverImage,
  } = project;

  return (
    <div
      onClick={() => navigate(`/projects/${slug}`)}
      className="
        group cursor-pointer
        rounded-[24px]
        bg-white
        border border-[#E6E6E3]
        p-4
        transition-all duration-300 ease-out
        shadow-[0_8px_24px_rgba(0,0,0,0.06)]
        hover:-translate-y-[3px]
        hover:shadow-[0_18px_40px_rgba(0,0,0,0.10)]
      "
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-[15px] mb-4">
        <img
          src={coverImage}
          alt={title}
          className="
            h-44 sm:h-48 w-full
            object-cover
            transition-transform duration-500
            group-hover:scale-[1.04]
          "
        />

        {/* Tags on image */}
        {tags.length > 0 && (
          <div className="absolute bottom-3 left-3 flex gap-2">
            {tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="
                  px-3 py-1
                  text-[11px]
                  rounded-full
                  bg-white/90
                  text-[#0B0B0C]
                  backdrop-blur
                "
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="px-1">
        <h3 className="text-base sm:text-lg font-semibold text-[#0B0B0C] mb-1">
          {title}
        </h3>

        <p className="text-sm text-[#5F6368] leading-relaxed mb-4 h-20">
          {description}
        </p>

        {/* Footer */}
        <div className="mt-5">
          <div className="flex gap-2">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="
                  px-4 py-2
                  text-xs sm:text-sm
                  rounded-full
                  bg-[#0B0B0C]
                  text-white
                  hover:opacity-90
                  transition
                  flex items-center gap-2
                "
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-arrow-out-up-right-icon lucide-square-arrow-out-up-right"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/></svg>
                <h3>Live</h3>
              </a>
            )}

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="
                  px-4 py-2
                  text-xs sm:text-sm
                  rounded-full
                  border border-[#E6E6E3]
                  text-[#0B0B0C]
                  hover:bg-[#F0F0EE]
                  transition
                  flex items-center gap-2
                "
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                <h3>GitHub</h3>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
