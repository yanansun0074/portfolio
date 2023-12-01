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
  console.log(list);

  return (
    <div id="body">
      {/* {Object.keys(content).forEach((key, index) => {
        list.push(key);
      })} */}
      {list.map((key, index) => {
        console.log("there are some keys");
        if (key.includes("image")) {
          console.log("image found");
          let img = new Image();
          img.src = content[key];
          return <img src={content[key]} alt="projectDetail" />;
        }
        if (key.includes("text")) {
          let p = document.createElement("p");
          p.innerHTML = content[key];
          container.appendChild(p);
          return <p>{content[key]}</p>;
        }
        if (key.includes("list")) {
          return (
            <ul>
              {content[key].map((x) => {
                return <li>{x}</li>;
              })}
            </ul>
          );
        }
        if (key.includes("link")) {
          return (
            <a href={content[key].link_source}>{content[key].link_text} </a>
          );
        }
        if (key.includes("video")) {
          return (
            <div>
              <iframe
                width="1080"
                height="720"
                src={content[key]}
                title="What do I do on Mid-Autum Festival"
              ></iframe>
            </div>
          );
        }
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

        return <div></div>;
      })}
    </div>
  );

  // return (
  //   <div>

  //     {/* {Object.keys(content).forEach((key, index) => {
  //       console.log("there are some keys");
  //       if (key.includes("image")) {
  //         console.log("image found");
  //         let img = new Image();
  //         img.src = content[key];

  //         container.appendChild(img);
  //       }
  //       if (key.includes("text")) {
  //         let p = document.createElement("p");
  //         p.innerHTML = content[key];
  //         container.appendChild(p);
  //       }
  //       return;
  //     })} */}
  //     {/* {content.forEach((key, value) => {
  //       if (key.includes("image")) {
  //         return <div>image+1</div>;
  //       } else if (key.includes("text")) {
  //         return <p> {value}</p>;
  //       }
  //       return <div>key+1</div>;
  //     })} */}
  //     {/* <div>key</div> */}
  //   </div>
  // );
}

export default Meta;
