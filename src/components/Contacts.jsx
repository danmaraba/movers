import React, { useRef,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
function Contacts() {
  // const navbar = document.getElementById("contact");
  const navbarRef = useRef(null);
  const navbar=navbarRef.current
  const handleScroll = () => {
    if(navbar){
      if (window.scrollY === 0) {
        navbar.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
      } else {
        navbar.style.boxShadow = "none";
      }
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  window.addEventListener("scroll", handleScroll);

  // const contacts=useRef(null)
  // get the current year
  const date = new Date().getFullYear();
  return (
    <>
      <div className="contacts-section-container">
        <div className="contacts-section" id="contact">
          <h3 className="contacts-title">Get in Touch!</h3>
          <div className="input-container">
            <input type="text" placeholder="Name..." />
            <span className="underline"></span>
          </div>
          <div className="input-container">
            <input type="text" placeholder="Email..." />
            <span className="underline"></span>
          </div>
          <div className="input-container">
            <input type="text" placeholder="Phone Number..." />
            <span className="underline"></span>
          </div>
          <div className="message-container">
            <textarea
              id="myTextArea"
              placeholder="Enter the message..."
            ></textarea>
          </div>
          <button className="submitt-btn">Send Message</button>
        </div>
        <div className="image-contacts">
          <img
            src="./Images/rodrigo-abreu-lq9PxpwDZUk-unsplash.jpg"
            alt="image-contact"
          />
        </div>
      </div>

      <section className="contacts-footer-section">
        <div className="contacts-container">
          <p className="heading">
            We are here to facilitate safe and seamless delivery of your parcel!
          </p>
          <div className="contact-details-section">
            <div className="contact-about">
              <h3>About Us</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="quick-links">
              <h3>Quick Links</h3>
              <div className="contact-links">
                <ul>
                  <li>
                    <Link to="/" style={{ textDecoration: "none" }}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" style={{ textDecoration: "none" }}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" style={{ textDecoration: "none" }}>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/contacts" style={{ textDecoration: "none" }}>
                      Contacts
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="contact-contact">
              <h3>Contacts</h3>
              <p>
                <span>
                  <FontAwesomeIcon icon={faLocationDot} className="icon" />
                  Sarit,Nairobi.
                </span>
              </p>
              <p style={{ marginBottom: "2rem", marginTop: "2rem" }}>
                <span>
                  <FontAwesomeIcon icon={faPhone} className="icon" />
                </span>
                +2547XXXXXXXX
              </p>
              <p>
                <span>
                  <FontAwesomeIcon icon={faEnvelope} className="icon" />
                  movers@gmail.com
                </span>
              </p>
            </div>
            <div className="contact-socials">
              <h3>Let us Connect</h3>
              <span>
                <a href="#tiktok"></a>
                <FontAwesomeIcon icon={faTiktok} className="icon" />
              </span>
              <span>
                <a href="#instagram"></a>
                <FontAwesomeIcon icon={faInstagram} className="icon" />
              </span>
            </div>
          </div>
          <p className="footer">
            &copy; <span>{date}</span> movers.all rights reserved
          </p>
        </div>
      </section>
    </>
  );
}

export default Contacts;
