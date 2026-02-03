import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">Selvarani R</div>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-social">
          <a href="mailto:selvaranir246@gmail.com" title="Email">&#9993;</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">in</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">&#128187;</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Selvarani R. All rights reserved. | AI/ML Engineer & Full Stack Developer</p>
      </div>
    </footer>
  );
}

export default Footer;
