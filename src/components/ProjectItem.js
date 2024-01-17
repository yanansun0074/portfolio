import React from "react";
// When onClick, navigate to another page
import { useNavigate } from "react-router-dom";

function ProjectItem({ route, image, name, intro, date, skill }) {
  // Create a function called navigate == useNavigate();
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        switch (name) {
          case "Pandemic Censorship":
            window.location.href =
              "https://colab.research.google.com/drive/1fjkM-Hrzs3P1YHsMWPJ14r2ckhy_G3J5?usp=sharing";
            break;

          default:
            navigate("/project/" + route);
        }
        // Which page to go to
        // Set each projectItem's unique id in Projects.js
        // Put the unique route path after project/
        // navigate("/project/" + route);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
      <p className="intro"> {intro} </p>
      <p className="date"> {date} </p>
      <p className="skill">{skill}</p>
    </div>
  );
}

export default ProjectItem;
