import projects from "../../data/projects"
import ProjectCard from "../../components/ProjectCard"
import PageWrapper from "../../components/PageWrapper"
import NextPageNavigator from "../../components/NextPageNavigator";
export default function ProjectsPage() {
  // Categorize projects if needed
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <PageWrapper>
      <section className="min-h-screen py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text mb-6">
              My Projects
            </h1>
            <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
              Here are some of the projects I've worked on, showcasing my skills in AI/ML development, 
              web applications, and innovative solutions.
            </p>
          </div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-8 flex items-center">
                <span className="w-2 h-6 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full mr-3"></span>
                Featured Projects
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} featured={true} />
                ))}
              </div>
            </div>
          )}

          {/* All Projects */}
          <div>
            <h2 className="text-2xl font-semibold mb-8 flex items-center">
              <span className="w-2 h-6 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full mr-3"></span>
              All Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
          {/* Empty State */}
          {projects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🚧</div>
              <h3 className="text-xl font-semibold text-white mb-2">Projects Coming Soon</h3>
              <p className="text-zinc-400">I'm currently working on some exciting projects. Check back later!</p>
            </div>
          )}
        </div>
      </section>
      <NextPageNavigator />
    </PageWrapper>
  )
}
