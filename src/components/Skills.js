import React from 'react';

function Skills() {
  const skillCategories = [
    {
      title: "ML/AI Frameworks",
      icon: "&#129302;",
      skills: ["PyTorch", "TensorFlow", "HuggingFace", "LangChain", "OpenAI", "Anthropic", "scikit-learn", "OpenCV", "YOLO"]
    },
    {
      title: "Cloud & MLOps",
      icon: "&#9729;",
      skills: ["AWS Bedrock", "AWS Lex", "Google Cloud ML", "Azure ML", "IBM Watson", "Docker", "Kubernetes"]
    },
    {
      title: "Web Development",
      icon: "&#128187;",
      skills: ["React", "Node.js", "Django", "Flask", "FastAPI", "REST APIs", "HTML5", "CSS3"]
    },
    {
      title: "Data & Databases",
      icon: "&#128202;",
      skills: ["MySQL", "MongoDB", "Firebase", "Pandas", "NumPy", "Milvus", "Chroma", "Qdrant"]
    },
    {
      title: "Tools & Protocols",
      icon: "&#128295;",
      skills: ["Git", "Postman", "VS Code", "Jira", "MQTT", "WebSockets", "Agile/Scrum"]
    }
  ];

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-title">
          <h2>Technical Skills</h2>
          <p>Technologies I work with</p>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-category" key={index}>
              <h3>
                <span className="icon" dangerouslySetInnerHTML={{ __html: category.icon }}></span>
                {category.title}
              </h3>
              <div className="skill-tags">
                {category.skills.map((skill, idx) => (
                  <span className="skill-tag" key={idx}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
