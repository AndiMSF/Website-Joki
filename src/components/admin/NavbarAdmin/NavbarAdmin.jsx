import { useState } from "react";
import "./navbarAdmin.css";

const NavbarAdmin = () => {
  // Active states for each link
  const [activeLinks, setActiveLinks] = useState([true, false, false]);

  const handleActive = (index) => {
    // Create a new array with the same length as activeLinks and set all values to false
    const newActiveLinks = Array(activeLinks.length).fill(false);
    // Set the clicked link's state to true
    newActiveLinks[index] = true;
    setActiveLinks(newActiveLinks);
  };

  return (
    <div className="navbar__admin">
      <div className="logo">
        <h1>EasyJoki</h1>
      </div>
      <div className="content">
        <div
          className={activeLinks[0] ? "link_active" : "link"}
          onClick={() => handleActive(0)}
        >
          <h1>Dashboard</h1>
        </div>
        <div
          className={activeLinks[1] ? "link_active" : "link"}
          onClick={() => handleActive(1)}
        >
          <h1>Orders</h1>
        </div>
        <div
          className={activeLinks[2] ? "link_active" : "link"}
          onClick={() => handleActive(2)}
        >
          <h1>Transaction</h1>
        </div>
      </div>
    </div>
  );
};

export default NavbarAdmin;
