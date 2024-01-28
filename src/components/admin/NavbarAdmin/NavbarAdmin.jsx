
import "../../../scenes/admin/homePageAdmin/homePageAdmin.css"
import ProfilePhoto from "../../../images/neon.jpg";

const NavbarAdmin = (props) => {
  return (
    <div className="dashboard__container__top">
        <h1>{props.title}</h1>
        <div className="dashboard__container__top__right">
          <h2>Andi Muhammad Satria Fadhil</h2>
          <div className="profile">
            <img src={ProfilePhoto} alt="Profile Photo" />
          </div>
        </div>
      </div>
  )
}

export default NavbarAdmin