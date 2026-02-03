import React from 'react';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I'm <span className="highlight">Selvarani R</span></h1>
          <p className="tagline">AI/ML Engineer & Full Stack Developer</p>
          <p>
            Passionate about building real-time systems, scalable applications, and
            data-driven solutions. Committed to creating ethical, reliable, and
            maintainable software that makes a difference.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-avatar">
            <img src="/profile.jpg" alt="Selvarani R" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
