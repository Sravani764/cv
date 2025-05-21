import React from "react";
import "./../styles/Header.css";

const Header = () => {
  const navItems = ["Home", "About", "Skills", "Education", "Projects", "Contact", "Resume"];

  const handleScroll = (section) => {
    const lower = section.toLowerCase();
    if (lower === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (lower === "resume") {
      window.open("https://drive.google.com/file/d/1Dz-bU8nL_O28AqtKOefIQksck-Ykeij0/view", "_blank");
    } else {
      const element = document.getElementById(lower);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo-container">
          <img
            src="https://img.freepik.com/premium-vector/sk-logo-design_705304-207.jpg"
            alt="Logo"
            className="logo-image"
          />
        </div>
        <ul className="nav-links">
          {navItems.map((item, index) => (
            <li key={index} className="nav-item" onClick={() => handleScroll(item)}>
              {item}
            </li>
          ))}
        </ul>
        <div className="toggle-container">
          <label className="switch">
            <input type="checkbox" />
           
          </label>
        </div>
      </nav>
    </header>
  );
};

export default Header;

