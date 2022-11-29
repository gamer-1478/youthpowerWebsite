import React from "react";
import "./Footer.css";

const openNewTab = (url) => {
  window.open(url, "_blank");
};

function Footer() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <p style={{
          display: "flex",
          left: "50",
          bottom: "0",
          margin: "0",
          marginBottom: "1px"  }}>
        Developed With 💖 By &nbsp;
        <div
          style={{ cursor: "pointer", bottom: "0" }}
          onClick={() => openNewTab("https://aayushgarg.net")}>
          Aayush Garg
        </div>
      </p>
    </div>
  );
}

export default Footer;
