import React, { useEffect, useState } from "react";
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

  const instagram = "https://www.instagram.com/aayushgarg.official";
  const youtube = "https://www.youtube.com/channel/UC4PYDYab2Rf8Dz1VPzrCPfQ";
  const twitter = "https://twitter.com/gamer_1478";
  const Facebook = "https://www.facebook.com/aayush.garg.official/";
  const mail =
    "mailto:contact@aayushgarg.net?subject=Hi%20There,%20Wanted%20To%20Contact%20You&body=Message%20Goes%20Here";

  return (
    <div className="landingContainer">
      <div className="leftLanding">
        <div className="contentLanding">
          <h1>Samanvay</h1>
          <p>
            Reusing the carbon emitted from polluted air of various industries
            and fabricating it into something useful for the future generations
          </p>
        </div>
        <div className="social">
          <div className="social-icons-about-me">
            <p
              className="social-icon-link-about facebook"
              onClick={() => {
                openInNewTab(Facebook);
              }}
              aria-label="Facebook"
            >
              <script></script>
              <i className={"fab fa-facebook-f" + socialSizeFa} />
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
              className="social-icon-link-about youtube"
              onClick={() => {
                openInNewTab(youtube);
              }}
              aria-label="Youtube"
            >
              <i className={"fab fa-youtube" + socialSizeFa} />
            </p>
            <p
              className="social-icon-link-about twitter"
              onClick={() => {
                openInNewTab(twitter);
              }}
              aria-label="Twitter"
            >
              <i className={"fab fa-twitter" + socialSizeFa} />
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
  );
}

export default Landing;
