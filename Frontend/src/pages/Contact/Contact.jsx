import "./Contact.css";
import "remixicon/fonts/remixicon.css";
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact">
        <div className="contactdetail" id="contact-detail">
          <h2>Contact us</h2>
          <p>
            Mubbasir Choudhary: <i className="ri-phone-fill">+919820561189</i>
          </p>
          <h2>Address</h2>
          <p>
            <i className="ri-map-pin-line">Kanodar,Palanpur - 385520</i>
          </p>
          <h2>Timing</h2>
          <p>
           Mon - Sun 10:30am - 10:45pm
          </p>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3641.962210161995!2d72.39901287512666!3d24.102824378431606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395cec4aa2c27305%3A0xa68351053e18e56c!2sDeshi%20Dhaba!5e0!3m2!1sen!2sin!4v1726735262822!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0", width: "100%", height: "100%" }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
