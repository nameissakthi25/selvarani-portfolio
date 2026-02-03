import React from 'react';

function Achievements() {
  const achievements = [
    {
      title: "Smart India Hackathon (SIH) Winner",
      description: "1st Prize in team of 5",
      icon: "&#127942;"
    },
    {
      title: "Top 10 at PyExpo",
      description: "State-level Python development competition",
      icon: "&#127941;"
    },
    {
      title: "Women in AI Conference",
      description: "Participant at Eshwar College development conference",
      icon: "&#128105;"
    }
  ];

  return (
    <section className="section" id="achievements">
      <div className="container">
        <div className="section-title">
          <h2>Achievements</h2>
          <p>Recognition and accomplishments</p>
        </div>
        <div className="achievements-list">
          {achievements.map((achievement, index) => (
            <div className="achievement-card" key={index}>
              <div className="achievement-icon" dangerouslySetInnerHTML={{ __html: achievement.icon }}></div>
              <h4>{achievement.title}</h4>
              <p>{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
