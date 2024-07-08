import React from "react";
import "../styles/Experience.css";
// import WorkSample from "../components/WorkSample";
import { ExperienceList } from "../helpers/ExperienceList";

function ExperienceSection({
  title,
  company,
  company_link,
  time,
  role,
  reflection,
  // sample
}) {
  const samples = ExperienceList.find((p) => p["title"] === title).samples;

  return (
    // <li className="__item">
    <div class="card-component">
      <h1 class="__title">
        {title} @ <a href={company_link}>{company}</a>
      </h1>
      <h2 class="__year">{time}</h2>
      <h2 class="work-sample-header">Work</h2>
      <p class="__text" style={{ whiteSpace: "pre-line" }}>
        {role}
      </p>
      <div class="__work-sample">
        <div class="work-sample-grids">
          {samples?.map((sample) => {
            return (
              <div class="responsive">
                <div class="gallery">
                  <img src={sample.sample_img} alt="sample img"></img>
                </div>
              </div>
            );
          })}
        </div>
        <p class="__text" style={{ whiteSpace: "pre-line" }}>
          {reflection}
        </p>
      </div>
    </div>
    // </li>
  );
}

export default ExperienceSection;
