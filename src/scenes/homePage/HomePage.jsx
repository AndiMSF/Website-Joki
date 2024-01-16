import "./home.css";
import Navbar from "../../components/Navbar/Navbar";
import ControlledCarousel from "../../components/Carousel/ControlledCarousel";
import valorant from "../../images/valorant.png";
import ml from "../../images/ml.png";
import genshin from "../../images/genshin.png";
import Button from "../../Elements/Button/Button";

const HomePage = () => {
  return (
    <div className="content__container">
      <div className="landing_page__top">
        <Navbar isBeranda={true} />
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
