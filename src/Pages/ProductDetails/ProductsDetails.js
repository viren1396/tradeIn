import Rating from "@mui/material/Rating";
import ProductZoom from "../../Component/ProductZoom";
import QuantityBox from "../../Component/QuantityBox";
import Button from "@mui/material/Button";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import RelatedProducts from "./RelatedProducts/RelatedProducts";

const ProductDetails = () => {
  const [activeSize, setActiveSize] = useState(null);

  const [activeTabs, setActiveTabs] = useState(2);

  const isActive = (index) => {
    setActiveSize(index);
  };

  return (
    <>
      <section className="productDetails section">
        <div className="container">
          <div className="row">
            <div className="part1 col-md-4">
              <ProductZoom />
            </div>
            <div className="part2 col-md-7">
              <h2 className="hd text-capitalize ">
                Men Geometric Print Polo Neck Pure Cotton Black T-Shirt
              </h2>
              <ul className="list list-inline ">
                <li>
                  <span className="brand">Brand:</span>
                  <span className="bname">Campus Sutra</span>
                </li>
                <li className="list-inline-item d-flex align-items-center mt-2">
                  <Rating
                    name="read-only"
                    value={4.5}
                    precision={0.5}
                    readOnly
                  />
                  <span className="RS">1 Review</span>
                </li>
                <div className="mt-2">
                  <span className="netPrice lg text-dark">₹299</span>
                  <span className="oldPrice lg">₹999</span>
                  <span className="off">
                    <b>70% off</b>
                  </span>
                </div>
                <span className="badge badge-success mt-2">In Stock</span>
              </ul>

              <div className="row d-flex align-items-center">
                <h5>Product Details</h5>
                <div className="col d-flex align-items-center">
                  <ul className="Pro-det1">
                    <li>Material composition</li>
                    <li>Pattern</li>
                    <li>Fit type</li>
                    <li>Sleeve type</li>
                    <li>Collar style</li>
                    <li>Length</li>
                    <li>Country of Origin</li>
                  </ul>
                </div>
                <div className="col d-flex align-items-center">
                  <ul className="Pro-det2">
                    <li>100% Cotten</li>
                    <li>Graphic</li>
                    <li>Regular Fit</li>
                    <li>Half Sleeve</li>
                    <li>Round Collar</li>
                    <li>Standard Length</li>
                    <li>India</li>
                  </ul>
                </div>
              </div>
              <hr />

              <div className="about mt-2">
                <h5>About this item</h5>
                <ul>
                  <li>
                    Fit Type: Regular Fit | Material: 100% cotton with a high
                    thread count, bio washed, double needle sleeve and bottom
                    hem
                  </li>
                  <li>Design Category – Occasions-Festivals of India</li>
                  <li>Design - Happy Holi</li>
                  <li>
                    Printing: These designs are printed on the T-shirts using
                    the latest Direct-to-garment technology
                  </li>
                  <li>
                    Sizes: Our T-shirt is available in - XS,S, M, L, XL, XXL AND
                    XXXL
                  </li>
                  <li>
                    Wash Care Instructions: Wash the tee in cold water and don't
                    dry in direct sunlight
                  </li>
                </ul>
              </div>

              <div className="productSize d-flex align-items-center">
                <span>Size / Weight:</span>
                <ul className="list list-inline mb-0 pl-4">
                  <li className="list-inline-item">
                    <a
                      className={`tag { activeSize === 0 "active" : ""}`}
                      onClick={() => isActive(0)}
                    >
                      M
                    </a>{" "}
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag { activeSize === 1 "active" : ""}`}
                      onClick={() => isActive(1)}
                    >
                      XL
                    </a>{" "}
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag { activeSize === 2 "active" : ""}`}
                      onClick={() => isActive(2)}
                    >
                      XXL
                    </a>{" "}
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag { activeSize === 3 "active" : ""}`}
                      onClick={() => isActive(3)}
                    >
                      XXXL
                    </a>{" "}
                  </li>
                </ul>
              </div>

              <div className="d-flex align-items-center">
                <QuantityBox />
                <Button className="btn-blue btn-lg btn-big btn-round ml-2">
                  <FaShoppingCart /> &nbsp; Add to Cart
                </Button>
                <Tooltip title="Add to WishList" placement="top">
                  <Button className="btn-blue btn-lg btn-big btn-circle">
                    <FaRegHeart />
                  </Button>
                </Tooltip>
                <Tooltip title="Add to Compare" placement="top">
                  <Button className="btn-blue btn-lg btn-big btn-circle">
                    <MdCompareArrows />
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>

          <div className="card mt-5 p-5 detailsPageTabs">
            <div className="customTabs">
              <ul className="list list-inline">
                <li className="list-inline-item">
                  <Button onClick={() => setActiveTabs(0)}>Description</Button>
                </li>
                <li className="list-inline-item">
                  <Button onClick={() => setActiveTabs(1)}>
                    Additional info
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button onClick={() => setActiveTabs(2)}>Reviews (5)</Button>
                </li>
              </ul>

              {/* Description Start Here */}
              {activeTabs === 0 && (
                <div className="tabContent">
                  <p>
                    Showcase your refined sartorial taste with this Slim Fit
                    Shirt from Louis Philippe at any casual event. The
                    slim-fitting designs offer breathability and comfort, ideal
                    for men on-the-go, looking to explore life through unique
                    fashion. Perfect for any casual occasion, this shirt is
                    designed to keep you at ease all day long. Indulge in
                    timeless elegance with this Louis Philippe Sport Shirt for
                    men.
                  </p>

                  <h3>Product Details</h3>
                  <ul>
                    <li>Product Dimensions : 27.5 x 22.5 x 2 cm; 300 g</li>
                    <li>Date First Available : 29 May 2024</li>
                    <li>Manufacturer : ABFRL</li>
                    <li>ASIN : B0D5HRG7L7</li>
                    <li>Item model number : LYSFCSLPC69025</li>
                    <li>Country of Origin : India</li>
                    <li>Department : Men</li>
                    <li>
                      Manufacturer : ABFRL, Aditya Birla Fashion & Retail Ltd,
                      7th Flr, Skyline Ikon Business Park, AK Road, Andheri
                      East, Mumbai-400059
                    </li>
                    <li>
                      Packer : Aditya Birla Fashion & Retail Ltd, 7th Flr,
                      Skyline Ikon Business Park, AK Road, Andheri East,
                      Mumbai-400059
                    </li>
                    <li>Item Weight : 300 g</li>
                    <li>Item Dimensions LxWxH : 27.5 x 22.5 x 2 Centimeters</li>
                    <li>Generic Name : Shirt</li>
                    <li>
                      Best Sellers Rank: #90,100 in Clothing & Accessories (See
                      Top 100 in Clothing & Accessories)#3,788 in Men's Shirts
                    </li>
                  </ul>

                  <h3>Packing & Delivery</h3>
                  <p>
                    Showcase your refined sartorial taste with this Slim Fit
                    Shirt from Louis Philippe at any casual event.
                    <br /> The slim-fitting designs offer breathability and
                    comfort, ideal for men on-the-go, looking to explore life
                    through unique fashion.Perfect for any casual occasion, this
                    shirt is designed to keep you at ease all day long. Indulge
                    in timeless elegance with this Louis Philippe Sport Shirt
                    for men.Showcase your refined sartorial taste with this Slim
                    Fit Shirt from Louis Philippe at any casual event.
                    <br /> The slim-fitting designs offer breathability and
                    comfort, ideal for men on-the-go, looking to explore life
                    through unique fashion. Perfect for any casual occasion,
                    this shirt is designed to keep you at ease all day long.
                    Indulge in timeless elegance with this Louis Philippe Sport
                    Shirt for men.
                  </p>

                  <h3>Suggest Use</h3>
                  <p>
                    Showcase your refined sartorial taste with this Slim Fit
                    Shirt from Louis Philippe at any casual event.
                    <br /> The slim-fitting designs offer breathability and
                    comfort, ideal for men on-the-go, looking to explore life
                    through unique fashion.Perfect for any casual occasion, this
                    shirt is designed to keep you at ease all day long. Indulge
                    in timeless elegance with this Louis Philippe Sport Shirt
                    for men.Showcase your refined sartorial taste with this Slim
                    Fit Shirt from Louis Philippe at any casual event.
                  </p>
                </div>
              )}
              {/* Additional info start here */}
              {activeTabs === 1 && (
                <div className="tabContent">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <tbody>
                        <tr class="pa-size">
                          <th>Color</th>
                          <td>
                            <p>Black, White, Red, Blue</p>
                          </td>
                        </tr>
                        <tr class="pa-size">
                          <th>Color</th>
                          <td>
                            <p>Black, White, Red, Blue</p>
                          </td>
                        </tr>
                        <tr class="pa-size">
                          <th>Color</th>
                          <td>
                            <p>Black, White, Red, Blue</p>
                          </td>
                        </tr>
                        <tr class="pa-size">
                          <th>Color</th>
                          <td>
                            <p>Black, White, Red, Blue</p>
                          </td>
                        </tr>
                        <tr class="pa-size">
                          <th>Color</th>
                          <td>
                            <p>Black, White, Red, Blue</p>
                          </td>
                        </tr>
                        <tr class="pa-size">
                          <th>Color</th>
                          <td>
                            <p>Black, White, Red, Blue</p>
                          </td>
                        </tr>
                        <tr class="pa-size">
                          <th>Color</th>
                          <td>
                            <p>Black, White, Red, Blue</p>
                          </td>
                        </tr>
                        <tr class="pa-size">
                          <th>Color</th>
                          <td>
                            <p>Black, White, Red, Blue</p>
                          </td>
                        </tr>
                        <tr class="pa-size">
                          <th>Color</th>
                          <td>
                            <p>Black, White, Red, Blue</p>
                          </td>
                        </tr>
                        <tr class="pa-size">
                          <th>Color</th>
                          <td>
                            <p>Black, White, Red, Blue</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              {/* review start here */}
              {activeTabs === 2 && (
                <div className="tabContent">
                  <div className="row">
                    <div className="col-md-8">
                      <h3>Customer Questions & Answers</h3>

                      <div className="card p-3 reviewsCard flex-row">
                        <div className="info pl-5 w-100">
                          <div className="d-flex align-items-center ">
                            <h5 className="text-dark">
                              December 4,2022 at 3:15
                            </h5>
                            <div className="cusrating">
                              <Rating
                                name="read-only"
                                value={4}
                                size="small"
                                readOnly
                              />
                            </div>
                          </div>

                          <p>
                            Showcase your refined sartorial taste with this Slim
                            Fit Shirt from Louis Philippe at any casual event.
                            The slim-fitting designs offer breathability and
                            comfort, ideal for men on-the-go, looking to explo
                          </p>
                        </div>
                      </div>
                      <div className="card p-3 reviewsCard flex-row">
                        <div className="info pl-5 w-100">
                          <div className="d-flex align-items-center ">
                            <h5 className="text-dark">
                              December 4,2022 at 3:15
                            </h5>
                            <div className="cusrating">
                              <Rating
                                name="read-only"
                                value={4}
                                size="small"
                                readOnly
                              />
                            </div>
                          </div>

                          <p>
                            Showcase your refined sartorial taste with this Slim
                            Fit Shirt from Louis Philippe at any casual event.
                            The slim-fitting designs offer breathability and
                            comfort, ideal for men on-the-go, looking to explo
                          </p>
                        </div>
                      </div>
                      <div className="card p-3 reviewsCard flex-row">
                        <div className="info pl-5 w-100">
                          <div className="d-flex align-items-center ">
                            <h5 className="text-dark">
                              December 4,2022 at 3:15
                            </h5>
                            <div className="cusrating">
                              <Rating
                                name="read-only"
                                value={4}
                                size="small"
                                readOnly
                              />
                            </div>
                          </div>

                          <p>
                            Showcase your refined sartorial taste with this Slim
                            Fit Shirt from Louis Philippe at any casual event.
                            The slim-fitting designs offer breathability and
                            comfort, ideal for men on-the-go, looking to explo
                          </p>
                        </div>
                      </div>
                      <div className="card p-3 reviewsCard flex-row">
                        <div className="info pl-5 w-100">
                          <div className="d-flex align-items-center ">
                            <h5 className="text-dark">
                              December 4,2022 at 3:15
                            </h5>
                            <div className="cusrating">
                              <Rating
                                name="read-only"
                                value={4}
                                size="small"
                                readOnly
                              />
                            </div>
                          </div>

                          <p>
                            Showcase your refined sartorial taste with this Slim
                            Fit Shirt from Louis Philippe at any casual event.
                            The slim-fitting designs offer breathability and
                            comfort, ideal for men on-the-go, looking to explo
                          </p>
                        </div>
                      </div>
                      <div className="card p-3 reviewsCard flex-row">
                        <div className="info pl-5 w-100">
                          <div className="d-flex align-items-center ">
                            <h5 className="text-dark">
                              December 4,2022 at 3:15
                            </h5>
                            <div className="cusrating">
                              <Rating
                                name="read-only"
                                value={4}
                                size="small"
                                readOnly
                              />
                            </div>
                          </div>

                          <p>
                            Showcase your refined sartorial taste with this Slim
                            Fit Shirt from Louis Philippe at any casual event.
                            The slim-fitting designs offer breathability and
                            comfort, ideal for men on-the-go, looking to explo
                          </p>
                        </div>
                      </div>
                      <div className="card p-3 reviewsCard flex-row">
                        <div className="info pl-5 w-100">
                          <div className="d-flex align-items-center ">
                            <h5 className="text-dark">
                              December 4,2022 at 3:15
                            </h5>
                            <div className="cusrating">
                              <Rating
                                name="read-only"
                                value={4}
                                size="small"
                                readOnly
                              />
                            </div>
                          </div>

                          <p>
                            Showcase your refined sartorial taste with this Slim
                            Fit Shirt from Louis Philippe at any casual event.
                            The slim-fitting designs offer breathability and
                            comfort, ideal for men on-the-go, looking to explo
                          </p>
                        </div>
                      </div>

                      <form className="reviewform">
                        <h4>Add Review</h4>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Email"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            placeholder="Write a Comment..."
                          ></textarea>
                        </div>

                        <div className="form-group">
                          <Button className="btn-blue btn-lg btn-round btn-big  ">
                            Submit
                          </Button>
                        </div>
                      </form>
                    </div>

                    <div className="col-md-4">
                      <h4>Customer Reviews</h4>
                      <div className="d-flex align-items-center mt-2">
                        <Rating
                          name="read-only"
                          value={4.5}
                          precision={0.5}
                          readOnly
                        />
                        <strong className="ml-3">4.8 out of 5</strong>
                      </div>

                      <div className="progressBarBox d-flex align-items-center mt-3">
                        <span className="rat">5 Star</span>
                        <div
                          class="progress"
                          style={{ width: "85%", height: "15px" }}
                        >
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: "25%", height: "15px" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            25%
                          </div>
                        </div>
                      </div>
                      <div className="progressBarBox d-flex align-items-center">
                        <span className="rat">4 Star</span>
                        <div
                          class="progress"
                          style={{ width: "85%", height: "15px" }}
                        >
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: "25%", height: "15px" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            25%
                          </div>
                        </div>
                      </div>
                      <div className="progressBarBox d-flex align-items-center">
                        <span className="rat">3 Star</span>
                        <div
                          class="progress"
                          style={{ width: "85%", height: "15px" }}
                        >
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: "25%", height: "15px" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            25%
                          </div>
                        </div>
                      </div>
                      <div className="progressBarBox d-flex align-items-center">
                        <span className="rat">2 Star</span>
                        <div
                          class="progress"
                          style={{ width: "85%", height: "15px" }}
                        >
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: "25%", height: "15px" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            25%
                          </div>
                        </div>
                      </div>
                      <div className="progressBarBox d-flex align-items-center">
                        <span className="rat">1 Star</span>
                        <div
                          class="progress"
                          style={{ width: "85%", height: "15px" }}
                        >
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: "25%", height: "15px" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            25%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <RelatedProducts title="RELATED PRODUCTS" />
          <RelatedProducts title="RECENTLY VIEW PRODUCTS" />
        </div>
      </section>
    </>
  );
};
export default ProductDetails;
