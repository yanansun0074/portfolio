import React from "react";
import ProjectItem from "../components/ProjectItem";
import { projectList } from "../helpers/ProjectList";

import "../styles/Project.css";

function Portfolio() {
  return (
    <div className="projects alata-regular">
      <h1 className="headline">Projects</h1>
      <div className="projectList">
        {projectList.map((project) => {
          return (
            <ProjectItem
              className="alata-regular"
              route={project.route}
              name={project.name}
              image={project.image}
              date={project.date}
              intro={project.intro}
              skill={project.skill}
              refs={project.refs}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
