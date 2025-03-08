import React from "react";
import Slider from "react-slick";
import homebanner1 from "../../assest/Image/homebanner1.jpg";
import homebanner2 from "../../assest/Image/homebanner2.jpg";
import homebanner3 from "../../assest/Image/homebanner3.jpg";
import homebanner4 from "../../assest/Image/homebanner4.jpg";

const HomeBanner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };

  return (
    <>
      <div className="homeBannerSec">
        <Slider {...settings}>
          <div className="item">
            <img src={homebanner1} alt="banner1" className="w-100" />
          </div>
          <div className="item">
            <img src={homebanner2} alt="banner2" className="w-100" />
          </div>
          <div className="item">
            <img src={homebanner3} alt="banner3" className="w-100" />
          </div>
          <div className="item">
            <img src={homebanner4} alt="banner4" className="w-100" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default HomeBanner;
