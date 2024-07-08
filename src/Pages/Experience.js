import React from "react";
import { ExperienceList } from "../helpers/ExperienceList";
import ExperienceSection from "../components/ExperienceSection";
import "../styles/Experience.css";
// import Main from "../Layouts/Main";

function Experience() {
  return (
    <div className="experience">
      <h1 className="headline">Experience</h1>
      <div className="experience-section">
        <div class="list-component">
          {ExperienceList.map((experience) => {
            return (
              <ExperienceSection
                className="alata-regular"
                title={experience.title}
                company={experience.company}
                company_link={experience.company_link}
                time={experience.time}
                role={experience.role}
                reflection={experience.reflection}
                // samples={experience.samples}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Experience;
