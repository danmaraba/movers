import React,{useRef} from 'react';
import { NavLink } from 'react-router-dom';

function Services() {
    const services=useRef(null)
  return (
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
              <a href="/login" className="btn">order delivery</a>
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
              <NavLink to="/login" className="btn">hire car</NavLink>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Services
