import { assets } from "../../assets/assets";


const About = () => {
  return (
    <div className="container" id="about">
    <div className="image">
      <img src={assets.img3} className="aboutimg" alt="Deshi Dhaba" />
    </div>
    <div className="aboutsection">
      <h1 className="aboutheading">About us</h1>
      <p className="aboutpara">
        Desi Dhaba is a family dhaba serving authentic and delicious food
        located in kanodar banaskhata aesthetic seating arrangement and
        quality food. Looking for a perfect place to have a family dinner then
        desi dhaba is a perfect place for you.
      </p>
    </div>
  </div>

  )
}

export default About