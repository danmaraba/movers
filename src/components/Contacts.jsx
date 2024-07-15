import React,{useRef} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";
function Contacts() {
    const contacts=useRef(null)
    // get the current year
 const date=new Date().getFullYear()
  return (
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
  )
}

export default Contacts
