import React from 'react';

function Experience() {
  const experiences = [
    {
      title: "Junior ML Engineer Intern",
      company: "CodTech",
      date: "Mar 2025 - Jun 2025",
      points: [
        "Developed and fine-tuned machine learning models for classification and prediction tasks",
        "Performed data preprocessing, feature engineering, and model evaluation using Python, Pandas, and scikit-learn",
        "Collaborated with senior engineers to optimize model performance and deployment pipelines"
      ]
    },
    {
      title: "Full Stack Developer Intern",
      company: "Web Innoventixs",
      date: "Aug 2024 - Sep 2024",
      points: [
        "Built and deployed dynamic web applications using the MERN stack (MongoDB, Express.js, React, Node.js)",
        "Developed RESTful APIs and implemented secure authentication mechanisms",
        "Optimized front-end performance for responsive, mobile-friendly user experiences"
      ]
    }
  ];

  return (
    <section className="section section-alt" id="experience">
      <div className="container">
        <div className="section-title">
          <h2>Experience</h2>
          <p>My professional journey</p>
        </div>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div className="experience-item" key={index}>
              <div className="experience-dot"></div>
              <div className="experience-content">
                <h3>{exp.title}</h3>
                <div className="company">{exp.company}</div>
                <div className="date">{exp.date}</div>
                <ul>
                  {exp.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
