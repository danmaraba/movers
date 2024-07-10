import React, { useState, useEffect, useRef } from "react";
import { links } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  const linkRef = useRef(null);
  const linksContainerRef = useRef(null);
  const [showLinks, setShowLinks] = useState(false);

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

  // get the current year
  const date=new Date().getFullYear()
  return (
    <>
      <header>
        <nav>
          <div className="nav-center">
            <div className="nav-header">
              <img
                src="./src/assets/logo-for-delivery-company.png"
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
                {links.map((link) => {
                  const { id, url, text } = link;
                  return (
                    <li key={id}>
                      <a href={url}>{text}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* about */}
      <section className="about">
        <div className="abt">
          <img
            src="./src/assets/pexels-tima-miroshnichenko-6169668.jpg"
            alt="img"
            className="img"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            dolorem deleniti, eum in doloremque ipsum!
          </p>
        </div>
      </section>
      {/* services */}
      <section className="services">
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
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, magni?</p>
              <a href="" className="btn">order delivery</a>
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
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, magni?</p>
              <a href="" className="btn">hire a car</a>
            </div>
          </div>
        </div>
      </section>
      {/* contacts */}
      <section className="contacts">
        <h1>Get in Touch with Us!</h1>
        <p>
          We are here to facilitate safe and seamless delivery of your parcel!
        </p>
        <div className="contact-details">
          <p>
            <span>
              {" "}
              <FontAwesomeIcon icon={faLocationDot} />
              Sarit,Nairobi.
            </span>
          </p>
          <p>
            <span>
              <FontAwesomeIcon icon={faPhone} />
            </span>
            +2547111111111
          </p>
          <p>
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
              movers@gmail.com
            </span>
          </p>
          <span>
            <a href="#tiktok"></a>
            <FontAwesomeIcon icon={faTiktok} />
          </span>
          <span>
            <a href="#instagram"></a>
            <FontAwesomeIcon icon={faInstagram} />
          </span>
          <p className="footer">
             &copy; <span>{date}</span> movers.all rights reserved
          </p>
        </div>
      </section>
    </>
  );
}

export default Navbar;
