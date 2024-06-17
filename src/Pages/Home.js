import React from "react";
import "../styles/Home.css";
import head from "../images/Head.jpg";

function Home() {
  return (
    <div className="home">
      <div className="about alata-regular">
        <h3> Hi, My Name is Yanan Sun</h3>
        <h3> Hi, My Name is Yanan Sun</h3>
        <img src={head} alt="ME" width="200" height="200" />
        <div className="prompt">
          {/* <p>
            A multi-media storyteller ethusiastic about the intersection of
            technology and media.
          </p> */}
          <div className="who alef">
            <p>
              I’m a multi-media storyteller, game developer, graphics designer,
              video editors and more. I am interested in exploring the
              intersectionality of the media and technology. I am currently a
              entrepreneurship fellow at the Brown Institute in New York City,
              developing{" "}
              <a href="https://brown.columbia.edu/the-winners-of-our-venture-challenge/">
                PrivaSee
              </a>
              , an AI-driven tool that analyzes, visualizes, and scores mobile
              app’s privacy policies. I am also the co-founder of{" "}
              <a href="">Data at large</a>, a studio that innovate in data
              consumptions and storytelling via AI, data visualization, etc..
            </p>
            <p>
              Before that, I worked as research assistant at the Computer
              Graphics and User Interface lab at Columbia University,
              contributing to the UI of{" "}
              <a href="https://graphics.cs.columbia.edu/home">
                a XR application for glacial research
              </a>
              . I worked as the graphics designer at the United Nations for six
              months, where I independently designed and edited layouts and
              graphics of two policy publications facing global audiences.{" "}
            </p>
            <p>
              I received my Master’s of Journalism and Computer Science degree
              at Columbia University. For my milestone projects, I reported on{" "}
              <a href="https://yanans.shorthandstories.com/city-of-non-stop-sidewalk-sheds/">
                sidewalk sheds’ impacts on New York City’s local businesses
              </a>{" "}
              and explored the use of 3D data visualization in journalism. I
              also worked on a computation project about{" "}
              <a href="https://www.notion.so/Queer-Representation-in-Feature-Films-0875204751e441158dc669998967ec78?pvs=4">
                queer representation in feature films
              </a>{" "}
              with data analysis and language models, showing the changes in
              queer characters’ expression and the stories behind it. I
              produced, recorded, and edited two audio episodes of{" "}
              <a href="https://yanansun0074.github.io/portfolio/#/project/podcast-onomatopoeia">
                “Onomatopoeia”
              </a>
              , a podcast about the city by Columbia Journalism School.
            </p>
            <p>
              At the engineering school, I worked as a teaching assistant for
              Computer Graphics. I developed a headset-based interactive VR app{" "}
              <a href="https://yanansun0074.github.io/portfolio/#/project/meta-mapper">
                “Meta Mapper”
              </a>{" "}
              for the immersive touring and guiding experience at the
              Metropolitan Museum of Art.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
