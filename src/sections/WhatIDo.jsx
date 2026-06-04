import Accordion from "../components/ui/Accordian";

export default function WhatIDo() {
  const items = [
    {
      title: "Product-Focused Engineering",
      description:
        "I build software with a strong emphasis on user experience, business impact, and long-term maintainability, turning ideas into production-ready products.",
    },
    {
      title: "AI-Enabled Applications",
      description:
        "I integrate LLMs, machine learning, and intelligent workflows into products to automate processes, enhance decision-making, and deliver meaningful user value.",
    },
    {
      title: "Full-Stack System Design",
      description:
        "From responsive interfaces to secure backend services and data architectures, I enjoy designing systems that remain scalable, reliable, and easy to evolve.",
    },
    {
      title: "Continuous Learning & Innovation",
      description:
        "I actively explore emerging technologies, AI tooling, and modern engineering practices to build better products and stay ahead of industry trends.",
    },
    {
      title: "Research & Exploration",
      description:
        "From machine learning and anomaly detection to generative AI and modern developer tooling, I enjoy exploring new domains and applying them to solve meaningful problems."
    },
  ];

  return (
    <section className="py-15 bg-[#F6F6F4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-[#0B0B0C] mb-5">
          What Drives My Work
        </h2>

        <Accordion items={items} />
      </div>
    </section>
  );
}
