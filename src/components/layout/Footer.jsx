import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-[#F6F6F4]">
      <div
        className="
          w-full
          mt-5
          px-4 sm:px-6
          py-1 sm:py-16
          border-t border-[#E6E6E3]
          flex items-center justify-center
          sm:flex-row sm:items-center sm:justify-between
        "
      >
          <section id="connect" className="connect-section w-full flex items-center justify-center">
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
        </div>
    </footer>
  );
}
