import React,{useRef,useState,useEffect} from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars
} from "@fortawesome/free-solid-svg-icons";
function Navlinks() {
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
            navbar.style.boxShadow='none';
          }
      };
      window.addEventListener('scroll', handleScroll);
      
  return (
    <>
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
                  }}><NavLink to="/" >Home</NavLink></li>
                  <li onClick={()=>{
                    scrollToSection(about)
                  }}><NavLink to="/about" >About</NavLink></li>
                  <li onClick={()=>{
                    scrollToSection(services)
                  }}><NavLink to="/services" >Services</NavLink></li>
                  <li onClick={()=>{
                    scrollToSection(contacts)
                  }}><NavLink to="/contacts" >Contacts</NavLink></li>
                  <li id="login-link"><NavLink to="/login">Login</NavLink></li>
              </ul>
            </div>
          </div>
        </nav>
    </>
  );
}

export default Navlinks;
