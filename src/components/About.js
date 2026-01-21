import React from 'react';
import './About.css';

const About = () => {
  const stats = [
    { value: '100+', label: 'УЧАСТНИКОВ', rowClass: 'about-stats-row--1' },
    { value: '15+', label: 'ДОКЛАДОВ', rowClass: 'about-stats-row--2' },
    { value: '3', label: 'СЕССИИ', rowClass: 'about-stats-row--3' },
    { value: '2', label: 'ДНЯ', rowClass: 'about-stats-row--4' },
    { value: '1', label: 'ИТ-РИТМ', rowClass: 'about-stats-row--5' },
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">О конференции</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              «ИТ-Ритм» – это специализированная ежегодная конференция, предоставляющая уникальные возможности для встреч,
              обмена практическим опытом и изучения трендов развития информационных технологий для руководителей и специалистов
              ИТ-подразделений крупных компаний, а также для ведущих российских разработчиков программного обеспечения и производителей оборудования.
            </p>
          </div>
          <div className="about-stats">
            {stats.map((s) => (
              <div key={s.label} className={`about-stats-row ${s.rowClass}`}>
                <div className="about-stat">
                  <span className="about-stat-value">{s.value}</span>
                  <span className="about-stat-pill">{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <video
          className="about-stats-video"
          controls
          autoPlay
          muted
          playsInline
        >
          <source
            src="https://disk.yandex.ru/d/2wLNFyq8N4g56g"
            type="video/webm"
          />
          <source
            src="https://www.gaz-is.ru/images/news/conference.mp4"
            type="video/mp4"
          />
          Ваш браузер не поддерживает видео тег.
        </video>
      </div>
    </section>
  );
};

export default About;
