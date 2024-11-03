import React from "react";
import airline from "../images/articles/airline_cover.gif";
import shed from "../images/articles/sidewalkshed_cover.png";
import unity from "../images/articles/unity_tutorial_cover.png";
import sickness from "../images/articles/VR_sickness.png";
import gaze from "../images/articles/gaze.png";
import nutshell from "../images/articles/Nutshell.png";

export const ArticleList = [
  {
    title: "The Nutshell - Nov 1, 2024 Edition",
    img: nutshell,
    summary:
      "Welcome to The Nutshell, a page where I intermittently share useful tools across a variety of subjects and purposes.",
    link: "https://yanans.substack.com/p/the-nutshell",
  },
  {
    title:
      "After An Overnight Delay, I Visualized Carriers’ On-time Performance",
    img: airline,
    summary:
      "Last month, I had to spend a night at an airport hotel in D.C. when traveling back to New York. So, I make this analysis of flights on-time performance from 2023 to March 2024.",
    link: "https://quiet-shell-901.notion.site/After-An-Overnight-Delay-I-Visualized-Carriers-On-time-Performance-4020d708f16146a2af31e88420e65f63?pvs=4",
  },
  {
    title: "City of Non-stop Sidewalk Sheds",
    img: shed,
    summary:
      "Chris Vidal owns a beautiful skateboard store. “People driving on the street used to stop by and visit the store”, says Vidal. But it’s no longer the case since a sprawling sidewalk shed was built in front of his store.",
    link: "https://yanansun0074.github.io/shed_story/",
  },
  {
    title: "Unity 101: Build A Space Cleanup Game with Me",
    img: unity,
    summary:
      "A 8+ session tutorial for Unity beginners. We will make a mobile game where you drive a spaceship and collect trash.",
    link: "https://blog.csdn.net/FunkName/article/details/131482391?spm=1001.2014.3001.5501",
  },
  {
    title: "How to Relieve Sickness from VR Glasses Use",
    img: sickness,
    summary:
      "One of the major barriers to use VR glasses is the sickness caused by the difference between moving in the 3D world and being stationary in the real world.  Studies show that shrinking the Field of View during movement can help alleviate the sickness.",
    link: "https://blog.csdn.net/FunkName/article/details/136443762?spm=1001.2014.3001.5501",
  },
  {
    title: "How to Relieve Sickness from VR Glasses Use",
    img: gaze,
    summary:
      "To create immersive environments with limited performance conditions, images are often rendered real-time based on where the user's gaze is. This article talks about a learning-based model to predict gaze positions in task-oriented environments.",
    link: "https://blog.csdn.net/FunkName/article/details/139917914?spm=1001.2014.3001.5501",
  },
];
