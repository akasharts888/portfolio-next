"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Certifications", path: "/certifications" },
  { name: "Contact", path: "/contact" },
];
export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  // Add scroll effect to navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 backdrop-blur-xl transition-all duration-300 ${scrolled ? 'bg-black/70 border-b border-white/10' : 'bg-black/40'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mt-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="text-xl md:text-2xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text tracking-tight"
            >
              <Link href="/">Akash.dev</Link>
            </motion.div>
            <div className="hidden md:flex items-center gap-6">

              <ul className="flex items-center gap-6">
                {links.map((l) => {
                  const active = pathname === l.path;
                  return (
                    <motion.li
                      key={l.path}
                      whileHover={{ scale: 1.15 }}
                      className="relative group"
                    >
                      <Link
                        href={l.path}
                        className={`transition font-medium ${
                          active ? "text-white" : "text-zinc-300 hover:text-white"
                        }`}
                      >
                        {l.name}
                        <span
                          className={`absolute left-0 -bottom-1 h-[2px] rounded-full transition-all duration-500 bg-gradient-to-r from-cyan-400 to-purple-500 ${
                            active ? "w-full" : "w-0 group-hover:w-full"
                          }`}
                        />
                      </Link>
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-500 group-hover:w-full"></span>
                    </motion.li>
                  )
                })}
              </ul>
              {/* Resume Button (Desktop) */}
              <motion.a
                href="https://drive.google.com/file/d/10Ew83Bx0_3F8MQK3yzThgdVlyylNblTV/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium shadow hover:shadow-lg transition"
              >
                Resume
              </motion.a>
            </div>
            {/* Mobile hamburger */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="md:hidden inline-flex items-center justify-center rounded-xl p-2 bg-white/5 border border-white/10"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 relative">
                <span className={`block absolute h-0.5 w-5 bg-zinc-200 transition-all duration-300 ${open ? 'rotate-45 top-1.5' : 'top-0'}`}></span>
                <span className={`block absolute h-0.5 w-5 bg-zinc-200 top-1.5 transition-all duration-300 ${open ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block absolute h-0.5 w-5 bg-zinc-200 transition-all duration-300 ${open ? '-rotate-45 top-1.5' : 'top-3'}`}></span>
              </div>
            </motion.button>
          </div>

          {/* Mobile sheet */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden bg-black/80 backdrop-blur-xl rounded-xl mt-2 border border-white/10"
              >
                <ul className="flex flex-col gap-1 py-2">
                  {links.map((l) => {
                    const active = pathname === l.path;
                    return (
                      <motion.li
                        key={l.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          href={l.path}
                          className={`block w-full px-4 py-3 transition ${
                            active
                              ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white"
                              : "text-zinc-300 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          {l.name}
                        </Link>
                      </motion.li>
                    );
                  })}
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href="https://drive.google.com/file/d/10Ew83Bx0_3F8MQK3yzThgdVlyylNblTV/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg transition"
                    >
                      Resume
                    </a>
                  </motion.li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  )
}
