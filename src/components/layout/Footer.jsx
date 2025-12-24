export default function Footer() {
  return (
    <footer className="bg-[#F6F6F4]">
      <div
        className="
          max-w-5xl mx-auto
          mt-5
          px-4 sm:px-6
          py-1 sm:py-16
          border-t border-[#E6E6E3]
        "
      >
        <div
          className="
            flex flex-col gap-8
            sm:flex-row sm:items-center sm:justify-between
          "
        >
          {/* Left */}
          <div className="text-sm text-[#6B6F76]">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#0B0B0C] font-medium">
              Vaidika Kaul
            </span>
            . All rights reserved.
          </div>

          {/* Right links */}
          <div
            className="
              flex flex-wrap gap-6
              text-sm
            "
          >
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-[#6B6F76]
                hover:text-[#4FA3A5]
                transition
              "
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-[#6B6F76]
                hover:text-[#4FA3A5]
                transition
              "
            >
              LinkedIn
            </a>

            <a
              href="mailto:your@email.com"
              className="
                text-[#6B6F76]
                hover:text-[#4FA3A5]
                transition
              "
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
