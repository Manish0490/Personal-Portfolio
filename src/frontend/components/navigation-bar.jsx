import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "../css/navigator.css";

export default function NavBarComp(props) {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div>
          <img src="../assets/myPhoto.jpg" alt="Logo" class="logo" />
          <button class="hamburger">Menu</button>
        </div>
        <ul className="menuList">
          <Button size="large" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button size="large" onClick={() => navigate("/education")}>
            Education
          </Button>
          <Button size="large" onClick={() => navigate("/experience")}>
            Experience
          </Button>
          <Button size="large" onClick={() => navigate("/projects")}>
            Projects
          </Button>
          <Button size="large" onClick={() => navigate("/testimonials")}>
            Testimonials
          </Button>
          <Button size="large" onClick={() => navigate("/give")}>
            Give Testimonials
          </Button>
          <Button size="large" onClick={() => navigate("/resume")}>
            Resume
          </Button>
        </ul>
      </div>
      <section class="banner">
        <img src={require("../assets/myPhoto.jpg")} alt="My Profile Photo" />
        <div>
          <h2>Manish Kumar Reddy Gangula</h2>
          <h3>
            Masters' Student || Full Stack Developer || Technology Enthusiast
          </h3>
        </div>
      </section>
    </>
  );
}
