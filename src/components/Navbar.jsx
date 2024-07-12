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
import{Link} from 'react-router-dom'

function Navbar() {
  const linkRef = useRef(null);
  const linksContainerRef = useRef(null);
  const [showLinks, setShowLinks] = useState(false);
  const home=useRef(null)
  const about=useRef(null)
  const services=useRef(null)
  const contacts=useRef(null)
    const scrollToSection = (elementRef) => {
        window.scrollTo({
          top: elementRef.current.offsetTop,
          behavior: "smooth",
        });
      };
 // get the current year
 const date=new Date().getFullYear()

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

  const navbar=document.getElementById('navbar')
  const handleScroll = () => {
      if(window.scrollY===0){
        navbar.style.boxShadow='0 5px 15px rgba(0, 0, 0, 0.1)';
      }else{
        navbar.style.boxShadow='none'
      }
  };

  window.addEventListener('scroll', handleScroll);
  
  return (
    <>
      <header >
        <nav id="navbar"ref={home}>
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
                  <li onClick={()=>{
                    scrollToSection(home)
                  }}><Link to="/">Home</Link></li>
                  <li onClick={()=>{
                    scrollToSection(about)
                  }}><Link to="/about">About</Link></li>
                  <li onClick={()=>{
                    scrollToSection(services)
                  }}><Link to="/services">Services</Link></li>
                  <li onClick={()=>{
                    scrollToSection(contacts)
                  }}><Link to="/contacts">Contacts</Link></li>
                  <li><Link to="/login">Login</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* about */}
      <section className="about"ref={about} >
      <div className="abt">
        <img
          src="./src/assets/pexels-tima-miroshnichenko-6169668.jpg"
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
      <section className="contacts" ref={contacts}>
        <h1>Get in Touch with Us!</h1>
        <p>
          We are here to facilitate safe and seamless delivery of your parcel!
        </p>
        <div className="contact-details">
          <p>
            <span>
              <FontAwesomeIcon icon={faLocationDot} className="icon"/>
              Sarit,Nairobi.
            </span>
          </p>
          <p>
            <span>
              <FontAwesomeIcon icon={faPhone} className="icon"/>
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
            <FontAwesomeIcon icon={faTiktok}className="icon" />
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

export default Navbar;
