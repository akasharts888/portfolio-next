// app/projects/[id]/page.js
import projects from "../../../data/projects";
import PageWrapper from "../../../components/PageWrapper";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function ProjectDetails({ params }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <PageWrapper>
      <article className="min-h-screen py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link 
            href="/projects" 
            className="inline-flex items-center text-zinc-400 hover:text-white transition-colors mb-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </Link>

          {/* Project Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
            <p className="text-lg text-zinc-300 mb-6">{project.description}</p>
            
            {/* Project Links */}
            <div className="flex flex-wrap gap-4 mb-6">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all hover:from-cyan-600 hover:to-blue-700"
                >
                  Live Demo
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center border border-zinc-700 text-zinc-300 px-4 py-2 rounded-lg font-medium transition-all hover:border-zinc-600 hover:text-white"
                >
                  GitHub
                  <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
              )}
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Tech Stack:</h3>
              <ul className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <li
                    key={index}
                    className="px-3 py-1 bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-lg text-sm text-cyan-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </header>

          {/* Project Image/Banner */}
          <div className="mb-8 rounded-xl overflow-hidden border border-zinc-700/50">
            <div className="w-full h-64 md:h-80 relative">
              <Image
                  src={`/images/${project.id}/${project.id}.jpg`}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>
          </div>

          {/* Project Details */}
          <div className="prose prose-invert max-w-none">
            {/* You can add more sections here based on your project data */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">About This Project</h2>
              {project.longDescription ? (
                <div className="text-zinc-300 markdown-content">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {project.longDescription}
                  </ReactMarkdown>
                </div>
              ) : (
                <p className="text-zinc-400 italic">Detailed description coming soon...</p>
              )}
            </div>

            {/* Features Section */}
            {project.features && project.features.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">Key Features</h2>
                <ul className="text-zinc-300 list-disc list-inside space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Challenges Section */}
            {project.challenges && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">Challenges & Solutions</h2>
                <p className="text-zinc-300">{project.challenges}</p>
              </div>
            )}

            {/* Gallery Section - Multiple Images */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="rounded-lg overflow-hidden border border-zinc-700/50">
                      <div className="w-full h-48 relative">
                        <Image
                          src={image}
                          alt={`${project.title} - Image ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
    </PageWrapper>
  );
}

// Generate static params for SSG
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Akash Sharma`,
    description: project.description,
  };
}