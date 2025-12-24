import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <div
            key={item.title}
            onClick={() => toggle(index)}
            className="
              rounded-[28px]
              bg-white
              border border-[#E6E6E3]
              px-6 py-5
              cursor-pointer
              transition-shadow
              hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)]
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-base font-medium text-[#0B0B0C]">
                {item.title}
              </h3>

              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className={`text-xl ${isOpen ? "text-[#4FA3A5]" : "text-[#8A8E95]"
                  }`}
              >
                +
              </motion.span>


            </div>

            {/* Animated Content */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.4, 0, 0.2, 1], // smooth SaaS easing
                  }}
                  className="overflow-hidden"
                >
                  <p className="mt-4 text-sm leading-relaxed text-[#6B6F76] max-w-xl">
                    {item.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
