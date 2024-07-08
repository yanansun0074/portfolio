import React from "react";
import { projectDetail } from "../helpers/ProjectDetail";

function Meta({ name }) {
  const project = projectDetail.find((p) => p["name"] === name);
  const content = project.content;
  // const container = document.getElementById("body");
  const container = document.createElement("div");
  container.setAttribute("id", "body");
  container.innerHTML = "";
  // const list = Object.keys(content);
  // console.log(content);
  var list = [];
  const find_key = Object.keys(content).forEach((key, index) => {
    list.push(key);
  });
  // console.log(list);
  return (
    <div id="body">
      {/* {Object.keys(content).forEach((key, index) => {
        list.push(key);
      })} */}

      {list.map((key, index) => {
        // console.log("there are some keys");
        if (key.includes("image")) {
          console.log("image found");
          let img = new Image();
          img.src = content[key];
          return <img src={content[key]} alt="projectDetail" />;
        }
        // "text": normal text
        if (key.includes("text")) {
          let p = document.createElement("p");
          p.innerHTML = content[key];
          container.appendChild(p);
          return <p style={{ whiteSpace: "pre-line" }}>{content[key]}</p>;
        }
        // "list": list
        if (key.includes("list")) {
          return (
            <ul>
              {content[key].map((x) => {
                return <li>{x}</li>;
              })}
            </ul>
          );
        }
        //  "link": link to something
        if (key.includes("link")) {
          return (
            <a href={content[key].link_source}>{content[key].link_text} </a>
          );
        }
        //  "video": video src
        if (key.includes("video")) {
          return (
            <div className="video-container">
              <iframe
                width="720"
                height="480"
                src={content[key]}
                title="What do I do on Mid-Autum Festival"
              ></iframe>
            </div>
          );
        }
        // "model1": 3D models
        if (key.includes("model1")) {
          return (
            <div class="sketchfab-embed-wrapper">
              <iframe
                title="Central Park Squirrel Hectar Scatter Plot"
                frameborder="0"
                allowfullscreen
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking
                execution-while-out-of-viewport
                execution-while-not-rendered
                web-share
                width="640"
                height="480"
                src="https://sketchfab.com/models/feaf799fd0d346d8ba8b74532d8e43ac/embed"
              ></iframe>
            </div>
          );
        }
        // "model2": 3D model 2
        if (key.includes("model2")) {
          return (
            <div class="sketchfab-embed-wrapper">
              <iframe
                title="Central Park Squirrel Activity Bar Plot"
                frameborder="0"
                allowfullscreen
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking
                execution-while-out-of-viewport
                execution-while-not-rendered
                web-share
                width="640"
                height="480"
                src="https://sketchfab.com/models/6f07e243db9d4839a81258595f567720/embed"
              ></iframe>
            </div>
          );
        }

        if (key.includes("h3")) {
          return <h3>{content[key]}</h3>;
        }

        if (key.includes("h4")) {
          return <h4>{content[key]}</h4>;
        }

        return <div></div>;
      })}
    </div>
  );
}

export default Meta;
