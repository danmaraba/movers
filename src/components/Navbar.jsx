import React from "react";
import { links } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  // console.log(links);
  return (
    <nav>
      <div className="nav-header">
        <img
          src="./src/assets/logo-for-delivery-company.png"
          alt="logo"
          className="logo"
        />
        <button className="toggle-btn">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div className="links-container">
        <ul className="links">
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
    </nav>
  );
}

export default Navbar;
