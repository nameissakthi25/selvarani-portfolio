import React from 'react';

function Certifications() {
  const certifications = [
    {
      title: "Scripting with Python and SQL for Data Engineering",
      issuer: "Duke University",
      grade: "Grade: 86%",
      icon: "&#127941;"
    },
    {
      title: "Mathematical Thinking in Computer Science",
      issuer: "UC San Diego",
      grade: "Grade: 95.5%",
      icon: "&#128290;"
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      grade: "Certification Completed",
      icon: "&#128421;"
    }
  ];

  return (
    <section className="section section-alt" id="certifications">
      <div className="container">
        <div className="section-title">
          <h2>Certifications</h2>
          <p>Professional credentials</p>
        </div>
        <div className="certs-grid">
          {certifications.map((cert, index) => (
            <div className="cert-card" key={index}>
              <div className="cert-icon" dangerouslySetInnerHTML={{ __html: cert.icon }}></div>
              <div className="cert-info">
                <h4>{cert.title}</h4>
                <div className="issuer">{cert.issuer}</div>
                <div className="grade">{cert.grade}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
