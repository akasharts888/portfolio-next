const projects = [
    {
      id: "AutoResearcher",
      title: "AutoResearcher – Agentic Research System",
      description:
        "Developed an agentic research assistant using LangGraph with autonomous nodes for planning, memory checking, research, summarization, reviewing, and rewriting. Integrated hybrid memory (MongoDB + Pinecone). Backend in FastAPI, frontend in React with research-focused UX/UI.",
      longDescription:
        "AutoResearcher is an intelligent, agentic AI system that automates the end-to-end research process. It uses LangGraph to orchestrate multiple autonomous nodes for distinct tasks like query planning, memory validation, structured web research, contextual summarization, critique/review, and iterative rewriting for quality assurance. The system leverages a hybrid memory layer (MongoDB + Pinecone) to recall past research and avoid redundancy. The backend is powered by FastAPI for efficiency, while the React-based frontend delivers a research-focused UX/UI with interactive summaries, sources, and reports. This project demonstrates the application of multi-agent systems to real-world knowledge discovery and academic/market research workflows.",
      tech: ["LangGraph", "Pinecone", "MongoDB", "FastAPI", "React"],
      link: "https://github.com/yourusername/auto-researcher",
      featured: true,
      gallery: ['/Images/AutoResearcher/AutoResearcher-Second-Page.jpg','/Images/AutoResearcher/AutoResearcher-fourth-Page.jpg']
    },
    {
      id: "Cohort-Hive",
      title: "Cohort Hive – AI Tutoring Platform",
      description:
        "Designed an intelligent tutoring system with adaptive learning paths, real-time feedback, and mentor enforcement to boost engagement. Built frontend in React/Node.js and backend in FastAPI with LangGraph for agentic workflows.",
      longDescription:
        "Cohort Hive is a personalized AI-powered tutoring platform built to simulate the role of a dedicated mentor. It adapts to individual learner needs by teaching new concepts daily, conducting quizzes to reinforce past knowledge, and dynamically adjusting the learning path based on progress. The system also enforces mentor-like accountability by ensuring no redundant lessons and encouraging consistent engagement. Built using React and Node.js for the frontend and FastAPI for backend services, it leverages LangGraph for orchestrating agentic learning workflows. Cohort Hive represents a fusion of adaptive learning technology and intelligent automation, making education more structured, interactive, and engaging.",
      tech: ["React", "Node.js", "FastAPI", "LangGraph"],
      link: "https://github.com/yourusername/cohort-hive",
      featured: true,
      gallery: ['/Images/Cohort-Hive/Cohort-1.jpg','/Images/Cohort-Hive/Cohort-2.jpg','/Images/Cohort-Hive/Cohort-3.jpg','/Images/Cohort-Hive/Cohort-4.jpg']
      
    },  
    {
      id: "FinInsight",
      title: "FinInsight – Personal Finance Intelligence Platform",
      description:
        "An AI-powered platform for individual financial wellness — with features like cash flow tracking, budgeting, debt management, and personalized insights.",
      longDescription: 
        "FinInsight is a comprehensive personal finance intelligence system designed to empower individuals in managing and optimizing their finances. The platform integrates multiple AI-driven modules including:\n\n" +
        "• **Cash Flow Tracker** – monitors income and expenses, highlighting patterns and anomalies.\n" +
        "• **Budgeting Assistant** – helps users set realistic budgets with adaptive recommendations.\n" +
        "• **Debt Management** – analyzes outstanding loans/credit and provides optimized repayment strategies.\n" +
        "• **Tax & Retirement Planning** – assists in maximizing tax savings and planning long-term goals.\n" +
        "• **Financial Wellness Score** – generates an overall score based on multiple metrics to give users a snapshot of financial health.\n\n" +
        "The platform leverages **Agentic AI workflows, RAG pipelines, and predictive ML models** to deliver actionable insights in real-time. It aims to help individuals not just track, but actively improve their financial strength.",
      tech: ["React.js", "TailwindCSS", "Python", "PyTorch", "Agentic AI", "LLMs", "Vector DBs", "AWS"],
      link: "https://github.com/akasharts888/FinInsight",
      featured: true,
      gallery: ['/Images/FinInsight/FinInsight-2.jpg','/Images/FinInsight/FinInsight-3.jpg','/Images/FinInsight/FinInsight-4.jpg','/Images/FinInsight/FinInsight-5.jpg']
      
    },
    {
      id: "MedicalAgenticWorkflow",
      title: "Medical Agentic RAG with Binary Quantization",
      description:
        "An Agentic RAG workflow tailored for medical use cases, combining retrieval, agent orchestration, web search fallback, and Binary Quantization for efficient embedding storage.",
      longDescription: `This project implements an Agentic RAG (Retrieval-Augmented Generation) workflow for medical use cases. It demonstrates how combining retrieval, agent routing, web search fallback, and synthesis can create a more reliable and explainable AI assistant.
    
    Features
    
    Medical PDF ingestion & chunking – upload and process multi-page medical documents.  
    Binary Quantization of embeddings – compress embeddings for efficient storage and retrieval.  
    Chroma as local vector database – simple, self-hosted, and persistent.  
    Agentic workflow orchestration with CrewAI – modular agents for retrieval, evaluation, search, and synthesis.  
    Web search fallback (Tavily) – retrieves external context when document knowledge is insufficient.  
    Medical focus – designed to answer queries from medical documents and supplement with authoritative online sources.  
    Streamlit UI – simple interface to upload PDFs and chat with the assistant.  
    
    ⚙️ Architecture  
    
    1. Document ingestion → PDFs uploaded, chunked into passages.  
    2. Embedding + Binary Quantization → embeddings created and compressed for storage efficiency.  
    3. Vector DB (Chroma) → embeddings stored and retrieved for RAG.  
    4. Retriever Agent → fetches top-k relevant chunks.  
    5. RAG Generator → produces draft answer.  
    6. Evaluator Agent → checks if draft is “GOOD” or “BAD”.  
    7. If BAD → query is optimized and routed to Web Search Agent (Tavily).  
    8. Synthesizer Agent → merges RAG + web context into final response.  
    9. Streamlit frontend → user sees refined, explainable answers.  
    
    🛠️ Tech Stack  
    - **LLM:** Llama-3-70B (Together API)  
    - **Vector Database:** Chroma  
    - **Agent Framework:** CrewAI  
    - **Web Search:** Tavily  
    - **UI:** Streamlit  
    - **Embeddings:** Binary Quantization enabled  
    
    🔑 What’s Unique?  
    - **Binary Quantization** – compresses embeddings into compact binary codes for faster, memory-efficient retrieval.  
    - **Agentic Workflow with Quality Control** – evaluator agent checks output quality; if insufficient, a web search agent supplements missing knowledge.  
    
    This makes the workflow more robust, efficient, and explainable compared to standard RAG setups.`,
      tech: ["CrewAI", "Chroma", "Binary Quantization", "Streamlit", "Llama-3-70B", "Tavily"],
      link: "https://github.com/yourusername/Medical-Agentic-Workflow",
      featured: true,
      gallery: ['/Images/MedicalAgenticWorkflow/Medical-Agent-2.jpg']

    },        
    {
      id: "FineTuning",
      title: "Fine-Tuning LLaMA 3.1-8B for Amazon Review Score Prediction",
      description:
        "Designed a regression pipeline on Amazon Reviews dataset using ML models and fine-tuned LLaMA 3.1-8B, achieving 49.2% performance over 47.5% baseline with limited data. Integrated Weights & Biases for experiment tracking.",
      tech: ["LLaMA 3.1-8B", "HuggingFace", "W&B"],
      link: "https://github.com/yourusername/llama-finetuning",
      featured : true
    },
    {
      id: "image-captioning",
      title: "Image Caption Generator (CNN-RNN)",
      description:
        "Built an end-to-end image captioning model with InceptionV3 encoder + LSTM decoder, trained on custom dataset. Implemented custom inference pipeline for dynamic caption prediction.",
      tech: ["PyTorch", "CNN", "RNN", "LSTM"],
      link: "https://github.com/yourusername/image-caption-generator",
    },
  ]
  
export default projects
  