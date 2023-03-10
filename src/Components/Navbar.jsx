import React from "react";
import "../Styles/Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="links">
          <a href="/Home">Home</a>
          <a href="/About">About</a>
          <a href="/Contact">Contact</a>
          <a href="/Profile">Profile</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
