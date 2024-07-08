import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import About from "./Pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import ProjectDisplay from "./Pages/ProjectDisplay";
import ScrollToTop from "./components/ScrollToTop";
import Experience from "./Pages/Experience";
import Writing from "./Pages/Writing";

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Navbar />
        {/* the Navbar is inside the router system but not a route */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Portfolio />} />
          {/* id in path, goes to project page of that id */}
          <Route path="/project/:route" element={<ProjectDisplay />} />
          {/* <Route path="/aboutme" element={<About />} /> */}
          <Route path="/experience" element={<Experience />} />
          <Route path="/writing" element={<Writing />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
