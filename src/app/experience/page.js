import experience from "../../data/experience"
import ExperienceCard from "../../components/ExperienceCard"
import PageWrapper from "../../components/PageWrapper"
import NextPageNavigator from "../../components/NextPageNavigator";

export default function ExperiencePage() {

  // Separate experience by type if needed
  const professionalExp = experience.filter(exp => exp.type === 'professional');
  const educationExp = experience.filter(exp => exp.type === 'education');
  const certificationExp = experience.filter(exp => exp.type === 'certification');
  return (
    <PageWrapper>
      <section className="min-h-screen py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text mb-6">
                Experience
              </h1>
              <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
                My professional journey in AI/ML engineering, education, and continuous learning.
              </p>
            </div>
            {/* Professional Experience */}
            {professionalExp.length > 0 && (
              <div className="mb-16">
                <h2 className="text-2xl font-semibold mb-8 flex items-center">
                  <span className="w-2 h-6 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full mr-3"></span>
                  Professional Experience
                </h2>
                <div className="space-y-8">
                  {professionalExp.map((exp, index) => (
                    <ExperienceCard key={index} exp={exp} index={index} />
                  ))}
                </div>
              </div>
            )}

            {/* Education */}
            {educationExp.length > 0 && (
              <div className="mb-16">
                <h2 className="text-2xl font-semibold mb-8 flex items-center">
                  <span className="w-2 h-6 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full mr-3"></span>
                  Education
                </h2>
                <div className="space-y-8">
                  {educationExp.map((exp, index) => (
                    <ExperienceCard key={index} exp={exp} index={index} />
                  ))}
                </div>
              </div>
            )}

            {/* Certifications */}
            {certificationExp.length > 0 && (
              <div className="mb-16">
                <h2 className="text-2xl font-semibold mb-8 flex items-center">
                  <span className="w-2 h-6 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full mr-3"></span>
                  Certifications
                </h2>
                <div className="space-y-8">
                  {certificationExp.map((exp, index) => (
                    <ExperienceCard key={index} exp={exp} index={index} />
                  ))}
                </div>
              </div>
            )}

            {/* Empty State */}
            {experience.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-white mb-2">Experience Coming Soon</h3>
                <p className="text-zinc-400">I&apos;m currently building my experience portfolio. Check back later!</p>
              </div>
            )}
            {/* Call to Action */}
            <div className="text-center mt-16 p-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-400/20">
              <h3 className="text-xl font-semibold mb-4 text-white">Interested in Working Together?</h3>
              <p className="text-zinc-300 mb-6">
                Let&apos;s discuss how my experience can contribute to your projects.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all hover:from-cyan-600 hover:to-blue-700 shadow-lg hover:shadow-cyan-500/25"
              >
                Get In Touch
              </a>
            </div>
            {/* <div className="space-y-6">
              {experience.map((exp, index) => (
                <ExperienceCard key={index} exp={exp} />
              ))}
            </div> */}
          </div>
      </section>
      <NextPageNavigator />
    </PageWrapper>
  )
}
