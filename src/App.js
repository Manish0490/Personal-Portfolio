import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import NavBarComp from "./components/navigation-bar";
import HomePage from "./homepage/homepage";
import Education from "./education/education";
import Experience from "./experience/experience";
import Projects from "./projects/projects";
import Testimonials from "./testimonials/testimonials";
import GiveTestimonial from "./give-testimonial/give-testimonial";
import Resume from "./resume/resume";
import NoPageFound from "./components/nopage";

import "./App.css";
function App() {
  return (
    <div className="main-background">
      <BrowserRouter>
      <NavBarComp/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/give" element={<GiveTestimonial />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </BrowserRouter>
      <h1>This is app</h1>
    </div>
  );
}

export default App;
