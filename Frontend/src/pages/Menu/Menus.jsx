import { assets } from "../../assets/assets";
import "./Menu.css";

const Menu = () => {
  return (
    <>
      <div className="Menu" id="menu">
        <h1 className="menuHead">Menu</h1>
      </div>

      <div className="menuContainer">
        <img src={assets.img7} alt="Deshi Dhaba" />
        <img src={assets.img8} alt="Deshi Dhaba" />
        <img src={assets.img9} alt="Deshi Dhaba" />
        <img src={assets.img10} alt="Deshi Dhaba" />
        <img src={assets.img11} alt="Deshi Dhaba" />
        <img src={assets.img12} alt="Deshi Dhaba" />
        <img src={assets.img21} alt="Deshi Dhaba" />
        <img src={assets.img22} alt="Deshi Dhaba" />
      </div>
    </>
  )
}

export default Menu