import React, { useEffect, useRef, useState } from 'react';
import './../styles/About.css';

const About = () => {
  const containerRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAnimate(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const current = containerRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      className={`about-container ${animate ? 'animate' : ''}`}
      id="about"
      ref={containerRef}
    >
      <div className="about-text">
        <h1 className="about-title">About</h1>
        <p>
          I’m <strong>Sravani Karri</strong>, an enthusiastic <i>Electronics & Communication Engineering</i> student with a passion for technology, innovation, and building digital solutions that make a difference.
        </p>
        <p>
          My journey in tech has been driven by a strong foundation in <b>Python, Java, React, HTML, CSS, JavaScript</b>, database management SQL, and ServiceNow development.
        </p>
        <p>
          From interning at ISRO to earning certifications in ServiceNow (CSA, CAD) and Java, my journey has been driven by an interest for problem-solving, creativity, and a constant curiosity to learn. I thrive in the space where software meets strategy, combining my technical foundation with a forward-thinking mindset.
        </p>
      </div>
      <div className="about-image">
        <img src="https://img.freepik.com/premium-photo/cute-chibi-programmer-with-laptop-code-display_1314184-14809.jpg?semt=ais_hybrid&w=740" alt="Developer" />
      </div>
    </div>
  );
};

export default About;

