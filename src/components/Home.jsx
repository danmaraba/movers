import React, { useState, useEffect, useRef } from "react";
// import { links } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { NavLink, Link } from "react-router-dom";
import Testimonials from "./Testimonials";

function Navbar() {
  const linkRef = useRef(null);
  const linksContainerRef = useRef(null);
  const [showLinks, setShowLinks] = useState(false);
  const home = useRef(null);
  const about = useRef(null);
  const services = useRef(null);
  const contacts = useRef(null);
  const navbarRef = useRef(null);
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  // get the current year
  const date = new Date().getFullYear();

  useEffect(() => {
    const linksHeight = linkRef.current.getBoundingClientRect().height;
    // console.log(linksHeight);
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  // console.log(links);

 

  // const navbar = document.getElementById("navbar");
  const navbar = navbarRef.current;
  const handleScroll = () => {
    if (navbar) {
      if (window.scrollY === 0) {
        navbar.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
      } else {
        navbar.style.boxShadow = "none";
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <header>
        <nav id="navbar">
          <div className="nav-center">
            <div className="nav-header">
              <img
                src="src/assets/logo-for-delivery-company.png"
                alt="logo"
                className="logo"
              />
              <button
                className="toggle-btn"
                onClick={() => {
                  setShowLinks(!showLinks);
                }}
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
            <div className="links-container" ref={linksContainerRef}>
              <ul className="links" ref={linkRef}>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/contacts">Contacts</Link>
                </li>
                <li id="login-link">
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* about */}
      <section className="about" ref={about}>
        <h1>About Us</h1>
        <div className="abt">
          <img
            src="./src/assets/pexels-tima-miroshnichenko-6169668.jpg"
            alt="img"
            className="img"
          />
          <p>
            We are a logistic business with and primarily deal with car hire
            service and parcel delivery. We pride ourselves with exceptional
            services that we offer to our customers. Your safety and those of
            your goods is our top priority. Order either of the services below
            and let us get into business!
          </p>
        </div>
      </section>

      {/* services */}
      <section className="services" ref={services}>
        <h1>Our Services</h1>
        <div className="card-container">
          <div className="card">
            <img
              src="./src/assets/pexels-tima-miroshnichenko-6169869.jpg"
              alt="img"
              className="card-img"
            />
            <div className="card-content">
              <h4>parcel delivery</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde,
                magni?
              </p>
              <NavLink to="/login" className="btn">
                order delivery
              </NavLink>
            </div>
          </div>
          <div className="card">
            <img
              src="./src/assets/pexels-negativespace-97079.jpg"
              alt="car hire"
              className="card-img"
            />
            <div className="card-content">
              <h4>car hire</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde,
                magni?
              </p>
              <NavLink to="/login" className="btn">
                hire car
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      {/* contacts */}
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
                    <Link
                      style={{
                        textDecoration: "none",
                        transition: "0.3s linear",
                      }}
                      onClick={() => {
                        scrollToSection(home);
                      }}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      style={{
                        textDecoration: "none",
                        transition: "0.3s linear",
                      }}
                      onClick={() => {
                        scrollToSection(about);
                      }}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      style={{
                        textDecoration: "none",
                        transition: "0.3s linear",
                      }}
                      onClick={() => {
                        scrollToSection(services);
                      }}
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      style={{
                        textDecoration: "none",
                        transition: "0.3s linear",
                      }}
                      onClick={() => {
                        scrollToSection(contacts);
                      }}
                    >
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

export default Navbar;
