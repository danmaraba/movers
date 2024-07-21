import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
function Testimonials() {
  return (
    <section className="container">
      <div className="testimonials">
        <h1>Testimonials</h1>
        <Swiper
          slidesPerView={1}
        //   spaceBetween={30}
        grabCursor={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="swiper-slide">
            <div className="slide">
              <img
                src="./src/assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg"
                style={{
                  width: "170px",
                  height: "170px",
                  objectFit: "cover",
                  borderRadius: "50%",
                  marginBottom:"20px",
                  
                }}
              />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                dolorum odio quis nostrum nisi delectus optio aliquid alias
                nulla vel?
              </p>
              <FontAwesomeIcon icon={faQuoteLeft} className="quote" />
              <div className="name-jobs">
                <h4>
                  <span className="name">Mercy</span>
                </h4>
                <h4>
                  <span className="job">Driver</span>
                </h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="slide">
              <img
                src="./src/assets/pexels-gabby-k-5876695.jpg"
                style={{
                  width: "170px",
                  height: "170px",
                  objectFit: "cover",
                  borderRadius: "50%",
                  marginBottom:"20px",
                  
                }}
              />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                dolorum odio quis nostrum nisi delectus optio aliquid alias
                nulla vel?
              </p>
              <FontAwesomeIcon icon={faQuoteLeft} className="quote" />
              <div className="name-jobs">
                <h4>
                  <span className="name">Ivy</span>
                </h4>
                <h4>
                  <span className="job">Passenger</span>
                </h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="slide">
              <img
                src="./src/assets/pexels-justin-shaifer-501272-1222271.jpg"
                style={{
                  width: "170px",
                  height: "170px",
                  objectFit: "cover",
                  borderRadius: "50%",
                  marginBottom:"20px",
                  
                }}
              />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                dolorum odio quis nostrum nisi delectus optio aliquid alias
                nulla vel?
              </p>
              <FontAwesomeIcon icon={faQuoteLeft} className="quote" />
              <div className="name-jobs">
                <h4>
                  <span className="name">Ian</span>
                </h4>
                <h4>
                  <span className="job">Business Man</span>
                </h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="slide">
              <img
                src="./src/assets/pexels-simon-robben-55958-614810.jpg"
                style={{
                  width: "170px",
                  height: "170px",
                  objectFit: "cover",
                  borderRadius: "50%",
                  marginBottom:"20px",
                  
                }}
              />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                dolorum odio quis nostrum nisi delectus optio aliquid alias
                nulla vel?
              </p>
              <FontAwesomeIcon icon={faQuoteLeft} className="quote" />
              <div className="name-jobs">
                <h4>
                  <span className="name">Frank</span>
                </h4>
                <h4>
                  <span className="job">Teacher</span>
                </h4>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        ;
      </div>
    </section>
  )
}

export default Testimonials;
