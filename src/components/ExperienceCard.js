"use client"
import { motion } from "framer-motion"

export default function ExperienceCard({ exp }) {
  const formatDate = (dateString) => {
    if (!dateString) return "Present";
    const options = { year: 'numeric', month: 'short' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        className="relative pl-8 border-l-2 border-cyan-400/30 group"
      >
        <div className="absolute -left-1.5 top-0 w-3 h-3 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform"></div>
        {/* Date range */}
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="text-sm text-cyan-400 font-medium">
            {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
          </span>
          {exp.duration && (
            <span className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded">
              {exp.duration}
            </span>
          )}
        </div>
        <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 transition-all group-hover:border-cyan-400/30">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">{exp.title}</h3>
            <div className="flex flex-wrap items-center gap-2 mt-1">
              <span className="text-zinc-300">{exp.company}</span>
              {exp.location && (
                <>
                  <span className="text-zinc-500">•</span>
                  <span className="text-zinc-400 text-sm">{exp.location}</span>
                </>
              )}
            </div>
          </div>
          {/* Description */}
          <ul className="space-y-1">
            {exp.description.map((item, index) => (
              <li key={index} className = "text-zinc-300 text-sm flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>

          {/* Technologies */}
          {exp.technologies && exp.technologies.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-medium text-zinc-400 mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs bg-cyan-400/10 text-cyan-300 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          {/* Achievements */}
          {exp.achievements && exp.achievements.length > 0 && (
            <div>
              <h4 className="text-sm font-medium text-zinc-400 mb-2">Key Achievements:</h4>
              <ul className="space-y-1">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} className="text-zinc-300 text-sm flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Link */}
          {exp.link && (
            <a
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium mt-4 transition-colors"
            >
              View more
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </motion.div>
    )
  }
  