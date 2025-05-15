

import React, { useState } from 'react';
import "./Project.css";
import { FaGlobe, FaLaptop } from 'react-icons/fa6';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const projects = [
  {
    title: "Fashion Fusion – A Modern Clothing Website",
    description: "Fashion Fusion is a sleek and modern Frontend-only website designed to showcase trendy fashion collections. Built using HTML, CSS, and JavaScript. The website features a clean and elegant UI, ensuring a seamless browsing experience for users interested in fashion trends. It is fully responsive, adapting beautifully to different screen sizes.",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://fashion-fusion-frontend-n205.onrender.com",
    codeLink: "https://github.com/Shivangi614/Fashion-Fusion-Frontend.git",
  },
  {
    title: "Task Management System – Streamline Your Productivity",
    description: "The Task Management System is a Full-stack web application built using React, Node.js, and MongoDB to help users efficiently manage their daily tasks. Users can add, edit, delete, and update tasks seamlessly. It ensures persistent data management using MongoDB and provides a dynamic UI through React.",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    liveLink: "https://todoapp-frontend-4978.onrender.com",
    codeLink: "https://github.com/Shivangi614/TODOAPP.git",
  },
  {
    title: "Weather Tracker – Stay Updated Anytime, Anywhere",
    description: "The Weather Application is a Web application built using React and APIs to provide real-time weather updates. Users can search for a city and instantly get details such as temperature, humidity, and weather conditions. It uses React's state management and is fully responsive.",
    techStack: ["React", "API", "CSS"],
    liveLink: "https://weather-application-zgmr.onrender.com",
    codeLink: "https://github.com/Shivangi614/Weather-Application.git",
  },
];

const Project = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerPadding: "40px",
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div id='project' className='project'>
      <div className='project-title'>
        <h2>Showcasing my <span className="highlight">Work</span></h2>
      </div>
      <div className="project-container">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="project-slide">
              <div className='project-format'>
                <h3>{project.title}</h3>
                <p
                  onClick={() => toggleExpand(index)}
                  className={`project-description ${expandedIndex === index ? 'expanded' : ''}`}
                >
                  {project.description}
                </p>
                <div className="tech-stack">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className='tech'>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveLink} className="live-link" target="_blank" rel="noopener noreferrer"><FaGlobe /> Live Demo</a>
                  <a href={project.codeLink} className="code-link" target="_blank" rel="noopener noreferrer"><FaLaptop /> Source Code</a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Project;



