import React, { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function Navlinks() {
  const linkRef = useRef(null);
  const linksContainerRef = useRef(null);
  const [showLinks, setShowLinks] = useState(false);
  const home = useRef(null);
  const about = useRef(null);
  const services = useRef(null);
  const contacts = useRef(null);
  const navbarRef = useRef(null);
  const login = useRef(null);
  const scrollToSection = (elementRef) => {
    if(elementRef && elementRef.current){
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
      });
    }
    if(showLinks===true){
      setShowLinks(false)
    }
  };

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

  // const closeMenu=()=>{
  //   setShowLinks(false)
  // }

  return (
    <>
      <nav className="navbar" ref={home}>
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
              <li
                onClick={() => {
                  scrollToSection(home);
                }}
              >
                <NavLink to="/">Home</NavLink>
              </li>
              <li
                onClick={() => {
                  scrollToSection(about);
                }}
              >
                <NavLink to="/about">About</NavLink>
              </li>
              <li
                onClick={() => {
                  scrollToSection(services);
                }}
              >
                <NavLink to="/services">Services</NavLink>
              </li>
              <li
                onClick={() => {
                  scrollToSection(contacts);
                }}
              >
                <NavLink to="/contacts">Contacts</NavLink>
              </li>
              <li id="login-link" onClick={() => {
                  scrollToSection(login);
                }}>
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navlinks;
