import "./navbar.css";
import Button from "../../../Elements/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
  const handleClick = () => {
    props.navbarClick(!props.sidebarCondition); // Pass the opposite value of isClick
    console.log("CLICK HAMBURGER " + !props.sidebarCondition);
  };

  return (
    <div className="navbar__container">
      <h1>Easy Joki</h1>
      <div className="navbar__middle">
        <h1
          style={
            props.isBeranda && {
              color: "#5227CC",
              borderBottom: "1px solid #7749F8",
            }
          }
        >
          Beranda
        </h1>

        <h1>Fitur</h1>
        <h1>Daftar Harga</h1>
      </div>
      <div className="navbar__right">
        <Button title="Add Game" href="/add-game" />
        <Button title="Masuk" href="/login" />
      </div>
      {/* Hamburger Menu */}
      <div className="hamburger__container">
        <FontAwesomeIcon icon={faBars} onClick={handleClick} />
      </div>
    </div>
  );
};

export default Navbar;
