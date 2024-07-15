import React,{useRef} from 'react'

function About() {
    const about=useRef(null)
  return (
    <section className="about"ref={about} >
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
      services that we offer to our customers. Your safety and those of your
      goods is our top priority. Order either of the services below and let
      us get into business!
    </p>
  </div>
</section>
  )
}

export default About
