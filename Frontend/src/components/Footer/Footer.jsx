import { assets } from '../../assets/assets'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="logo">
              <img src={assets.logo} className='logo' alt='img'/>
            </div>
            <div className='Contact'>
                <div className="contact-info">
                    <h2>Contact Us</h2>
                    <p>Mubbasir Choudhary: +919820561189</p>
                </div>
                <div className="address">
                    <h2>Address</h2>
                    <p>Gujarat State Highway 41, Kanodar,<br/>Banaskhata - 385520</p>
                </div>
            </div>
        </div>
        <div className="copyright">
                <p>All Rights Reserved By Deshi Dhaba @2024.</p>
        </div>
    </div>
  )
}

export default Footer