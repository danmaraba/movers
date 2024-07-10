import React, { useState, useEffect, useRef } from "react";
import { links } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faLocationDot,faPhone,faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faTiktok,faInstagram } from '@fortawesome/free-brands-svg-icons';

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
            <img src="./src/assets/pexels-tima-miroshnichenko-6169668.jpg" alt="img" className="img" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorem deleniti, eum in doloremque ipsum!</p>
        </div>
    </section>
    {/* services */}
    <section className="services">

    </section>
    {/* contacts */}
    <section className="contacts">
        <h1>Let's talk business!</h1>
        <p>We are here to facilitate safe and seamless delivery of your parcel!</p>
       <p><span> <FontAwesomeIcon icon={faLocationDot} />Sarit,Nairobi.</span></p> 
       <p><span><FontAwesomeIcon icon={faPhone} /></span>+2547111111111</p>
       <p><span><FontAwesomeIcon icon={faEnvelope} />movers@gmail.com</span></p>
       <div className="icons">
        <span><a href="#tiktok"></a><FontAwesomeIcon icon={faTiktok} /></span>
        <span><a href="#instagram"></a><FontAwesomeIcon icon={faInstagram} /></span>
       </div>
    </section>
    </>
    
  );
}

export default Navbar;
