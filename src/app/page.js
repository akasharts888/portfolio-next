"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import PageWrapper from "../components/PageWrapper"
import ProfileImage from "../components/ProgfileImage"
import NextPageNavigator from "../components/NextPageNavigator";

export default function Home() {
  return (
    <PageWrapper>
      <section className="min-h-[82vh] flex flex-col items-center justify-center text-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden border-2 border-cyan-400/30 shadow-lg shadow-cyan-400/20">
            <ProfileImage
              src="/Images/me-img.jpg"
              alt="Akash Sharma"
              width={128}
              height={128}
              size="small"
            />
          </div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text animate-gradient">
            Shaping the Future with AI
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-6 max-w-3xl text-lg sm:text-xl text-zinc-300"
        >
          I&apos;m <span className="font-semibold text-white">Akash Sharma</span> — a Full Stack AI/ML Engineer 
          specializing in{" "}
          <span className="text-cyan-300">Agentic AI</span>,{" "}
          <span className="text-blue-300">LLM fine-tuning</span>, and{" "}
          <span className="text-purple-300">RAG systems</span> that drive{" "}
          <span className="font-semibold text-white">real-world impact</span>.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/projects"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all hover:from-cyan-600 hover:to-blue-700 shadow-lg hover:shadow-cyan-500/25"
          >
             View Projects
          </Link>
          <motion.a
            href="https://drive.google.com/uc?export=download&id=1bRZ4ARR5cTnHKjosU7H5v8JTnfehJZQZ"
            download
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium shadow-lg hover:shadow-purple-500/30 transition flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
              />
            </svg>
            Download Resume
          </motion.a>
          <Link
            href="/contact"
            className="border border-zinc-700 text-zinc-300 px-6 py-3 rounded-lg font-medium transition-all hover:border-zinc-600 hover:text-white"
          >
            Contact Me
          </Link>
        </motion.div>
        {/* Tech badges marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-14 w-full overflow-hidden"
        >
          <div className="relative flex overflow-hidden">
            <div className="animate-marquee whitespace-nowrap py-2">
              {[
                "Python","PyTorch","LangChain","LangGraph","Next.js","React","RAG","LoRA","Vector DBs","AWS","Docker","MongoDB"
              ].map((tag) => (
                <span key={tag} className="mx-3 bg-zinc-800/50 text-zinc-300 px-4 py-2 rounded-full text-sm backdrop-blur-sm">{tag}</span>
              ))}
            </div>
            <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-2">
              {[
                "Python", "PyTorch", "LangChain", "LangGraph", "Next.js", 
                "React", "RAG", "LoRA", "Vector DBs", "AWS", "Docker", "MongoDB"
              ].map((tag) => (
                <span key={tag} className="mx-3 bg-zinc-800/50 text-zinc-300 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
      <NextPageNavigator />
    </PageWrapper>
  );
}
