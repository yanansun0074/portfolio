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
        <script
          async
          type="module"
          src="https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js"
        ></script>
        <zapier-interfaces-chatbot-embed
          is-popup="true"
          chatbot-id="cm9kes8p5006hxmfcbcbzyxo1"
        ></zapier-interfaces-chatbot-embed>
        <div className="prompt">
          {/* <p>
            A multi-media storyteller ethusiastic about the intersection of
            technology and media.
          </p> */}
          <div className="who alef">
            <p>
              I am an AI integration developer, multi-media storyteller,
              quantitative researcher, game developer, graphics editor and more.
              My work explores the intersection of media and technology, with a
              focus on creating tools, stories, and experiences that help people
              better understand the world around them.{" "}
            </p>
            <p>
              {" "}
              I am currently an{" "}
              <a href="https://www.nytco.com/careers/early-career-opportunities/newsroom-fellowship/2026-27-fellows/">
                AI Initiative fellow
              </a>{" "}
              at the New York Times, where I help journalists use artificial
              intelligence to discover and tell stories that would be difficult
              to uncover through traditional reporting alone. Previously, I
              worked as a Newsroom AI and Automation Engineer at{" "}
              <a href="https://www.ctinsider.com/">
                Hearst Connecticut Media Group
              </a>
              , where I transformed text based journalism into multimodal
              audience experiences through automation. As a{" "}
              <a href="https://www.cislm.org/about/">
                data engineer & researcher
              </a>{" "}
              at UNC Hussman School of Journalism and Media, I conducted
              quantitative research on the sustainability of local news and
              developed innovative solutions for local newsrooms. At{" "}
              <a href="https://www.gazzetta.xyz/">Gazzetta</a> , I contributed
              to a framework for newsrooms to conduct remote audience research,
              especially in challenging media censorship environments. We
              applied and improved this framework through a remote audience
              research project focused on blue collar migrant workers in China.
            </p>
            <p>
              I was also an Entrepreneurship Fellow at the Brown Institute in
              New York City, developing{" "}
              <a href="https://brown.columbia.edu/the-winners-of-our-venture-challenge/">
                PrivaSee
              </a>
              , an AI-driven tool that analyzes, visualizes, and scores mobile
              app’s privacy policies. I am also the co-founder of{" "}
              <a href="https://dataatlarge.com/">Data At Large</a>, a studio
              that innovate in data consumptions and storytelling via AI, data
              visualization, etc.
            </p>
            <p>
              I received my Master’s of Journalism and Computer Science degree
              at Columbia University. For my milestone projects, I reported on{" "}
              <a href="https://yanans.shorthandstories.com/city-of-non-stop-sidewalk-sheds/">
                sidewalk sheds’ impacts on New York City’s local businesses
              </a>{" "}
              and explored the use of 3D data visualization in journalism. I
              developed a headset-based interactive VR app{" "}
              <a href="https://yanansun0074.github.io/portfolio/#/project/meta-mapper">
                “Meta Mapper”
              </a>{" "}
              for the immersive touring and guiding experience at the
              Metropolitan Museum of Art. I also worked as research assistant at
              the Computer Graphics and User Interface lab at Columbia
              University, contributing to the UI of{" "}
              <a href="https://graphics.cs.columbia.edu/home">
                a XR application for glacial research
              </a>
            </p>
          </div>
        </div>
        <div className="updates">
          <h2>So, what's new...</h2>
          <div className="updates-items">
            <ul>
              <li>
                <a href="https://www.cislm.org/research/local-newsbot-studio/local-newsbot-studio-report/">
                  New Research 🔍 Local Newsbot Studio research report published
                </a>
              </li>
              <li>
                <a href="https://2025.srccon.org/schedule/#_session-opportunities-information-safety">
                  Talk at SRCCON 2025 about information safety
                </a>
              </li>

              <li>
                <a href="https://2025.open-data.nyc/event/make-your-3d-data-viz-map/">
                  Workshop: Make Your 3D Data Viz Map at NYC Open Data Week 2025
                </a>
              </li>

              {/* <li>
                <a href="https://docs.google.com/presentation/d/1AC1ZC64b2cpht30UePaevOKpJKJxLuFr/edit">
                  Talk - "How we built a chatbot, and should you build one,
                  too?" at NC News & Info Summit
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
