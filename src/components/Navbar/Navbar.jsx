import "./navbar.css";
import Button from "../../Elements/Button/Button";

const Navbar = (props) => {
  return (
    <div className="navbar__container">
      <h1>Easy Joki</h1>
      <div className="navbar__middle">
        <h1 style={props.isBeranda && { color: "#5227CC", borderBottom: "1px solid #7749F8" }}>
          Beranda
        </h1>

        <h1>Fitur</h1>
        <h1>Daftar Harga</h1>
      </div>
      <div className="navbar__right">
        <Button title="Add Game" />
        <Button title="Masuk" />
      </div>
    </div>
  );
};

export default Navbar;
