import Accordion from "../components/ui/Accordian";

export default function WhatIDo() {
  const items = [
    {
      title: "Web Application Development",
      description:
        "I design and build modern web applications with a strong focus on usability, performance, and maintainable code.",
    },
    {
      title: "AI-Powered Web Solutions",
      description:
        "I integrate AI and machine learning into web products to create intelligent, data-driven features that solve real-world problems.",
    },
    {
      title: "Research & Exploration",
      description:
        "I actively research emerging technologies, machine learning concepts, and system design patterns to stay ahead and build better solutions.",
    },
    {
      title: "Scalable & Clean Architecture",
      description:
        "I enjoy designing scalable, clean architectures that are easy to extend, debug, and maintain as products grow.",
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
