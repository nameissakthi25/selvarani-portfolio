import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Virtual AI-Powered Chemistry Lab",
      type: "Hackathon Project",
      icon: "&#129514;",
      description: "An interactive virtual lab enabling students to perform simulated chemistry experiments safely online. Features AI for real-time reaction prediction, voice-guided instructions, and intelligent error feedback.",
      tags: ["AI/ML", "Voice AI", "Education", "Real-time"]
    },
    {
      title: "AI Desmoking Surveillance System",
      type: "Hackathon Project",
      icon: "&#128247;",
      description: "Real-time video processing system using YOLO to detect smoking activities in restricted areas. Optimized for edge device deployment with enhanced accuracy through custom dataset training.",
      tags: ["YOLO", "Computer Vision", "Edge AI", "Video Processing"]
    },
    {
      title: "T5 Dynamic MCQ Generator",
      type: "Individual Project",
      icon: "&#128221;",
      description: "Automated assessment tool using T5 transformer to convert educational text into multiple-choice questions. Implements real-time input processing with context-aware question generation.",
      tags: ["T5 Transformer", "NLP", "HuggingFace", "Education"]
    },
    {
      title: "AI-Powered NEET Learning Partner",
      type: "Ideathon Project",
      icon: "&#128218;",
      description: "Personalized study platform with adaptive study plans, real-time doubt solving, and performance-based MCQ tests. Features NLP chatbot for student interaction and analytics dashboard for progress tracking.",
      tags: ["NLP", "Chatbot", "Analytics", "Adaptive Learning"]
    },
    {
      title: "Financial AI Advisor",
      type: "Individual Project",
      icon: "&#128176;",
      description: "AI-based investment advisor providing personalized suggestions using risk profiles and market trends. Implements ML algorithms for portfolio optimization and NLP for natural user interaction.",
      tags: ["Finance", "ML", "NLP", "Portfolio Optimization"]
    }
  ];

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
          <p>Some of my recent work</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-header">
                <div className="icon" dangerouslySetInnerHTML={{ __html: project.icon }}></div>
                <h3>{project.title}</h3>
                <div className="type">{project.type}</div>
              </div>
              <div className="project-body">
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
