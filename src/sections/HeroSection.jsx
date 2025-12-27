import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";

export default function HeroSection() {
  return (
    <section className="pt-28 sm:pt-32 pb-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-start">

          {/* Profile Image */}
          <div
            className="
    shrink-0
    h-28 w-28
    sm:h-32 sm:w-32
    md:h-28 md:w-28
    rounded-full
    overflow-hidden
    transition-all duration-300 ease-out
    hover:scale-[1.04]
    hover:-translate-y-0.5
    hover:shadow-[0_12px_30px_rgba(0,0,0,0.15)]
  "
          >
            <img
              className="h-full w-full object-cover object-top"
              src="/ProfilePicture.jpg"
              alt="Vaidika Kaul"
              loading="eager"
              fetchpriority="high"
            />
          </div>


          {/* Text Content */}
          <div className="text-center sm:text-left">
            <h2
              className="
        text-lg sm:text-xl
        font-bold
        text-[#0B0B0C]
        leading-tight
      "
            >
              Hi, I am
            </h2>

            {/* Name */}
            <h1
              className="
        text-3xl sm:text-4xl
        font-bold
        font-[font2]
        text-[#0B0B0C]
        leading-tight
      "
            >
              Vaidika Kaul
            </h1>

            {/* Tagline */}
            <p
              className="
        mt-2
        text-base sm:text-lg
        font-medium
        text-[#0B0B0C]
      "
            >
              Building <span className="text-[#4a989a]">scalable web apps</span> and{" "}
              <span className="text-[#4a989a]">AI-powered products</span>
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

        <section id="connect" className="connect-section mt-5">
          <div className="home-connect">
            <a
              href="https://www.linkedin.com/in/vaidika-kaul-321b22316/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/vaidika1410"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://x.com/Vaidika10_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
            >
              <FaXTwitter />
            </a>

            <a
              href="mailto:vaidikakaul20@gmail.com"
              aria-label="Email"
            >
              <HiMail />
            </a>
          </div>
        </section>


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
