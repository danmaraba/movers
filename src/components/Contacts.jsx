import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
function Contacts() {
  const contacts=useRef(null)
    const scrollToSection = (elementRef) => {
        window.scrollTo({
          top: elementRef.current.offsetTop,
          behavior: "smooth",
        });
      };

      const navbar=document.getElementById('contact')
  const handleScroll = () => {
      if(window.scrollY===0){
        navbar.style.boxShadow='0 5px 15px rgba(0, 0, 0, 0.1)';
      }else{
        navbar.style.boxShadow='none';
      }
  };
  window.addEventListener('scroll', handleScroll);
  
  // const contacts=useRef(null)
  // get the current year
  const date = new Date().getFullYear();
  return (
    <>
      <div className="contacts-section" ref={contacts} id="contact">
        <h3 className="contacts-title">Get in Touch!</h3>
        <div className="input-container">
          <input type="text" id="input-value" placeholder="Name..." />
          <span className="underline"></span>
        </div>
        <div className="input-container">
          <input type="text" id="input-value" placeholder="Email..." />
          <span className="underline"></span>
        </div>
        <div className="input-container">
          <input type="text" id="input-value" placeholder="Phone Number..." />
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
          src="./src/assets/rodrigo-abreu-lq9PxpwDZUk-unsplash.jpg"
          alt="image-contact"
        />
      </div>
      <section className="contacts-footer-section">
        <p>
          We are here to facilitate safe and seamless delivery of your parcel!
        </p>
        <div className="contact-details-section">
          <div className="contact-about">
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="quick-links">
            <h3>Quick Links</h3>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
          </div>
          <p>
            <span>
              <FontAwesomeIcon icon={faLocationDot} className="icon" />
              Sarit,Nairobi.
            </span>
          </p>
          <p>
            <span>
              <FontAwesomeIcon icon={faPhone} className="icon" />
            </span>
            +2547111111111
          </p>
          <p>
            <span>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              movers@gmail.com
            </span>
          </p>
          <span>
            <a href="#tiktok"></a>
            <FontAwesomeIcon icon={faTiktok} className="icon" />
          </span>
          <span>
            <a href="#instagram"></a>
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </span>
          <p className="footer">
            &copy; <span>{date}</span> movers.all rights reserved
          </p>
        </div>
      </section>
    </>
  );
}

export default Contacts;
