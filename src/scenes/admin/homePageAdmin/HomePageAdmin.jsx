import "./homePageAdmin.css";
import NavbarAdmin from "../../../components/admin/NavbarAdmin/NavbarAdmin";
import ProfilePhoto from "../../../images/neon.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHourglassHalf,
  faX,
  faCheck,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";
import Charts from "../../../components/admin/Charts/Charts";
import DataTables from "../../../components/admin/DataTables/DataTables";


const HomePageAdmin = () => {
  return (
    <div className="content__container__admin">
      <NavbarAdmin />
      <div className="dashboard__container">
        <div className="dashboard__container__top">
          <h1>Dashboard</h1>
          <div className="dashboard__container__top__right">
            <h2>Andi Muhammad Satria Fadhil</h2>
            <div className="profile">
              <img src={ProfilePhoto} alt="Profile Photo" />
            </div>
          </div>
        </div>
        <div className="dashboard__container__middle">
          <div className="dashboard__container__middle__top">
            <h2>Status Pesanan / Januari</h2>
          </div>
          <div className="dashboard__container__middle__bottom">
            <div className="box">
              <div className="side_color"></div>
              <div className="box_content">
                <p>Income</p>
                <p>Rp.999.999.999</p>
              </div>
              <div className="box_logo">
                <FontAwesomeIcon icon={faCoins} /> {/* Income */}
              </div>
            </div>
            <div className="box">
              <div className="side_color"></div>
              <div className="box_content">
                <p>Order</p>
                <p>3</p>
              </div>
              <div className="box_logo">
                <FontAwesomeIcon icon={faShoppingCart} /> {/* Order */}
              </div>
            </div>
            <div className="box">
              <div className="side_color"></div>
              <div className="box_content">
                <p>Completed</p>
                <p>4</p>
              </div>
              <div className="box_logo">
                <FontAwesomeIcon icon={faCheck} /> {/* Completed */}
              </div>
            </div>
            <div className="box">
              <div className="side_color"></div>
              <div className="box_content">
                <p>OnProgress</p>
                <p>5</p>
              </div>
              <div className="box_logo">
                <FontAwesomeIcon icon={faHourglassHalf} /> {/* On Progress */}
              </div>
            </div>
            <div className="box">
              <div className="side_color"></div>
              <div className="box_content">
                <p>Rejected</p>
                <p>6</p>
              </div>
              <div className="box_logo">
                <FontAwesomeIcon icon={faX} /> {/* Rejected */}
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard__container__bottom">
          <h2>Grafik Pesanan / Januari</h2>
          <Charts />
        </div>
        <div className="history">
          <DataTables />
        </div>
      </div>
    </div>
  );
};

export default HomePageAdmin;
