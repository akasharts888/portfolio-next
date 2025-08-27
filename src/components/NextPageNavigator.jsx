"use client";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react"; // or any icon you like

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Certifications", path: "/certifications" },
  { name: "Contact", path: "/contact" },
];

export default function NextPageNavigator() {
  const router = useRouter();
  const pathname = usePathname();

  // Find current index in links array
  const currentIndex = links.findIndex((l) => l.path === pathname);
  const nextPage = links[(currentIndex + 1) % links.length]; // loop back to start

  if (!nextPage) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-center mt-16 mb-8"
    >
      <button
        onClick={() => router.push(nextPage.path)}
        className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium
                   bg-gradient-to-r from-cyan-500 to-purple-600 text-white 
                   shadow-lg hover:shadow-cyan-500/25 transition-all hover:scale-105"
      >
        Next: {nextPage.name}
        <ArrowRight className="w-5 h-5" />
      </button>
    </motion.div>
  );
}
