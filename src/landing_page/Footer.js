import React from "react";

function Footer() {
  return (
    <div className="footer" style={{ backgroundColor: "grey", padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* First Column */}
        <div style={{ flex: 1, padding: "10px" }}>
          {/* Row 1 */}
          {/* <div style={{ marginBottom: "20px" }}>
            <h1>Contact</h1>
            <h4>Feel free to connect at arpitdeshmukh21@gmail.com</h4>
          </div> */}
          {/* Row 2 */}
          <div>
            <h4>"We rise by lifting others"</h4>
          </div>
        </div>

        {/* Second Column */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <a href="https://www.linkedin.com/in/arpit-deshmukh-08877227a/" style={{ textDecoration: "none" }}>
            <i className="fa fa-linkedin-square" aria-hidden="true" style={{ fontSize: "24px", marginRight: "8px" }}></i>
            LinkedIn
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            <i className="fa fa-github" aria-hidden="true" style={{ fontSize: "24px", marginRight: "8px" }}></i>
            Github
          </a>
          <a href="https://www.instagram.com/_arpitdeshmukh/" style={{ textDecoration: "none" }}>
            <i className="fa fa-instagram" aria-hidden="true" style={{ fontSize: "24px", marginRight: "8px" }}></i>
            Instagram
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            <i className="fa fa-twitter" aria-hidden="true" style={{ fontSize: "24px", marginRight: "8px" }}></i>
            Twitter
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            <i className="fa fa-facebook-official" aria-hidden="true" style={{ fontSize: "24px", marginRight: "8px" }}></i>
            Facebook
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            <i className="fa fa-youtube-play" aria-hidden="true" style={{ fontSize: "24px", marginRight: "8px" }}></i>
            YouTube
          </a>
        </div>
      </div>
      <hr style={{ marginTop: "20px" }} />
      <h6 style={{ textAlign: "center", margin: "10px 0" }}>Arpit Deshmukh</h6>
    </div>
  );
}

export default Footer;
