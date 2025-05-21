import React from 'react';
import './../styles/Projects.css';

const projects = [
  {
    title: 'Dev Portfolio',
    subtitle: 'Developer Portfolio Website made in React',
    points: [
      'Developer Portfolio Website made in React',
      'Fully customisable and dynamic, easily change data and images.',
      'Includes sections like About, Skills, Projects, and Resume.',
      'Easily extendable with new project entries or custom themes.',
      'Smooth scrolling navigation across sections.'
    ],
    technologies: ['React', 'Portfolio', 'JavaScript'],
    image: "https://static.resumegiants.com/wp-content/uploads/sites/25/2022/06/09105622/Professional-portfolio-736x414.webp",
  },
  {
    title: 'Inexact Signed Wallace Tree Multiplier',
    subtitle: 'An Efficient Multiplier',
    points: [
      'An Inexact Signed Wallace Tree Multiplier design using Xilinx to perform accurate Multiplication in Image Processing and Convolutional Neural Networks',
      'Area-efficient design targeting low-power embedded systems.',
      'Inspired by approximate computing principles to balance speed, power, and accuracy.'
    ],
    technologies: ['Xilinx ISE 9.6', 'Xilinx Vivado'],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjXcBlXEh3MFj317MOgXMa6EmWEl1BejwoyflauE4cT6REkITzngBlHVFN3diPz9GPaog&usqp=CAU",
  },
  {
    title: 'Identifying Sickel Cell Anemia using Computer Vision',
    subtitle: 'Automated Detection of Sickle Cell Anemia from Microscopic Images Using Computer Vision Techniques',
    points: [
      'Used OpenCV to analyze microscopic blood smear images and detect cell shapes.',
      'Trained a machine learning or deep learning model (like CNN) to classify sickle cells vs. normal cells.',
      'Helps in early and automatic detection of Sickle Cell Anemia to support medical diagnosis.'
    ],
    technologies: ['OpenCV', 'Python', 'TensorFlow'],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzz9BSWRiBAUYZEoGbpPhlwibEw83mTrOScQ&s",
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {projects.map((project, index) => (
          <div key={index} className="card">
            {project.image && (
              <img src={project.image} alt={project.title} className="card-image" />
            )}
            <div className="card-content">
              <h2>{project.title}</h2>
              <p className="subtitle">{project.subtitle}</p>
              <div className="scrollable-content">
                <ul>
                  {project.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="tech-footer">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;


