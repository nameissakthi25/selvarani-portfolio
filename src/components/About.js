import React from 'react';

function About() {
  return (
    <section className="section section-alt" id="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>Building the Future with AI & Code</h3>
            <p>
              I'm a passionate AI/ML engineer and full-stack developer currently pursuing my
              B.Tech in Artificial Intelligence & Data Science at KGISL Institute of Technology.
              With hands-on experience in building real-time systems, scalable applications, and
              data-driven solutions, I thrive on turning complex problems into elegant solutions.
            </p>
            <p>
              My journey spans from developing machine learning models for classification and
              prediction tasks to building dynamic web applications using the MERN stack. I'm
              proficient in machine learning frameworks, cloud platforms, and modern web technologies.
            </p>
            <p>
              I believe in building software that prioritizes fairness, accountability, and
              alignment with real-world user needs. Every line of code I write is a step towards
              creating technology that makes a positive impact.
            </p>
            <div className="about-info">
              <div className="info-item">
                <div className="icon">&#127891;</div>
                <span>B.Tech AI & DS (2022-2026)</span>
              </div>
              <div className="info-item">
                <div className="icon">&#128205;</div>
                <span>KGISL Institute of Technology</span>
              </div>
              <div className="info-item">
                <div className="icon">&#127942;</div>
                <span>CGPA: 7.6/10</span>
              </div>
              <div className="info-item">
                <div className="icon">&#128187;</div>
                <span>Full Stack + ML</span>
              </div>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <div className="number">5+</div>
              <div className="label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="number">2</div>
              <div className="label">Internships</div>
            </div>
            <div className="stat-card">
              <div className="number">3</div>
              <div className="label">Certifications</div>
            </div>
            <div className="stat-card">
              <div className="number">1st</div>
              <div className="label">SIH Winner</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
