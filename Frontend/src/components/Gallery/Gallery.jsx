import { assets } from "../../assets/assets";
import "./Gallery.css";

const Gallery = () => {
  return (
    <>
      <div className="Gallery" id="gallery">
        <h1 className="galleryHead">Gallery</h1>
      </div>

      <div className="galleryContainer">
        <img src={assets.img2} alt="Deshi Dhaba" />
        <img src={assets.img4} alt="Deshi Dhaba" />
        <img src={assets.img6} alt="Deshi Dhaba" />
        <img src={assets.img13} alt="Deshi Dhaba" />
        <img src={assets.img18} alt="Deshi Dhaba" />
        <img src={assets.img19} alt="Deshi Dhaba" />
        <img src={assets.img20} alt="Deshi Dhaba" />
      </div>
    </>
  );
};

export default Gallery;
