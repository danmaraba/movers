import React from "react";
import { reviews } from "../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faQuoteLeft
} from "@fortawesome/free-solid-svg-icons";
function Testimonials() {
  const userDetails = reviews.map((review) => (
    <div key={review.id}>
      <img
        src={review.img}
        style={{
          width: "170px",
          height: "170px",
          objectFit: "cover",
          borderRadius: "50%",
        }}
      />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas similique consequatur quia perferendis provident, sit non dolorum corrupti fugit a.</p>
      <FontAwesomeIcon icon={faQuoteLeft} />
      <h4>{review.name}</h4>
    </div>
  ));
  return (
    <section className="container">
      <div className="testimonials">
        <h1>Testimonials</h1>
        {userDetails}
      </div>
    </section>
  );
}

export default Testimonials;
