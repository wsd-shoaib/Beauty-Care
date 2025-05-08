import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Testimonials.css";

const Testimonials = () => {
  const reviews = [
    {
      name: "Sara Rahman",
      comment:
        "Absolutely loved their service! The staff was friendly and the environment was relaxing. Highly recommend!",
      image: "assets/testimonial01.jpg",
    },
    {
      name: "Nusrat Jahan",
      comment:
        "Best beauty care I've experienced! My skin feels refreshed and glowing. Will come again!",
      image: "assets/testimonial02.jpg",
    },
    {
      name: "Mithila Akter",
      comment:
        "Excellent bridal service! My big day was perfect thanks to their makeup team.",
      image: "assets/testimonial03.jpg",
    },
  ];

  return (
    <div className="testimonials-section" id="testimonial">
      <h2>What Our Clients Say</h2>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <img src={review.image} alt={review.name} />
              <p>"{review.comment}"</p>
              <h4>- {review.name}</h4>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </div>
  );
};

export default Testimonials;
