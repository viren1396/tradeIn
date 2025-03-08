import React from "react";
import "swiper/css";
import "swiper/css/navigation";

import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";

import saleimg from "../../assest/Image/saleimg.jpg";
import offimg from "../../assest/Image/offimg.png"

import HomeCat from "../../Component/HomeCat";
import HomeBanner from "../../Component/HomeBanner";
import ProductItem from "../../Component/ProductItem";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { BsArrowsFullscreen } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";


const Home = () => {

  return (
    <>
      <HomeBanner />
      <HomeCat />

      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sticky">
              <div className="banner">
                <img src={saleimg} alt="saleimg" className="cursor w-100" />
              </div>
              <div className="banner mt-5">
                <img src={saleimg} alt="saleimg" className="cursor w-100" />
              </div>
              </div>
            </div>

            <div className="col-md-9 productRow">
              <div className="d-flex align-items-center">
                <div className="info w-75">
                  <h3 className="mb-0 hd">BEST SELLER</h3>
                  <p className="text-sml mb-0">
                    Do not miss the current offers until the end of May
                  </p>
                </div>
                <Button className="viewAllBtn">
                  View All
                  <IoIosArrowRoundForward />
                </Button>
              </div>

              <div className="product_row w-100 mt-4">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={0}
                  navigation={true}
                  slidesPerGroup={1}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>

                </Swiper>
              </div>

              <div className="d-flex align-items-center mt-5">
                <div className="info w-75">
                  <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                  <p className="text-sml mb-0">
                    Do not miss the current offers until the end of May
                  </p>
                </div>
              </div>

              <div className="product_row productRow2 w-100 mt-4 d-flex">
                <div className="item productItem">
                  <div className="imgWrapper">
                    <img
                      src="https://rukminim2.flixcart.com/image/128/128/xif0q/t-shirt/v/a/u/m-ts72-vebnor-original-imah7rpffb9mqxeb.jpeg?q=70&crop=false"
                      className="w-100"
                    />
                    <span className="badge badge-primary">30%</span>
                    <div className="actions">
                      <Button>
                        <BsArrowsFullscreen />
                      </Button>
                      <Button>
                        <FaRegHeart />
                      </Button>
                    </div>
                  </div>
                  <div className="info">
                    <h4>HRX by Hrithik Roshan</h4>
                    <span className="text-success d-block">In Stock</span>
                    <Rating
                      className="mt-2 mb-2"
                      name="read-only"
                      value={4}
                      readOnly
                      size="small"
                      precision={0.5}
                    />
                    <div className="d-flex">
                      <span className="oldPrice">20.00</span>
                      <span className="netPrice text-danger">20.00</span>
                    </div>
                  </div>
                </div>
                <div className="item productItem">
                  <div className="imgWrapper">
                    <img
                      src="https://rukminim2.flixcart.com/image/128/128/xif0q/t-shirt/v/a/u/m-ts72-vebnor-original-imah7rpffb9mqxeb.jpeg?q=70&crop=false"
                      className="w-100"
                    />
                    <span className="badge badge-primary">30%</span>
                    <div className="actions">
                      <Button>
                        <BsArrowsFullscreen />
                      </Button>
                      <Button>
                        <FaRegHeart />
                      </Button>
                    </div>
                  </div>
                  <div className="info">
                    <h4>HRX by Hrithik Roshan</h4>
                    <span className="text-success d-block">In Stock</span>
                    <Rating
                      className="mt-2 mb-2"
                      name="read-only"
                      value={4}
                      readOnly
                      size="small"
                      precision={0.5}
                    />
                    <div className="d-flex">
                      <span className="oldPrice">20.00</span>
                      <span className="netPrice text-danger">20.00</span>
                    </div>
                  </div>
                </div>
                <div className="item productItem">
                  <div className="imgWrapper">
                    <img
                      src="https://rukminim2.flixcart.com/image/128/128/xif0q/t-shirt/v/a/u/m-ts72-vebnor-original-imah7rpffb9mqxeb.jpeg?q=70&crop=false"
                      className="w-100"
                    />
                    <span className="badge badge-primary">30%</span>
                    <div className="actions">
                      <Button>
                        <BsArrowsFullscreen />
                      </Button>
                      <Button>
                        <FaRegHeart />
                      </Button>
                    </div>
                  </div>
                  <div className="info">
                    <h4>HRX by Hrithik Roshan</h4>
                    <span className="text-success d-block">In Stock</span>
                    <Rating
                      className="mt-2 mb-2"
                      name="read-only"
                      value={4}
                      readOnly
                      size="small"
                      precision={0.5}
                    />
                    <div className="d-flex">
                      <span className="oldPrice">20.00</span>
                      <span className="netPrice text-danger">20.00</span>
                    </div>
                  </div>
                </div>
                <div className="item productItem">
                  <div className="imgWrapper">
                    <img
                      src="https://rukminim2.flixcart.com/image/128/128/xif0q/t-shirt/v/a/u/m-ts72-vebnor-original-imah7rpffb9mqxeb.jpeg?q=70&crop=false"
                      className="w-100"
                    />
                    <span className="badge badge-primary">30%</span>
                    <div className="actions">
                      <Button>
                        <BsArrowsFullscreen />
                      </Button>
                      <Button>
                        <FaRegHeart />
                      </Button>
                    </div>
                  </div>
                  <div className="info">
                    <h4>HRX by Hrithik Roshan</h4>
                    <span className="text-success d-block">In Stock</span>
                    <Rating
                      className="mt-2 mb-2"
                      name="read-only"
                      value={4}
                      readOnly
                      size="small"
                      precision={0.5}
                    />
                    <div className="d-flex">
                      <span className="oldPrice">20.00</span>
                      <span className="netPrice text-danger">20.00</span>
                    </div>
                  </div>
                </div>
                <div className="item productItem">
                  <div className="imgWrapper">
                    <img
                      src="https://rukminim2.flixcart.com/image/128/128/xif0q/t-shirt/v/a/u/m-ts72-vebnor-original-imah7rpffb9mqxeb.jpeg?q=70&crop=false"
                      className="w-100"
                    />
                    <span className="badge badge-primary">30%</span>
                    <div className="actions">
                      <Button>
                        <BsArrowsFullscreen />
                      </Button>
                      <Button>
                        <FaRegHeart />
                      </Button>
                    </div>
                  </div>
                  <div className="info">
                    <h4>HRX by Hrithik Roshan</h4>
                    <span className="text-success d-block">In Stock</span>
                    <Rating
                      className="mt-2 mb-2"
                      name="read-only"
                      value={4}
                      readOnly
                      size="small"
                      precision={0.5}
                    />
                    <div className="d-flex">
                      <span className="oldPrice">20.00</span>
                      <span className="netPrice text-danger">20.00</span>
                    </div>
                  </div>
                </div>
                <div className="item productItem">
                  <div className="imgWrapper">
                    <img
                      src="https://rukminim2.flixcart.com/image/128/128/xif0q/t-shirt/v/a/u/m-ts72-vebnor-original-imah7rpffb9mqxeb.jpeg?q=70&crop=false"
                      className="w-100"
                    />
                    <span className="badge badge-primary">30%</span>
                    <div className="actions">
                      <Button>
                        <BsArrowsFullscreen />
                      </Button>
                      <Button>
                        <FaRegHeart />
                      </Button>
                    </div>
                  </div>
                  <div className="info">
                    <h4>HRX by Hrithik Roshan</h4>
                    <span className="text-success d-block">In Stock</span>
                    <Rating
                      className="mt-2 mb-2"
                      name="read-only"
                      value={4}
                      readOnly
                      size="small"
                      precision={0.5}
                    />
                    <div className="d-flex">
                      <span className="oldPrice">20.00</span>
                      <span className="netPrice text-danger">20.00</span>
                    </div>
                  </div>
                </div>
                <div className="item productItem">
                  <div className="imgWrapper">
                    <img
                      src="https://rukminim2.flixcart.com/image/128/128/xif0q/t-shirt/v/a/u/m-ts72-vebnor-original-imah7rpffb9mqxeb.jpeg?q=70&crop=false"
                      className="w-100"
                    />
                    <span className="badge badge-primary">30%</span>
                    <div className="actions">
                      <Button>
                        <BsArrowsFullscreen />
                      </Button>
                      <Button>
                        <FaRegHeart />
                      </Button>
                    </div>
                  </div>
                  <div className="info">
                    <h4>HRX by Hrithik Roshan</h4>
                    <span className="text-success d-block">In Stock</span>
                    <Rating
                      className="mt-2 mb-2"
                      name="read-only"
                      value={4}
                      readOnly
                      size="small"
                      precision={0.5}
                    />
                    <div className="d-flex">
                      <span className="oldPrice">20.00</span>
                      <span className="netPrice text-danger">20.00</span>
                    </div>
                  </div>
                </div>
                <div className="item productItem">
                  <div className="imgWrapper">
                    <img
                      src="https://rukminim2.flixcart.com/image/128/128/xif0q/t-shirt/v/a/u/m-ts72-vebnor-original-imah7rpffb9mqxeb.jpeg?q=70&crop=false"
                      className="w-100"
                    />
                    <span className="badge badge-primary">30%</span>
                    <div className="actions">
                      <Button>
                        <BsArrowsFullscreen />
                      </Button>
                      <Button>
                        <FaRegHeart />
                      </Button>
                    </div>
                  </div>
                  <div className="info">
                    <h4>HRX by Hrithik Roshan</h4>
                    <span className="text-success d-block">In Stock</span>
                    <Rating
                      className="mt-2 mb-2"
                      name="read-only"
                      value={4}
                      readOnly
                      size="small"
                      precision={0.5}
                    />
                    <div className="d-flex">
                      <span className="oldPrice">20.00</span>
                      <span className="netPrice text-danger">20.00</span>
                    </div>
                  </div>
                </div>

              
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsLetterSec mt-3 mb-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white"> $20 0ff on your first order</p>
              <h3 className="text-white">join our newsletter and get...</h3>
              <p className="text-light">join our email subsription now to get updates</p>

              <form>
              <MdOutlineMail />
                <input type="text" placeholder="Your Email Address..."/>
                <Button>Subscribe</Button>
              </form>
             
            </div>
            <div className="col-md-6">
              <img src={offimg}/>
            </div>
          </div>
        </div>
      </section>
      
      {/* <ProductModal/> */}
    </>
  );
};

export default Home;
