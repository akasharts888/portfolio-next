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
              src="/images/me-img.jpg"
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
            Building the Future with AI
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-6 max-w-3xl text-lg sm:text-xl text-zinc-300"
        >
           I&apos;m <span className="font-semibold text-white">Akash Sharma</span> — Full Stack AI/ML Engineer
          crafting{" "}
          <span className="text-cyan-300">Agentic AI</span>,{" "}
          <span className="text-blue-300">LLM fine-tuning</span>, and{" "}
          <span className="text-purple-300">RAG systems</span> for real-world impact.
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
