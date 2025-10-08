import React, { useState } from "react";
import ProjectItem from "../components/ProjectItem";
import TimeGrid from "../components/TimeGrid";
import { projectList } from "../helpers/ProjectList";

import "../styles/Project.css";

const Portfolio = () => {
  const [selectedTag, setSelectedTag] = useState("all");

  const tags = ["all", "data viz", "UI/UX", "3D", "web app", "video", "audio"];

  // Filtered projects based on selectedTag
  const filteredProjects = projectList.filter((project) =>
    selectedTag === "all" ? true : project.tags.includes(selectedTag)
  );
  return (
    <div className="projects alata-regular">
      <TimeGrid />
      <h1 className="headline">Project</h1>
      {/* Tag buttons */}
      <div className="tag-container">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`tag-button ${selectedTag === tag ? "active" : ""}`}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="projectList">
        {filteredProjects.map((project) => {
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
};

export default Portfolio;

// function Portfolio() {
//   return (
//     <div className="projects alata-regular">
//       <h1 className="headline">Project</h1>
//       <div className="projectList">
//         {projectList.map((project) => {
//           return (
//             <ProjectItem
//               className="alata-regular"
//               route={project.route}
//               name={project.name}
//               image={project.image}
//               date={project.date}
//               intro={project.intro}
//               skill={project.skill}
//               refs={project.refs}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }
