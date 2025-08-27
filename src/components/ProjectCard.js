"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export default function ProjectCard({ project, featured = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      className={`group bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl overflow-hidden transition-all hover:border-cyan-400/30 ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Project Image */}
      <div className="h-48 bg-zinc-800 flex items-center justify-center relative overflow-hidden">
        <Image
          src={`/Images/${project.id}/${project.id}.jpg`}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-zinc-500">Project Image</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
        <p className="text-zinc-300 text-sm mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-cyan-400/10 text-cyan-300 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="text-xs bg-zinc-700 text-zinc-300 px-2 py-1 rounded">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
        <div className="flex justify-between items-center">
          <Link
            href={`/projects/${project.id}`}
            className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
          >
            View Details →
          </Link>
          <div className="flex space-x-2">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors"
                aria-label="GitHub Repository"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
