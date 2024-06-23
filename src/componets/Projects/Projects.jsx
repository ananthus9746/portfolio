import React, { useState, useEffect } from 'react';
import style from './Projects.module.css';
import { GoArrowUpRight } from 'react-icons/go';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Projects({ projects, uiUxProjects, developmentProjects }) {
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      document.querySelectorAll(`.${style.card}`).forEach(card => {
        card.classList.add(style.show);
      });
    }, 100); // Adjust the delay if necessary

    return () => clearTimeout(timeout);
  }, [showAll]);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const filteredProjects = projects.filter(project =>
    (developmentProjects && project.catagory === 'development') ||
    (uiUxProjects && project.catagory === 'ui_ux')
  );

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <>
      <div className={style.head}>
        {developmentProjects ? 'Development Works' : 'UI/UX Design Works'}
      </div>
      <div className={style.project_container}>
        {displayedProjects.map((project, index) => (
          <div className={style.card} key={index}>
            <a href={project.link}>
              <div className={style.arrow}>
                <GoArrowUpRight size={26} />
              </div>
            </a>
            <p className={style.project_name}>{project.name}</p>
            <img src={project.image} alt={project.name} className={style.image} />
          </div>
        ))}
      </div>
      <div className={style.toggleButton} onClick={toggleShowAll}>
        {showAll ?
          <p>{developmentProjects ? 'View Less Development Projects ' :'View Less UI/UX Projects '} <IoIosArrowUp /></p> :
          <p>{developmentProjects ? 'View All Development Projects ' : 'View All UI/UX  design Projects '}  <IoIosArrowDown /></p>}
      </div>
    </>
  );
}

export default Projects;
