import React, { useEffect, useState } from "react";
import AboutMe from "../about/About";
import "./Landing.css";

function Landing() {
  const [socialSizeFa, setsocialSizeFa] = useState(" fa-lg");
  const resizeSocialSize = () => {
    if (window.innerWidth <= 960) {
      setsocialSizeFa("");
    } else {
      setsocialSizeFa(" fa-lg");
    }
  };
  window.addEventListener("resize", resizeSocialSize);
  useEffect(() => {
    resizeSocialSize();
  }, []);

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const instagram = "https://www.instagram.com/samanvay.aisg46";
  const spotify = "https://open.spotify.com/show/0JfZPmqz4kDzbk30KDbCRb";
  const mail =
    "mailto:samanvay.aisg46@outlook.com?subject=Hi%20There,%20Wanted%20To%20Contact%20You&body=Message%20Goes%20Here";

  const apple = "https://podcasts.apple.com/us/podcast/samanvay-decoded/id1661908398";
  
  return (
    <>
      <div className="landingContainer">
        <div className="leftLanding">
          <div className="contentLanding">
            <h1>Samanvay</h1>
            <p>
              Reusing the carbon emitted from polluted air of various industries
              and fabricating it into something useful for the future
              generations
            </p>
          </div>
          <div className="social">
            <div className="social-icons-about-me">
              <p
                className="social-icon-link-about spotify"
                onClick={() => {
                  openInNewTab(spotify);
                }}
                aria-label="Spotify"
              >
              <i className={"fab fa-spotify" + socialSizeFa} />
              </p>
              <p
                className="social-icon-link-about apple"
                onClick={() => {
                  openInNewTab(apple);
                }}
                aria-label="apple"
              >
                <i className={"fab fa-apple" + socialSizeFa} />
              </p>

              <p
                className="social-icon-link-about instagram"
                onClick={() => {
                  openInNewTab(instagram);
                }}
                aria-label="Instagram"
              >
                <i className={"fab fa-instagram" + socialSizeFa} />
              </p>
              <p
                className="social-icon-link-about email"
                onClick={() => {
                  openInNewTab(mail);
                }}
                aria-label="email"
              >
                <i className={"fas fa-envelope" + socialSizeFa} />
              </p>
            </div>
          </div>
        </div>
        <div className="rightLanding">
          <img
            alt="landing"
            src="https://cdn.discordapp.com/attachments/873106179151257620/1042326430844985376/unknown.png"
          ></img>
        </div>
      </div>
      <AboutMe></AboutMe>
    </>
  );
}

export default Landing;
