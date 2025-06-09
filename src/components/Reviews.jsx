import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    id: 1,
    company: "/img/comp_1.jpg",
    text: "Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction.",
    author: "/img/auth_1.jpg",
    title: "Ethan Morgan",
    subtitle: "Founder and CEO, Serene Living Products",
  },
  {
    id: 2,
    company: "/img/comp_2.jpg",
    text: "Sales Fortuna has made sales so much easier for us. It saves time, simplifies the whole process, and helps us land more deals without extra hassle.",
    author: "/img/auth_2.jpg",
    title: "Olivia Hayes",
    subtitle: "Owner, Starlight Creations",
  },
  {
    id: 3,
    company: "/img/comp_3.jpg",
    text: "Sales Fortuna has simplified our lead generation, helping us attract qualified prospects effortlessly and drive consistent growth.",
    author: "/img/auth_3.jpg",
    title: "Alexander Reed",
    subtitle: "Co-Founder, Opulent Living Group",
  },
  {
    id: 4,
    company: "/img/comp_2.jpg",
    text: "Sales Fortuna has made sales so much easier for us. It saves time, simplifies the whole process, and helps us land more deals without extra hassle.",
    author: "/img/auth_2.jpg",
    title: "Olivia Hayes",
    subtitle: "Owner, Starlight Creations",
  },
  {
    id: 5,
    company: "/img/comp_3.jpg",
    text: "Sales Fortuna has simplified our lead generation, helping us attract qualified prospects effortlessly and drive consistent growth.",
    author: "/img/auth_3.jpg",
    title: "Alexander Reed",
    subtitle: "Co-Founder, Opulent Living Group",
  },
  {
    id: 6,
    company: "/img/comp_1.jpg",
    text: "Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction.",
    author: "/img/auth_1.jpg",
    title: "Ethan Morgan",
    subtitle: "Founder and CEO, Serene Living Products",
  },
];

const Reviews = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="reviews-wrapper">
      <img src="/img/bg.jpg" alt="background" className="bg" />
      <h1>Voices of Success with Sales Fortuna</h1>
      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-company">
              <img src={review.company} alt={review.company} />
            </div>
            <p className="review-text">{review.text}</p>
            <div className="review-author-block">
              <img
                src={review.author}
                alt={review.author}
                className="review-company"
              />
              <div className="description">
                <p className="review-author-title"> {review.title}</p>
                <p className="review-author-subtitle"> {review.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="arrow next" onClick={onClick}>
      <svg  viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="34" cy="34" r="33.5" transform="matrix(-1 0 0 1 68 0)" fill="white" stroke="#D1CFCF"/>
<path d="M27.9219 19.5234L44.6562 32.9766L27.9453 46.6641L25.6484 44.1562L38.0937 32.8359L25.8125 22.125L27.9219 19.5234Z" fill="#707070"/>
</svg>

    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="arrow prev" onClick={onClick}>
      <svg viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="34" cy="34" r="33.5" fill="white" stroke="#D1CFCF"/>
<path d="M40.0781 19.5234L23.3438 32.9766L40.0547 46.6641L42.3516 44.1562L29.9063 32.8359L42.1875 22.125L40.0781 19.5234Z" fill="#707070"/>
</svg>

    </div>
  );
}

export default Reviews;
