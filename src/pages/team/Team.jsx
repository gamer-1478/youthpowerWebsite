//Copyright © 2020 Aayush Garg. All rights reserved.
//Author Gamer-1478

import React from "react";
import Cards from "../../components/card/Card";
import "./Team.css";

function Team() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <div id="projects" className="project-root">
        <div>
          <h1 className="project-header">Our Team</h1>
        </div>
        <div id="project-container" className="project-container">
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default Team;
