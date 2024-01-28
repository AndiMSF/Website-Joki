import { useEffect, useState } from "react";
import "./sidebarAdmin.css";
import { Link, useNavigate } from "react-router-dom";

const SidebarAdmin = ({ children }) => {
  const navigate = useNavigate();
  // Active states for each link
  const [activeLinks, setActiveLinks] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);

  const handleActive = (index) => {
    // Path
    const paths = [
      "/admin",
      "/admin/orders",
      "/admin/transactions",
      "/admin/games",
      "/admin/prices",
    ];
    navigate(paths[index]);
    // Create a new array with the same length as activeLinks and set all values to false
    const newActiveLinks = Array(activeLinks.length).fill(false);
    // Set the clicked link's state to true
    newActiveLinks[index] = true;
    setActiveLinks(newActiveLinks);

    console.log(newActiveLinks);

    // Save active state to localStorage
    localStorage.setItem("activeLinks", JSON.stringify(newActiveLinks));
  };

  // Load active state from localStorage on component mount
  useEffect(() => {
    const storedActiveLinks = JSON.parse(
      localStorage.getItem("activeLinks")
    ) || [true, false, false, false, false];
    setActiveLinks(storedActiveLinks);
  }, []);

  return (
    <div className="content__container__admin">
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
            <h1>Transactions</h1>
          </div>
          <div
            className={activeLinks[3] ? "link_active" : "link"}
            onClick={() => handleActive(3)}
          >
            <h1>Games</h1>
          </div>
          <div
            className={activeLinks[4] ? "link_active" : "link"}
            onClick={() => handleActive(4)}
          >
            <h1>Prices</h1>
          </div>
        </div>
      </div>
      <div className="children__container__admin">{children}</div>
    </div>
  );
};

export default SidebarAdmin;
