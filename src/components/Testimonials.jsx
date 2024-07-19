import React from "react";
import { reviews } from "../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faQuoteLeft
} from "@fortawesome/free-solid-svg-icons";
function Testimonials() {
  const userInfo = reviews.map((review) => (
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
      <h4><span className="name">{review.name}</span></h4>
      <h4><span className="job">{review.job}</span></h4>
    </div>
  ));
  return (
    <section className="container">
      <div className="testimonials">
        <h1>Testimonials</h1>
        {userInfo}
      </div>
    </section>
  );
}

export default Testimonials;
