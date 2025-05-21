import React from "react";
import "./../styles/Education.css";
const educationData = [
  {
    logo: "https://yt3.googleusercontent.com/ytc/AIdro_lSUhM-PCBpeNnlyFP-eBeX6qnTIOa5fFjLdvyWCzaKfw=s900-c-k-c0x00ffffff-no-rj",
    title: "B.Tech, Electronics and Communication Engineering",
    college: "BVC Institute of Technology and Science",
    duration: "Nov 2021 - May 2025",
    result: "CGPA - 8.51"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqRx43-vajk9Kd1JWmwS_6wf18q-vb02l5RA&s",
    title: "Intermediate",
    college: "Sri Chaitanya Junior college, Amalapuram",
    duration: "2019-2021",
    result: "Percentage - 96.5"
  }
];
const Education = () => {
  return (
    <section className="education-section" id="education">
      <h2 className="education-heading">Education</h2>
      <div className="timeline">
        {educationData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-icon">
              <img src={item.logo} alt="institution logo" />
            </div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p className="college-name">{item.college}</p>
              <p className="duration">{item.duration}</p>
              <p className="result">{item.result}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Education;
