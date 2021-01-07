import React from "react";
// import "./Footer.css";

const Footer = () => {
  return (
    <div>
      {/* <div className="row footer">footer</div> */}
      <footer
        className="bg-light text-center text-lg-start"
        style={{ position: "fixed", left: "0", bottom: "0", width: "100vw" }}
      >
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          Footer
        </div>
      </footer>
    </div>
  );
};

export default Footer;
