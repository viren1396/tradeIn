import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductItem from "../../../Component/ProductItem";


const RelatedProducts = (props) => {
  return (
    <>
      <div className="d-flex align-items-center mt-4">
        <div className="info w-75">
          <h3 className="mb-0 hd">{props.title}</h3>
        </div>
      </div>

      <div className="product_row w-100 mt-3">
        <Swiper
          slidesPerView={6}
          spaceBetween={0}
          navigation={true}
          slidesPerGroup={1}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default RelatedProducts;
