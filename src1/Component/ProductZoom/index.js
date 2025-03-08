import React, { useState } from "react";
import { useRef } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

const ProductZoom = () => {

  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSlider = useRef();

  const goto = (index) => {
    zoomSlider.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
  };

  return (
    <>
      <div className="productZoom">
        <div className="productZoom position-relative">
          <div className="badge badge-primary">70%</div>

          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            navigation={false}
            slidesPerGroup={1}
            modules={[Navigation]}
            className="zoomSliderBig"
            ref={zoomSliderBig}
          >
            <SwiperSlide>
              <div className="item">
                <InnerImageZoom
                  zoomType="hover"
                  zoomScale={1}
                  src={
                    "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/a/c/0/l-bblhdful-plainz134-blive-original-imah8g9xwpsqgzhb.jpeg?q=70&crop=false"
                  }
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <InnerImageZoom
                  zoomType="hover"
                  zoomScale={1}
                  src={
                    "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/a/c/0/l-bblhdful-plainz134-blive-original-imah8g9xwpsqgzhb.jpeg?q=70&crop=false"
                  }
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <InnerImageZoom
                  zoomType="hover"
                  zoomScale={1}
                  src={
                    "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/a/c/0/l-bblhdful-plainz134-blive-original-imah8g9xwpsqgzhb.jpeg?q=70&crop=false"
                  }
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <InnerImageZoom
                  zoomType="hover"
                  zoomScale={1}
                  src={
                    "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/a/c/0/l-bblhdful-plainz134-blive-original-imah8g9xwpsqgzhb.jpeg?q=70&crop=false"
                  }
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          navigation={true}
          slidesPerGroup={1}
          modules={[Navigation]}
          className="zoomSlider"
          ref={zoomSlider}
        >
          <SwiperSlide>
            <div className={`item ${slideIndex === 0 && "item_active"}`}>
              <img
                src={
                  "https://rukminim2.flixcart.com/image/128/128/xif0q/t-shirt/a/c/0/l-bblhdful-plainz134-blive-original-imah8g9xwpsqgzhb.jpeg?q=70&crop=false"
                }
                className="w-100"
                onClick={() => goto(0)}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`item ${slideIndex === 1 && "item_active"}`}>
              <img
                src={
                  "https://rukminim2.flixcart.com/image/128/128/xif0q/t-shirt/a/c/0/l-bblhdful-plainz134-blive-original-imah8g9xwpsqgzhb.jpeg?q=70&crop=false"
                }
                className="w-100"
                onClick={() => goto(1)}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`item ${slideIndex === 2 && "item_active"}`}>
              <img
                src={
                  "https://rukminim2.flixcart.com/image/128/128/xif0q/t-shirt/a/c/0/l-bblhdful-plainz134-blive-original-imah8g9xwpsqgzhb.jpeg?q=70&crop=false"
                }
                className="w-100"
                onClick={() => goto(2)}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`item ${slideIndex === 3 && "item_active"}`}>
              <img
                src={
                  "https://rukminim2.flixcart.com/image/128/128/xif0q/t-shirt/a/c/0/l-bblhdful-plainz134-blive-original-imah8g9xwpsqgzhb.jpeg?q=70&crop=false"
                }
                className="w-100"
                onClick={() => goto(3)}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`item ${slideIndex === 2 && "item_active"}`}>
              <img
                src={
                  "https://rukminim2.flixcart.com/image/128/128/xif0q/t-shirt/a/c/0/l-bblhdful-plainz134-blive-original-imah8g9xwpsqgzhb.jpeg?q=70&crop=false"
                }
                className="w-100"
                onClick={() => goto(2)}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`item ${slideIndex === 3 && "item_active"}`}>
              <img
                src={
                  "https://rukminim2.flixcart.com/image/128/128/xif0q/t-shirt/a/c/0/l-bblhdful-plainz134-blive-original-imah8g9xwpsqgzhb.jpeg?q=70&crop=false"
                }
                className="w-100"
                onClick={() => goto(3)}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default ProductZoom;
