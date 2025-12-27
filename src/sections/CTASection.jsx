import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="pb-10 mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        <div
          className="
            relative
            overflow-hidden
            rounded-[28px] sm:rounded-[32px]
            bg-gradient-to-b from-white to-[#4fa4a53b]
            border border-[#E2E3E0]
            p-8 sm:p-12
            shadow-[0_18px_45px_rgba(0,0,0,0.08)]
          "
        >
          {/* Subtle glow accent */}
          <div
            className="
              pointer-events-none
              absolute -top-24 -right-24
              h-64 w-64
              rounded-full
              bg-[#4FA3A5]/10
              blur-3xl
            "
          />

          <div className="relative z-10 max-w-2xl">

            {/* Title */}
            <h2
              className="
              md:text-2xl
                text2xl sm:text-3xl
                font-bold
                text-[#0B0B0C]
                mb-4
                flex items-center gap-2
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket-icon lucide-rocket"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
              </svg>
              Let’s work together!
            </h2>

            {/* Description */}
            <p
              className="
                text-base sm:text-lg
                text-[#5F6368]
                leading-relaxed
                mb-8
              "
            >
              I’m open to freelance projects, full-time opportunities, and
              collaborations focused on building thoughtful web applications
              and AI-powered products.
            </p>

            {/* CTA Button */}
            <button
              onClick={() => navigate("/contact")}
              className="
                inline-flex gap-2 items-center justify-center
                px-7 py-3.5
                rounded-full
                bg-[#0B0B0C]
                text-white
                text-sm sm:text-base
                font-medium
                shadow-[0_6px_18px_rgba(0,0,0,0.18)]
                hover:shadow-[0_10px_26px_rgba(0,0,0,0.22)]
                hover:-translate-y-[1px]
                transition-all duration-300
              "
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>
              <h2 className="shrink-0">Contact me</h2>
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}
