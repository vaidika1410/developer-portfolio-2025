import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-sm transition ${isActive
      ? "text-[#4FA3A5]"
      : "text-[#6B6F76] hover:text-[#0B0B0C]"
    }`;

  return (
    <>
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-[#F6F6F4]/0 font-[font2] font-semibold">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4">
          <div
            className="
              flex items-center justify-between
              rounded-full
              bg-[#ffffff7e]
              border border-[#E6E6E3]
              px-4 sm:px-6 py-3 backdrop-blur
            "
          >
            {/* Logo */}
            <div className="h-[6vh] w-[6vh] overflow-hidden">
              <img loading="eager" fetchpriority="high" className="h-full w-full object-cover object-top rounded-full" src="/ProfilePicture.jpg" alt="Vaidika" />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              <NavLink to="/" className={linkClass}>
                Home
              </NavLink>
              <NavLink to="/projects" className={linkClass}>
                Projects
              </NavLink>
              <NavLink to="/about" className={linkClass}>
                About
              </NavLink>
              <NavLink to="/contact" className={linkClass}>
                Contact
              </NavLink>
            </nav>

            {/* Desktop CTA */}
            <NavLink
              to="/contact"
              className="
                hidden md:inline-flex
                px-5 py-2
                rounded-full
                bg-[#0B0B0C]
                text-white
                text-sm font-medium
                hover:opacity-90 transition
              "
            >
              Get in Touch
            </NavLink>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="
    md:hidden
    relative
    w-9 h-9
    rounded-full
    border border-[#E6E6E3]
    flex items-center justify-center
  "
              aria-label="Toggle menu"
            >
              {/* Top bar */}
              <motion.span
                initial={false}
                animate={{
                  rotate: open ? 45 : 0,
                  y: open ? 0 : -6,
                }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="
      absolute
      w-5 h-[2px]
      bg-[#0B0B0C]
      rounded
      origin-center
    "
              />

              {/* Middle bar */}
              <motion.span
                initial={false}
                animate={{
                  opacity: open ? 0 : 1,
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="
      absolute
      w-5 h-[2px]
      bg-[#0B0B0C]
      rounded
      origin-center
    "
              />

              {/* Bottom bar */}
              <motion.span
                initial={false}
                animate={{
                  rotate: open ? -45 : 0,
                  y: open ? 0 : 6,
                }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="
      absolute
      w-5 h-[2px]
      bg-[#0B0B0C]
      rounded
      origin-center
    "
              />
            </button>

          </div>
        </div>
      </header>

      {/* FLOATING MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="
          fixed inset-0 z-40
          bg-[#E6F3F3]/80 backdrop-blur-sm
        "
              onClick={() => setOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -14, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -14, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="
          fixed z-50
          top-24 left-1/2 -translate-x-1/2
          w-[92%] max-w-sm
          rounded-3xl
          bg-white/80
          backdrop-blur-xl
          border border-[#E6E6E3]
          px-6 py-6
          shadow-[0_30px_60px_rgba(0,0,0,0.12)]
        "
            >
              <nav className="flex flex-col items-center w-full">

                {/* Primary links */}
                <div className="w-full space-y-2">
                  <NavLink
                    to="/"
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `
                  w-full block text-center
                  px-5 py-3 rounded-full
                  text-sm font-medium transition
                  ${isActive
                        ? "bg-[#F6F6F4] text-[#0B0B0C]"
                        : "text-[#6B6F76] hover:bg-[#F6F6F4] hover:text-[#0B0B0C]"
                      }
                `
                    }
                  >
                    Home
                  </NavLink>

                  <NavLink
                    to="/projects"
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `
                  w-full block text-center
                  px-5 py-3 rounded-full
                  text-sm font-medium transition
                  ${isActive
                        ? "bg-[#F6F6F4] text-[#0B0B0C]"
                        : "text-[#6B6F76] hover:bg-[#F6F6F4] hover:text-[#0B0B0C]"
                      }
                `
                    }
                  >
                    Projects
                  </NavLink>

                  <NavLink
                    to="/about"
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `
                  w-full block text-center
                  px-5 py-3 rounded-full
                  text-sm font-medium transition
                  ${isActive
                        ? "bg-[#F6F6F4] text-[#0B0B0C]"
                        : "text-[#6B6F76] hover:bg-[#F6F6F4] hover:text-[#0B0B0C]"
                      }
                `
                    }
                  >
                    About
                  </NavLink>

                  <NavLink
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `
                  w-full block text-center
                  px-5 py-3 rounded-full
                  text-sm font-medium transition
                  ${isActive
                        ? "bg-[#F6F6F4] text-[#0B0B0C]"
                        : "text-[#6B6F76] hover:bg-[#F6F6F4] hover:text-[#0B0B0C]"
                      }
                `
                    }
                  >
                    Contact
                  </NavLink>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-[#E6E6E3] my-5" />

                {/* CTA */}
                <NavLink
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="
              w-full
              px-5 py-3
              rounded-full
              bg-[#0B0B0C]
              text-white
              text-sm font-medium
              text-center
              hover:opacity-90 transition
            "
                >
                  Get in Touch
                </NavLink>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>


    </>
  );
}
