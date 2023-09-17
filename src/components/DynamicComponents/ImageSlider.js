import React from "react";
import Slider from "react-slick";
import Card from "./Card";

function ImageSlider({ filtered }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <></>,
    nextArrow: (
      <button>
        <i class="ri-arrow-drop-right-line"></i>
      </button>
    ),
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

    // dots: true,
    // infinite: true,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
  };

  return (
    <>
      <Slider {...settings}>
        {filtered?.map((project, i) => {
          return (
            <div key={i} className="">
              <Card project={project} />
            </div>
          );
        })}
      </Slider>
    </>
  );
}

export default ImageSlider;