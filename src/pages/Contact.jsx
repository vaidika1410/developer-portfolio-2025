import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  HiMail,
  HiLocationMarker,
  HiBriefcase,
} from "react-icons/hi";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!formRef.current) {
      console.error("Form ref not found");
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("EmailJS success:", result.text);
      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <main className="bg-[#F6F6F4]">
      <div className="page-wrapper max-w-4xl mx-auto px-5 sm:px-6">

        {/* Header */}
        <header className="mb-16 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-semibold text-[#0B0B0C]">
            Let’s work together
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#6B6F76] max-w-xl">
            I’m always open to discussing new opportunities, collaborations,
            or interesting ideas. Feel free to reach out.
          </p>
        </header>

        {/* Contact methods */}
        <section className="space-y-6">

          {/* Email */}
          <div className="group rounded-[24px] bg-white border border-[#E6E6E3] hover:border-[#4fa4a595] transition-all duration-500 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div className="flex items-center gap-4">
              <HiMail className="text-[#4FA3A5] text-xl mt-0.5 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-105
              "
              />

              <div>
                <p className="text-sm text-[#6B6F76]">Email</p>
                <p className="text-base font-medium text-[#0B0B0C]">
                  vaidikakaul20@gmail.com
                </p>
              </div>
            </div>


            <a
              href="mailto:vaidikakaul20@gmail.com"
              className="inline-flex justify-center px-5 py-2.5 rounded-full bg-[#0B0B0C] text-white text-sm font-medium hover:opacity-90 transition"
            >
              Send email
            </a>
          </div>

          {/* LinkedIn */}
          <div className="group rounded-[24px] bg-white border border-[#E6E6E3] hover:border-[#4fa4a595] transition-all duration-500 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <FaLinkedin className="text-[#4FA3A5] text-xl mt-0.5 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-105" />

              <div>
                <p className="text-sm text-[#6B6F76]">LinkedIn</p>
                <p className="text-base font-medium text-[#0B0B0C]">
                  Connect with me professionally
                </p>
              </div>
            </div>


            <a
              href="https://www.linkedin.com/in/vaidika-kaul-321b22316/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center px-5 py-2.5 rounded-full bg-white border border-[#E6E6E3] text-sm font-medium text-[#0B0B0C] hover:bg-[#F0F0EE] transition"
            >
              Open LinkedIn
            </a>
          </div>

          {/* GitHub */}
          <div className="group rounded-[24px] bg-white border border-[#E6E6E3] hover:border-[#4fa4a595] transition-all duration-500 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">


            <div className="flex items-center gap-4">
              <FaGithub className="text-[#4FA3A5] text-xl mt-0.5 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-105" />

              <div>
                <p className="text-sm text-[#6B6F76]">GitHub</p>
                <p className="text-base font-medium text-[#0B0B0C]">
                  Explore my work & projects
                </p>
              </div>
            </div>


            <a
              href="https://github.com/vaidika1410"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center px-5 py-2.5 rounded-full bg-white border border-[#E6E6E3] text-sm font-medium text-[#0B0B0C] hover:bg-[#F0F0EE] transition"
            >
              View GitHub
            </a>
          </div>

          {/* X (Twitter) */}
          <div className="group rounded-[24px] bg-white border border-[#E6E6E3] hover:border-[#4fa4a595] transition-all duration-500 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <FaXTwitter
                className="
        text-[#4FA3A5] text-xl mt-0.5
        transition-transform duration-300 ease-out
        group-hover:-translate-y-0.5
        group-hover:scale-105
      "
              />
              <div>
                <p className="text-sm text-[#6B6F76]">X (Twitter)</p>
                <p className="text-base font-medium text-[#0B0B0C]">
                  Follow my updates & thoughts
                </p>
              </div>
            </div>

            <a
              href="https://x.com/Vaidika10_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center px-5 py-2.5 rounded-full bg-white border border-[#E6E6E3] text-sm font-medium text-[#0B0B0C] hover:bg-[#F0F0EE] transition"
            >
              Open X
            </a>
          </div>

        </section>

        {/* Location & Availability */}
        <section className="mt-16">
          <div className="grid gap-6 sm:grid-cols-2">

            <div className="group rounded-[24px] bg-white border border-[#E6E6E3] p-5 sm:p-6">
              <HiLocationMarker className="text-[#4FA3A5] text-xl mt-0.5 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-105 mb-4" />

              <p className="text-sm text-[#6B6F76] mb-2">Location</p>
              <p className="text-base font-medium text-[#0B0B0C]">
                Indore, India
              </p>
            </div>

            <div className="group rounded-[24px] bg-white border border-[#E6E6E3] p-5 sm:p-6">
              <HiBriefcase className="text-[#4FA3A5] text-xl mt-0.5 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-105 mb-4" />

              <p className="text-sm text-[#6B6F76] mb-2">Availability</p>
              <p className="text-base font-medium text-[#0B0B0C] mb-2">
                Open to opportunities
              </p>
              <p className="text-sm text-[#6B6F76] leading-relaxed">
                Available for freelance and full-time roles.
                Interested in SaaS, GenAI, and scalable web applications.
              </p>
            </div>

          </div>
        </section>

        {/* Leave a Message */}
        <section className="mt-20 rounded-[24px] p-8 border border-[#0000003a]">
          <div className="max-w-4xl">

            <h2 className="text-2xl font-medium text-[#0B0B0C] mb-4">
              Leave a message
            </h2>

            <p className="text-[#6B6F76] mb-8">
              Have a project in mind or just want to say hi?
              Fill out the form below and I’ll get back to you.
            </p>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm text-[#6B6F76] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  required
                  className="w-full rounded-[18px] border border-[#E6E6E3] bg-white px-4 py-3 text-sm text-[#0B0B0C] focus:outline-none focus:border-[#4FA3A5]"
                />
              </div>

              <div>
                <label className="block text-sm text-[#6B6F76] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  required
                  className="w-full rounded-[18px] border border-[#E6E6E3] bg-white px-4 py-3 text-sm text-[#0B0B0C] focus:outline-none focus:border-[#4FA3A5]"
                />
              </div>

              <div>
                <label className="block text-sm text-[#6B6F76] mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-[18px] border border-[#E6E6E3] bg-white px-4 py-3 text-sm text-[#0B0B0C] focus:outline-none focus:border-[#4FA3A5] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="
  w-full sm:w-auto
  px-6 py-3
  rounded-full
  bg-[#0B0B0C]
  text-white
  text-sm font-medium
  hover:opacity-90 transition
  disabled:opacity-60
"

              >
                {status === "sending" ? "Sending..." : "Send message"}
              </button>

              {status === "success" && (
                <p className="text-sm text-[#4FA3A5]">
                  Message sent successfully. I’ll get back to you soon.
                </p>
              )}

              {status === "error" && (
                <p className="text-sm text-red-500">
                  Something went wrong. Please try again later.
                </p>
              )}
            </form>
          </div>
        </section>

        {/* Closing note */}
        <footer className="mt-10">
          <p className="text-sm text-[#6B6F76]">
            Prefer async communication? Email works best.
            I usually respond within a day.
          </p>
        </footer>

      </div>
    </main>
  );
}
