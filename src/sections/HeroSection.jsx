import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="pt-28 sm:pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        <div className="flex gap-6 items-center">
          <div className="h-[16vh] w-[16vh] overflow-hidden">
            <img className="h-full w-full object-cover object-top rounded-full" src="public/ProfilePicture.jpg" alt="" />
          </div>
          <div>
            <h2
              className="sm:text-4xl md:text-xl
        font-bold
        text-[#0B0B0C]
        leading-tight
        ">
              Hi, I am
            </h2>

            {/* Name */}
            <h1 className="
      text-3xl sm:text-4xl
      font-bold
      font-[font2]
      text-[#0B0B0C]
      leading-tight
    ">
              Vaidika Kaul
            </h1>
            {/* Tagline */}
            <p className="
      mt-2
      text-lg
      font-medium
      text-[#0B0B0C]
    ">
              Building <span className="text-[#4a989a]">scalable web apps</span> and <span className="text-[#4a989a]">AI-powered products</span>
            </p>

          </div>
        </div>



        {/* Punchline */}
        <p className="
      mt-4
      max-w-xl
      text-base sm:text-lg
      text-[#5F6368]
      leading-relaxed
    ">
          I enjoy crafting clean, scalable systems at the intersection
          of web development and artificial intelligence.
        </p>

        {/* Actions */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">

          {/* Primary */}
          <a
            href="/projects"
            className="
          inline-flex items-center justify-center
          px-6 py-3
          rounded-full
          bg-[#0B0B0C]
          text-white
          text-sm font-medium
          shadow-[0_4px_12px_rgba(0,0,0,0.12)]
          hover:shadow-[0_6px_16px_rgba(0,0,0,0.16)]
          hover:-translate-y-[1px]
          transition-all duration-300
        "
          >
            View projects
          </a>

          {/* Secondary */}
          <a
            href="/contact"
            className="
          inline-flex items-center justify-center
          px-6 py-3
          rounded-full
          bg-white
          border border-[#E6E6E3]
          text-sm font-medium
          text-[#0B0B0C]
          hover:bg-[#F0F0EE]
          transition
        "
          >
            Let’s work together
          </a>

        </div>

      </div>
    </section>

  );
}
