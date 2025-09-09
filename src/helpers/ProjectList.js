import theMet from "../images/MetaMapper_poster.png";
import uname from "../images/CommonUsername_choose.gif";
import golf from "../images/MiniGolf_poster.png";
import food from "../images/ManhattanFood_interactive.gif";
import space from "../images/SpaceCleanProject_poster.png";
import podcast from "../images/Podcast_poster.png";
import home from "../images/HomeSweetHome_Poster.png";
import sea from "../images/FrozenSea_poster1.png";
import concert from "../images/CatConcert_poster.png";
import autumn from "../images/MidAutumnFest_poster.png";
import ceval from "../images/UNCWebEval_poster.png";
import squirrel from "../images/Squirrel_Map2.gif";
import censor from "../images/ChinaCensorship_cover.png";
import icesheet from "../images/IcesheetVR_cover.png";
import shed from "../images/SidewalkShed_cover.gif";
import queer from "../images/QueerRepresentation_cover.png";
import privasee from "../images/PrivaSee_poster.png";
import wnc from "../images/WNC_poster.png";
import oscar from "../images/oscar_poster.jpg";
import airline from "../images/Airline_poster.webp";
import funds from "../images/Private_funds_poster.png";
import chatbot from "../images/Newsbot_poster.png";

export const projectList = [
  {
    name: "Local NewsBot Studio",
    date: "2025-08",
    image: chatbot,
    skill: "AI, Research",
    intro: "Build chatbot with and for local news",
    refs: "https://www.cislm.org/research/local-newsbot-studio/",
    // route: "oscar-best-pictures",
    tags: ["AI", "research", "web app"],
  },
  {
    name: "Local-based Private Funds Map",
    date: "2025-05",
    image: funds,
    skill: "Data Viz, Database",
    intro: "A map of U.S. local private funds",
    refs: "https://yanansun0074.github.io/local-private-fund-map/",
    // route: "oscar-best-pictures",
    tags: ["data viz", "database"],
  },
  {
    name: "Oscar Best Picture in Box Office",
    date: "2025-03",
    image: oscar,
    skill: "Data Viz, D3.js",
    intro: "Best picture, low box office",
    route: "oscar-best-pictures",
    tags: ["data viz"],
  },
  {
    name: "Local News in the Eye of the Storm",
    date: "2025-03",
    image: wnc,
    skill: "Data Analysis, Research",
    refs: "https://www.cislm.org/research/local-news-in-the-eye-of-the-storm/",
    intro: "An analysis of Hurricane Helene coverage in Western North Carolina",
    tags: ["data viz", "research"],
  },
  {
    name: "Airline On-time Performance",
    date: "2024-09",
    image: airline,
    skill: "Data Viz",
    refs: "https://medium.com/@yananbecca/after-an-overnight-delay-i-visualized-carriers-on-time-performance-c81b80259b6c",
    intro: "Which airline delayed the most?",
    tags: ["data viz"],
  },
  {
    name: "PrivaSee",
    date: "W.I.P",
    image: privasee,
    skill: "AI, Product, NLP, UI",
    refs: "https://yanansun0074.github.io/privasee/",
    intro:
      "An AI-powered tool that analyzes, visualizes, and scores privacy policies.",
    tags: ["UI/UX", "design", "web app"],
  },

  {
    refs: "https://quiet-shell-901.notion.site/Queer-Representation-in-Feature-Films-752028016d3a4529a1bfc3f28c50f04e",
    name: "Queer Representation in Feature Films",
    date: "W.I.P",
    image: queer,
    skill: "Reporting, Data Viz",
    intro: "More queer character, but less queer representation",
    tags: ["data viz", "reporting"],
  },
  {
    refs: "https://github.com/yanansun0074/City-of-Sidewalk-Shed",
    name: "3D Geospatial Mapping for Journalism",
    date: "2024-04",
    image: shed,
    skill: "Reporting, 3D, Data Viz",
    intro:
      "A beginner-friendly pipeline with PyDeck to prototype 3D geospatial mapping.",
    tags: ["data viz", "3D"],
  },
  {
    route: "vr-for-icesheet",
    name: "VR Navigation for Ice Sheets",
    date: "2023-12",
    skill: "VR, C#, UI",
    intro: "A VR navigation system in polar for glacial exploration",
    image: icesheet,
    tags: ["UI/UX", "3D"],
  },
  // {
  //   route: "covid-censorship",
  //   name: "Pandemic Censorship",
  //   image: censor,
  //   date: "2023-12",
  //   skill: "Python, Dataviz",
  //   intro:
  //     "A visualization of censored online articles in China before and after the pandemic.",
  // },
  {
    route: "squirrel-census",
    name: "Squirrel Census",
    image: squirrel,
    date: "2023-10",
    skill: "Blender, R",
    intro: "3D data visualization of central park squirrel census",
    tags: ["data viz", "3D"],
  },
  {
    route: "meta-mapper",
    name: "Met(a) Mapper",
    image: theMet,
    date: "2023-05",
    skill: "VR, 3D UI",
    intro: "Immersive VR experience of the Metropolitian Museum of Art",
    tags: ["3D", "UI/UX"],
  },
  {
    route: "common-username",
    name: "Common Usernames",
    image: uname,
    date: "2023-05",
    skill: "Data Viz, D3.js",
    intro: "A visualization of how quickly common usernames were taken",
    tags: ["data viz"],
  },
  {
    route: "mini-golf",
    name: "AR/VR Mini-Golf",
    image: golf,
    date: "2023-03",
    skill: "AR, VR, 3D UI",
    intro: "Build your own mini-golf course in AR, and play it in VR!",
    tags: ["3D", "UI/UX"],
  },
  {
    route: "manhattan-food",
    name: "Manhattan Food Hunt",
    image: food,
    date: "2023-03",
    skill: "Data Viz, D3.js",
    intro:
      "An interactive guide on Manhattan restaurants that cater to your apetitie",
    tags: ["data viz"],
  },
  {
    route: "space-cleanup",
    name: "Project Space Cleanup",
    image: space,
    date: "2023-02",
    skill: "Mobile Game, UI",
    intro: "Collect as many space trash as possible",
    tags: ["UI/UX"],
  },
  {
    route: "podcast-onomatopoeia",
    name: "Episodes of Onomatopoeia",
    image: podcast,
    date: "2022-12",
    skill: "Audio, Podcast",
    intro: "Two episodes for podcast by Columbia Graduate School of Journalism",
    tags: ["audio"],
  },
  {
    route: "home-sweet-home",
    name: "Home Sweet Home",
    image: home,
    date: "2022-05",
    skill: "Documentary",
    intro: "Home across mountains and seas",
    tags: ["video"],
  },
  {
    route: "frozen-sea",
    name: "Frozen Sea",
    image: sea,
    date: "2021-11",
    skill: "Documentary",
    intro: "An environmental documentary",
    tags: ["video"],
  },
  {
    route: "course-eval",
    name: "Course Eval for UNC",
    image: ceval,
    date: "2020-12",
    skill: "JavaScript, Html, CSS, MongoDB",
    intro: "A course evaluation website for Tar Heels",
    tags: ["web app"],
  },
  {
    route: "cat-concert",
    name: "Cat's concert",
    image: concert,
    date: "2020-12",
    skill: "After Effect",
    intro: "Welcome to cat concert!",
    tags: ["video"],
  },
  {
    route: "mid-autumn",
    name: "Mid Autumn Festival",
    image: autumn,
    date: "2020-10",
    skill: "After Effect",
    intro: "What do I usually do on Mid Autumn Festival",
    tags: ["video"],
  },
];
