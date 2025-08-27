// app/about/page.js
import PageWrapper from "../../components/PageWrapper";
import ProfileImage from "../../components/ProgfileImage"
import NextPageNavigator from "../../components/NextPageNavigator";

export default function AboutPage() {
  const skills = [
    "Python","Machine Learning","Deep Learning", "JavaScript", "React.js", "Next.js",
    "LangChain", "LangGraph", "AWS EC2", "MongoDB", "PyTorch",
    "TensorFlow", "FastAPI", "Docker", "Git", "RAG Systems",
    "LLM Fine-tuning", "Crew AI","Vector Databases", "AI Agent Systems"
  ];

  const experiences = [
    {
      period: "Dec 2024 – May 2025",
      role: "Data Science Intern",
      company: "Aithemis – LawTech Startup (New Delhi, India)",
      description: "Developed a Retrieval-Augmented Generation (RAG) pipeline using LangChain and LlamaIndex’s Citation Query Engine. Automated legal case summarization and document drafting workflows with LLM chains on AWS EC2. Created custom IQA datasets and assisted in fine-tuning domain-specific legal LLMs for high-performance inference. Tech stack included LangChain, LlamaIndex, HuggingFace Transformers, AWS EC2, and Python."
    },
    {
      period: "2020 – 2025",
      role: "Bachelor of Computer Applications (BCA)",
      company: "Delhi Skill & Entrepreneurship University",
      description: "Graduated with a CGPA of 9.45. Relevant coursework included Data Structures, Web Development, Cloud Computing, Machine Learning, Database Management, Operating Systems, Cyber Security, and Data Analytics & Visualization. Actively worked on academic and personal AI/ML projects during degree."
    }
  ];
  return (
    <PageWrapper>
        <section className="py-10 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-8">
                        <ProfileImage
                            src="/images/me-img.jpg"
                            alt="Akash Sharma"
                            width={192}
                            height={192}
                            size="large"
                        />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text mb-6">About Me</h1>
                    <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
                        Hi, I’m <span className="font-semibold text-white">Akash Sharma</span> 👋<br />
                        I build agentic AI systems, fine-tune LLMs, and ship RAG pipelines with solid
                        backends. Passionate about putting modern AI into real products.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-semibold mb-6 flex items-center">
                            <span className="w-2 h-6 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full mr-3"></span>
                            My Journey
                        </h2>
                        <div className="space-y-4 text-zinc-300">
                            <p>
                            I'm a passionate AI/ML Engineer with expertise in building intelligent systems that 
                            solve real-world problems. My journey in AI started with a curiosity about how machines 
                            can learn and understand human language.
                            </p>
                            <p>
                                Today, I specialize in creating sophisticated AI solutions including Large Language Model 
                                fine-tuning, Retrieval-Augmented Generation systems, and autonomous AI agents that can 
                                reason, plan, and execute complex tasks.
                            </p>
                        </div>
                        {/* Right Column - Experience */}
                        <div>
                            <h2 className="text-2xl font-semibold flex items-center py-10">
                                <span className="w-2 h-6 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full mr-3"></span>
                                Experience
                            </h2>
                            <div className="space-y-6">
                                {experiences.map((exp, index) => (
                                <div key={index} className="relative pl-8 border-l-2 border-cyan-400/30">
                                    <div className="absolute -left-1.5 top-0 w-3 h-3 bg-cyan-400 rounded-full"></div>
                                    <p className="text-sm text-cyan-400 mb-1">{exp.period}</p>
                                    <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                                    <p className="text-zinc-400 mb-2">{exp.company}</p>
                                    <p className="text-zinc-300 text-sm">{exp.description}</p>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Skills Section */}
                    <div className="mt-16">
                        <h2 className="text-2xl font-semibold mb-8 text-center flex items-center justify-center">
                            <span className="w-2 h-6 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full mr-3"></span>
                            Technical Skills
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {skills.map((skill) => (
                            <div 
                            key={skill} 
                            className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-4 text-center transition-all hover:border-cyan-400/30 hover:transform hover:scale-105"
                            >
                            <span className="text-zinc-200 font-medium">{skill}</span>
                            </div>
                        ))}
                        </div>
                    </div>
                    {/* Call to Action */}
                    <div className="mt-16 text-center p-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-400/20">
                        <h3 className="text-xl font-semibold mb-4 text-white">Let's Build Something Amazing Together</h3>
                        <p className="text-zinc-300 mb-6 max-w-2xl mx-auto">
                        Interested in implementing AI solutions for your business? I'm always open to discussing new projects and opportunities.
                        </p>
                        <a 
                        href="/contact" 
                        className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all hover:from-cyan-600 hover:to-blue-700 shadow-lg hover:shadow-cyan-500/25"
                        >
                        Get In Touch
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <NextPageNavigator />
    </PageWrapper>
 );
}