import React from "react";
import Slider from "react-slick";
import Card from "./Card";
const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    aria-hidden="true"
    // aria-disabled={currentSlide === slideCount - 1 ? true : false}
    type="button"
  >
    <i className="ri-arrow-drop-right-line"></i>
  </button>
);
function ImageSlider({ filtered }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <></>,
    nextArrow: <SlickArrowRight />,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {filtered?.map((project, i) => {
          return (
            <div key={i} className="mx-auto md:mx-4">
              <Card project={project} />
            </div>
          );
        })}
      </Slider>
    </>
  );
}

export default ImageSlider;
