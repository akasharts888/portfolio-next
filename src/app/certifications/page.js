// app/certifications/page.js
import certifications from "../../data/certifications";
import CertificationCard from "../../components/CertificationCard";
import PageWrapper from "../../components/PageWrapper";
import NextPageNavigator from "../../components/NextPageNavigator";

export default function CertificationsPage() {
  // Group certifications by year if needed
  const currentYear = new Date().getFullYear();
  const currentYearCerts = certifications.filter(cert => {
    const certYear = new Date(cert.date).getFullYear();
    return certYear === currentYear;
  });
  
  const previousYearCerts = certifications.filter(cert => {
    const certYear = new Date(cert.date).getFullYear();
    return certYear < currentYear;
  });
  return (
    <PageWrapper>
      <section className="min-h-screen py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text mb-6">
              Certifications
            </h1>
            <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
              My credentials and continuous learning journey in AI/ML engineering and related technologies.
            </p>
          </div>
          {/* Current Year Certifications */}
          {currentYearCerts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-8 flex items-center">
                <span className="w-2 h-6 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full mr-3"></span>
                {currentYear} Certifications
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentYearCerts.map((cert, index) => (
                  <CertificationCard key={index} cert={cert} index={index} />
                ))}
              </div>
            </div>
          )}

          {/* Previous Years Certifications */}
          {previousYearCerts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-8 flex items-center">
                <span className="w-2 h-6 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full mr-3"></span>
                Previous Certifications
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {previousYearCerts.map((cert, index) => (
                  <CertificationCard key={index} cert={cert} index={index} />
                ))}
              </div>
            </div>
          )}

          {/* Empty State */}
          {certifications.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📜</div>
              <h3 className="text-xl font-semibold text-white mb-2">Certifications Coming Soon</h3>
              <p className="text-zinc-400">I'm currently working on expanding my certifications. Check back later!</p>
            </div>
          )}
          {/* Call to Action */}
          <div className="text-center mt-16 p-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-400/20">
            <h3 className="text-xl font-semibold mb-4 text-white">Continuous Learning</h3>
            <p className="text-zinc-300 mb-6">
              I believe in constantly updating my skills and knowledge in the rapidly evolving field of AI.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all hover:from-cyan-600 hover:to-blue-700 shadow-lg hover:shadow-cyan-500/25"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </section>
      <NextPageNavigator />
    </PageWrapper>
  )
}
