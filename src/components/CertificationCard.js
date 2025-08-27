"use client"
import { motion } from "framer-motion"
import { useState } from "react"

export default function CertificationCard({ cert ,index}) {
    const [isHovered, setIsHovered] = useState(false);
    // Format date to be more readable
    const formatDate = (dateString) => {
      const options = { year: 'numeric', month: 'long' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };

    // Get platform-specific styling
    const getPlatformStyle = (issuer) => {
      const platformStyles = {
        'Udemy': { bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-300' },
        'DeepLearning.AI': { bg: 'bg-red-500/10', border: 'border-red-500/20', text: 'text-red-300' },
        'Amazon Web Services': { bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-300' },
        'Kaggle': { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-300' },
        'default': { bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', text: 'text-cyan-300' }
      };
      return platformStyles[issuer] || platformStyles.default;
    };
    const platformStyle = getPlatformStyle(cert.issuer);
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className={`relative rounded-xl p-6 backdrop-blur-sm border transition-all duration-300 ${platformStyle.bg} ${platformStyle.border} hover:shadow-lg`}
      >
        {/* Glow effect on hover */}
        <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/5 to-purple-500/5 opacity-0 transition-opacity ${isHovered ? 'opacity-100' : ''}`}></div>
        {/* Platform icon based on issuer */}
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${platformStyle.bg} ${platformStyle.border}`}>
              {cert.issuer === 'Udemy' && (
                <span className="text-lg">🎓</span>
              )}
              {cert.issuer === 'DeepLearning.AI' && (
                <span className="text-lg">🧠</span>
              )}
              {cert.issuer === 'Amazon Web Services' && (
                <span className="text-lg">☁️</span>
              )}
              {cert.issuer === 'Kaggle' && (
                <span className="text-lg">🏆</span>
              )}
              {!['Udemy', 'DeepLearning.AI', 'Amazon Web Services', 'Kaggle'].includes(cert.issuer) && (
                <span className="text-lg">📜</span>
              )}
            </div>
            {/* Verification badge */}
            {cert.verified && (
              <div className="text-green-400" title="Verified">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </div>
          <h3 className="text-lg font-semibold text-white mb-2 leading-tight">{cert.title}</h3>
          <p className={`text-sm font-medium mb-3 ${platformStyle.text}`}>{cert.issuer}</p>
          <p className="text-xs text-zinc-400 mb-4">Issued: {formatDate(cert.date)}</p>
          {/* Skills (if available) */}
          {cert.skills && cert.skills.length > 0 && (
            <div className="mb-4">
              <p className="text-xs text-zinc-500 mb-1">Skills:</p>
              <div className="flex flex-wrap gap-1">
                {cert.skills.slice(0, 3).map((skill, index) => (
                  <span key={index} className="text-xs bg-zinc-800/50 text-zinc-300 px-2 py-0.5 rounded">
                    {skill}
                  </span>
                ))}
                {cert.skills.length > 3 && (
                  <span className="text-xs bg-zinc-800/50 text-zinc-300 px-2 py-0.5 rounded">
                    +{cert.skills.length - 3}
                  </span>
                )}
              </div>
            </div>
          )}
          {/* View Certificate button */}
          <a
            href={cert.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center text-xs font-medium ${platformStyle.text} hover:underline`}
          >
            View certificate
            <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </motion.div>
    )
  }
  