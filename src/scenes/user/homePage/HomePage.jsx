import "./home.css";
import Navbar from "../../../components/user/Navbar/Navbar";
import ControlledCarousel from "../../../components/user/Carousel/ControlledCarousel";
import valorant from "../../../images/valorant.png";
import ml from "../../../images/ml.png";
import genshin from "../../../images/genshin.png";
import Button from "../../../Elements/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [navbarClick, setNavbarClick] = useState(false);

  const handleNavbarClick = (value) => {
    setNavbarClick(value);
  };

  return (
    <div className="content__container">
      {/* If Hamburger Active / isClick true */}
      {navbarClick && (
        <div className="sidebar">
          <FontAwesomeIcon
            icon={faTimes}
            onClick={() => setNavbarClick(!navbarClick)}
          />
          <div className="sidebar__content">
            <h1>Beranda</h1>
            <h1>Fitur</h1>
            <h1>Daftar Harga</h1>
            <h1>Add Game</h1>
            <div className="line"></div>
            <h1>Masuk</h1>
            <h1>Keluar</h1>
          </div>
        </div>
      )}

      <div className="landing_page__top">
        <Navbar
          isBeranda={true}
          navbarClick={handleNavbarClick}
          sidebarCondition={navbarClick}
        />
        <ControlledCarousel />
      </div>
      <div className="landing_page__middle">
        <h1>Daftar Game</h1>
        <div className="card__container__lp">
          <div className="card">
            <div className="card-img">
              <img src={valorant} alt="" />
            </div>
            <div className="card-body">
              <div className="card-content">
                <h1>Valorant</h1>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="card-bottom">
                <Button title="Pesan" />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src={ml} alt="" />
            </div>
            <div className="card-body">
              <div className="card-content">
                <h1>Mobile Legend</h1>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="card-bottom">
                <Button title="Pesan" />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src={genshin} alt="" />
            </div>
            <div className="card-body">
              <div className="card-content">
                <h1>Genshin Impact</h1>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="card-bottom">
                <Button title="Pesan" />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src="" alt="?" />
            </div>
            <div className="card-body">
              <div className="card-content">
                <h1>?</h1>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="card-bottom">
                <Button title="Pesan" />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src="" alt="?" />
            </div>
            <div className="card-body">
              <div className="card-content">
                <h1>?</h1>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="card-bottom">
                <Button title="Pesan" />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src="" alt="?" />
            </div>
            <div className="card-body">
              <div className="card-content">
                <h1>?</h1>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="card-bottom">
                <Button title="Pesan" />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src="" alt="?" />
            </div>
            <div className="card-body">
              <div className="card-content">
                <h1>?</h1>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="card-bottom">
                <Button title="Pesan" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="landing_page__bottom">
        <div className="landing_page__bottom__left">
          <h1>Easy Joki</h1>
        </div>
        <div className="landing_page__bottom__right">
          <h1>Contact Us</h1>
          <h2>
            088 - 888 - 888 <br />
            @EasyJoki on Instagram <br />
            @EasyJoki on Twitter <br />
            @EasyJoki on Discord
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
