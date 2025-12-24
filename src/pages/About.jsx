export default function About() {
  return (
    <main className="bg-[#F6F6F4]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-28 sm:py-32">

        {/* Intro */}
        <header className="mb-20">
          <h1 className="text-3xl sm:text-4xl font-semibold text-[#0B0B0C]">
            About me
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[#6B6F76] max-w-2xl leading-relaxed">
            I’m a developer who enjoys building thoughtful web applications and
            AI-powered products. I care deeply about clean architecture,
            scalability, and creating systems that are easy to reason about
            — both for users and developers.
          </p>
        </header>

        {/* What I do */}
        <section className="mb-20">
          <h2 className="text-xl font-medium text-[#0B0B0C] mb-6">
            What I do
          </h2>

          <div className="space-y-6">
            <div className="rounded-[24px] bg-white border border-[#E6E6E3] p-6">
              <h3 className="text-base font-medium text-[#0B0B0C] mb-2">
                Web application development
              </h3>
              <p className="text-sm text-[#6B6F76] leading-relaxed">
                I build modern, responsive web applications with a strong
                focus on usability, performance, and maintainable frontend
                architecture.
              </p>
            </div>

            <div className="rounded-[24px] bg-white border border-[#E6E6E3] p-6">
              <h3 className="text-base font-medium text-[#0B0B0C] mb-2">
                AI integration in web products
              </h3>
              <p className="text-sm text-[#6B6F76] leading-relaxed">
                I enjoy integrating AI and machine learning capabilities into
                web applications — turning complex models into practical,
                user-friendly features.
              </p>
            </div>

            <div className="rounded-[24px] bg-white border border-[#E6E6E3] p-6">
              <h3 className="text-base font-medium text-[#0B0B0C] mb-2">
                Scalable & clean system design
              </h3>
              <p className="text-sm text-[#6B6F76] leading-relaxed">
                I care about clean code, clear data flow, and scalable
                architecture. I prefer building systems that can grow
                without becoming hard to maintain.
              </p>
            </div>
          </div>
        </section>

        {/* Interests */}
        <section className="mb-20">
          <h2 className="text-xl font-medium text-[#0B0B0C] mb-6">
            Interests
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              "Web development",
              "AI & Machine Learning",
              "SaaS products",
              "System design",
              "Clean architecture",
              "Tech research",
            ].map((item) => (
              <span
                key={item}
                className="
                  px-4 py-2
                  rounded-full
                  bg-white
                  border border-[#E6E6E3]
                  text-sm
                  text-[#0B0B0C]
                "
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* Philosophy */}
        <section className="mb-24">
          <h2 className="text-xl font-medium text-[#0B0B0C] mb-6">
            How I think
          </h2>

          <p className="text-base text-[#6B6F76] leading-relaxed max-w-2xl">
            I believe good software is built at the intersection of clarity,
            simplicity, and long-term thinking. I value learning, iteration,
            and writing code that other developers can easily understand and
            extend.
          </p>
        </section>

        {/* CTA */}
        <section>
          <div className="rounded-[28px] bg-white border border-[#E6E6E3] p-8 sm:p-10">
            <h3 className="text-xl font-medium text-[#0B0B0C] mb-4">
              Want to build something together?
            </h3>

            <p className="text-[#6B6F76] mb-6 max-w-xl">
              I’m open to freelance projects, full-time opportunities, and
              interesting collaborations.
            </p>

            <a
              href="/contact"
              className="
                inline-flex
                px-6 py-3
                rounded-full
                bg-[#0B0B0C]
                text-white
                text-sm font-medium
                hover:opacity-90 transition
              "
            >
              Get in touch
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}
