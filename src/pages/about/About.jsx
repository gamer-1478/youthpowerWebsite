//Copyright © 2020 Aayush Garg. All rights reserved.
//Author Gamer-1478

import React from "react";
import "./About.css";

function AboutMe() {
  const openNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div id="aboutme" className="Aboutme-root">
      <div>
        <h1 className="aboutme-header">About Us</h1>
      </div>
      <div className="ohk-root">
        <div id="aboutme-container" className="aboutme-container">
          <p className="aboutme-text">
            “There’s one issue that will define the contours of this century
            more dramatically than any other, and that is the urgent threat of a
            changing climate”-Barack Obama
            <br></br>
            <br></br>
            Carbon is the 15th most abundant element in the Earth's crust, and
            the fourth most abundant element in the universe by mass after
            hydrogen, helium and oxygen. It is essential to all known living
            systems and without it life as we know it could not exist. However,
            even after such versatility, carbon emissions are known to cause
            global warming and are a major threat to the environment.
            <br></br>
            <br></br>
            Therefore, with blessings from chairperson ma'am- Dr Mrs Amita
            Chauhan, under the guidance of principal ma'am - Ms Arti Chopra and
            under the mentorship of Ms Deepika Bailey, Team Samanvay aims to
            work towards reusing the carbon emitted from the polluted air of
            various industries and fabricating it into something useful for the
            future generations.{" "}
          </p>
        </div>
        <img style={{maxWidth:'100%'}} alt='ok' src="https://cdn.discordapp.com/attachments/873106179151257620/1042326408954920980/unknown.png" height={'70%'}></img>
      </div>
    </div>
  );
}

export default AboutMe;
