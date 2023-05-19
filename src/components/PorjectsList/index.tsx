import { useState } from "react";
import { projectsData } from "../../data/projectsData";
import site from "../../images/cloud64.png";
import github from "../../images/github64.png";
import { motion } from "framer-motion";

export const ProjectList = () => {
  const [projects, setProjects] = useState(projectsData);

  const changeProjects = (index: number) => {
    const newProjects = [...projects];
    const selectedProjects = newProjects.splice(index, 1)[0];
    newProjects.unshift(selectedProjects);

    setProjects(newProjects);
  };

  return (
    <>
      {projects.map((item, index) => (
        <motion.li
          initial={{ opacity: 0, scale: 0.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          key={index}
          onClick={() => changeProjects(index)}
          className={index === 0 ? "first-project" : ""}
        >
          <img src={item.image} alt="" />
          <h2 className="title">
            <span>⬡</span> {item.name}
          </h2>
          <div className="techs-container">
            {item.techs.map((tech, index) => (
              <img key={index} src={tech.icon} alt={tech.name} />
            ))}
          </div>
          <div className="links">
            <a href={item.link}>
              <img src={site} alt="" />
            </a>
            <a href={item.github}>
              <img src={github} alt="" />
            </a>
          </div>
        </motion.li>
      ))}
    </>
  );
};
