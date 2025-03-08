import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import QuantityBox from "../../Component/QuantityBox";
import { IoClose } from "react-icons/io5";
import Button from "@mui/material/Button";

const Cart = () => {
  return (
    <>
      <section className="section cartPage">
        <div className="conatiner">
          <h2 className="hd mb-0">Your product</h2>
          <p>
            There are <b>3</b> products in your cart
          </p>

          <div className="row">
            <div className="col-md-8 ">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th width="45%">Product</th>
                      <th width="15%">Unit Price</th>
                      <th width="25%">Quntity</th>
                      <th width="10%">Subtotal</th>
                      <th width="5%">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td width="45%">
                        <Link to="/product/1">
                          <div className="d-flex align-items-center cartItemImgWrapper">
                            <div className="imgWrapper">
                              <img
                                src="https://rukminim2.flixcart.com/image/224/224/xif0q/shoe/b/l/v/7-hs-multi-2-7-7-hotstyle-black-black-original-imah3s8dqmgvxhbp.jpeg?q=90"
                                className="w-100"
                              ></img>
                            </div>

                            <div className="info">
                              <h6>HOTSTYLE Sports Shoes , Walking Shoes</h6>
                              <Rating
                                name="read-only"
                                value={4.5}
                                size="small"
                                precision={0.5}
                                readOnly
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width="15%" className="pt">
                        $299
                      </td>
                      <td width="25%">
                        <QuantityBox />
                      </td>
                      <td width="10%">$299</td>
                      <td width="5%">
                        <span className="remove">
                          <IoClose />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td width="45%">
                        <Link to="/product/1">
                          <div className="d-flex align-items-center cartItemImgWrapper">
                            <div className="imgWrapper">
                              <img
                                src="https://rukminim2.flixcart.com/image/224/224/xif0q/shoe/b/l/v/7-hs-multi-2-7-7-hotstyle-black-black-original-imah3s8dqmgvxhbp.jpeg?q=90"
                                className="w-100"
                              ></img>
                            </div>

                            <div className="info">
                              <h6>HOTSTYLE Sports Shoes , Walking Shoes</h6>
                              <Rating
                                name="read-only"
                                value={4.5}
                                size="small"
                                precision={0.5}
                                readOnly
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width="15%" className="pt">
                        $299
                      </td>
                      <td width="25%">
                        <QuantityBox />
                      </td>
                      <td width="10%">$299</td>
                      <td width="5%">
                        <span className="remove">
                          <IoClose />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td width="45%">
                        <Link to="/product/1">
                          <div className="d-flex align-items-center cartItemImgWrapper">
                            <div className="imgWrapper">
                              <img
                                src="https://rukminim2.flixcart.com/image/224/224/xif0q/shoe/b/l/v/7-hs-multi-2-7-7-hotstyle-black-black-original-imah3s8dqmgvxhbp.jpeg?q=90"
                                className="w-100"
                              ></img>
                            </div>

                            <div className="info">
                              <h6>HOTSTYLE Sports Shoes , Walking Shoes</h6>
                              <Rating
                                name="read-only"
                                value={4.5}
                                size="small"
                                precision={0.5}
                                readOnly
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width="15%" className="pt">
                        $299
                      </td>
                      <td width="25%">
                        <QuantityBox />
                      </td>
                      <td width="10%">$299</td>
                      <td width="5%">
                        <span className="remove">
                          <IoClose />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td width="45%">
                        <Link to="/product/1">
                          <div className="d-flex align-items-center cartItemImgWrapper">
                            <div className="imgWrapper">
                              <img
                                src="https://rukminim2.flixcart.com/image/224/224/xif0q/shoe/b/l/v/7-hs-multi-2-7-7-hotstyle-black-black-original-imah3s8dqmgvxhbp.jpeg?q=90"
                                className="w-100"
                              ></img>
                            </div>

                            <div className="info">
                              <h6>HOTSTYLE Sports Shoes , Walking Shoes</h6>
                              <Rating
                                name="read-only"
                                value={4.5}
                                size="small"
                                precision={0.5}
                                readOnly
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width="15%" className="pt">
                        $299
                      </td>
                      <td width="25%">
                        <QuantityBox />
                      </td>
                      <td width="10%">$299</td>
                      <td width="5%">
                        <span className="remove">
                          <IoClose />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td width="45%">
                        <Link to="/product/1">
                          <div className="d-flex align-items-center cartItemImgWrapper">
                            <div className="imgWrapper">
                              <img
                                src="https://rukminim2.flixcart.com/image/224/224/xif0q/shoe/b/l/v/7-hs-multi-2-7-7-hotstyle-black-black-original-imah3s8dqmgvxhbp.jpeg?q=90"
                                className="w-100"
                              ></img>
                            </div>

                            <div className="info">
                              <h6>HOTSTYLE Sports Shoes , Walking Shoes</h6>
                              <Rating
                                name="read-only"
                                value={4.5}
                                size="small"
                                precision={0.5}
                                readOnly
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width="15%" className="pt">
                        $299
                      </td>
                      <td width="25%">
                        <QuantityBox />
                      </td>
                      <td width="10%">$299</td>
                      <td width="5%">
                        <span className="remove">
                          <IoClose />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td width="45%">
                        <Link to="/product/1">
                          <div className="d-flex align-items-center cartItemImgWrapper">
                            <div className="imgWrapper">
                              <img
                                src="https://rukminim2.flixcart.com/image/224/224/xif0q/shoe/b/l/v/7-hs-multi-2-7-7-hotstyle-black-black-original-imah3s8dqmgvxhbp.jpeg?q=90"
                                className="w-100"
                              ></img>
                            </div>

                            <div className="info">
                              <h6>HOTSTYLE Sports Shoes , Walking Shoes</h6>
                              <Rating
                                name="read-only"
                                value={4.5}
                                size="small"
                                precision={0.5}
                                readOnly
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width="15%" className="pt">
                        $299
                      </td>
                      <td width="25%">
                        <QuantityBox />
                      </td>
                      <td width="10%">$299</td>
                      <td width="5%">
                        <span className="remove">
                          <IoClose />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td width="45%">
                        <Link to="/product/1">
                          <div className="d-flex align-items-center cartItemImgWrapper">
                            <div className="imgWrapper">
                              <img
                                src="https://rukminim2.flixcart.com/image/224/224/xif0q/shoe/b/l/v/7-hs-multi-2-7-7-hotstyle-black-black-original-imah3s8dqmgvxhbp.jpeg?q=90"
                                className="w-100"
                              ></img>
                            </div>

                            <div className="info">
                              <h6>HOTSTYLE Sports Shoes , Walking Shoes</h6>
                              <Rating
                                name="read-only"
                                value={4.5}
                                size="small"
                                precision={0.5}
                                readOnly
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width="15%" className="pt">
                        $299
                      </td>
                      <td width="25%">
                        <QuantityBox />
                      </td>
                      <td width="10%">$299</td>
                      <td width="5%">
                        <span className="remove">
                          <IoClose />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border p-3 cartDetails">
                <h4>CART TOTALS</h4>

                <div className="d-flex align-items-center mb-2">
                  <span>Subtotal</span>
                  <span className="subt text-purple">$41.50</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <span>Shipping</span>
                  <span className="subt text-purple">Free</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <span>Estimate for</span>
                  <span className="subt text-purple">India</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <span>Total</span>
                  <span className="subt text-purple">$645</span>
                </div>
                <Button className="btn-blue btn-lg btn-big">Add to Cart</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Cart;
