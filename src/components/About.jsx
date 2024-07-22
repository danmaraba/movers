import React, { useRef } from "react";
import{Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone,faLocationDot,faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";
function About() {
  // get the current year
 const date=new Date().getFullYear()
  const about = useRef(null);
  return (
    <>
    <section className="about" ref={about}>
      <h1>About Us</h1>
      <div className="abt">
        <img
          src="./Images/pexels-tima-miroshnichenko-6169668.jpg"
          alt="img"
          className="img"
        />
        <p>
          We are a logistic business with and primarily deal with car hire
          service and parcel delivery. We pride ourselves with exceptional
          services that we offer to our customers. Your safety and those of your
          goods is our top priority. Order either of the services below and let
          us get into business!
        </p>
      </div>
    </section>
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
                  <Link to="/" style={{textDecoration:"none"}}>Home</Link>
                </li>
                <li>
                  <Link to="/about" style={{textDecoration:"none"}}>About</Link>
                </li>
                <li>
                  <Link to="/services" style={{textDecoration:"none"}}>Services</Link>
                </li>
                <li>
                  <Link to="/contacts" style={{textDecoration:"none"}}>Contacts</Link>
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
            <p style={{marginBottom:"2rem",marginTop:"2rem"}}>
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

export default About;
