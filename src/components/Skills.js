import React from "react";
import "./../styles/Skills.css";
const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Skills</h2>
      <p className="skills-intro">
        I love to learn new things and experiment with new technologies.<br />
        These are some of the major languages, technologies, tools and platforms I have worked with:
      </p>
      <h3 className="skills-subtitle">Languages</h3>
      <div className="skills-icons">
        <div className="skill">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy5G8eECOD1PyiahPpMfAccK5bsb-iT5ozbw&s" alt="React" />
          <p>React</p>
        </div>
        <div className="skill">
          <img src="https://static-00.iconduck.com/assets.00/logo-js-icon-2048x2048-ptuzd8a3.png" alt="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <img src="https://static-00.iconduck.com/assets.00/logo-python-icon-506x512-t38ct41x.png" alt="Python" />
          <p>Python</p>
        </div>
        <div className="skill">
          <img src="https://images.seeklogo.com/logo-png/17/2/html5-with-wordmark-blackwhite-logo-png_seeklogo-176954.png" alt="HTML" />
          <p>HTML</p>
        </div>
        <div className="skill">
          <img src="https://thumbs.dreamstime.com/b/css-letter-logo-design-black-background-css-creative-initials-letter-logo-concept-css-letter-design-css-letter-logo-design-220317823.jpg" alt="CSS" />
          <p>CSS</p>
        </div>
      </div>
      <h3 className="tools-title">Tools and Platforms</h3>
      <div className="tools-icons">
        <div className="tools">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi9azji1P3eHGE-4K5f_uogVJk8glXpar_cg&s" alt="ServiceNow" />
          <p>ServiceNow</p>
        </div>
        <div className="tools">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2sWIwNrqZXnmkybebuof7BX841YTGYh_5jg&s" alt="VS Code" />
          <p>VS Code</p>
        </div>
        <div className="tools">
          <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png" alt="Github" />
          <p>GitHub</p>
        </div>
      </div>
    </section>
  );
};
export default Skills;
