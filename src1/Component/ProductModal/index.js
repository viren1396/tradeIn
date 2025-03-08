import React from "react";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";

import { useContext } from "react";
import { MyContext } from "../../App";
import { IoCloseSharp } from "react-icons/io5";

import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

import QuantityBox from "../QuantityBox";
import ProductZoom from "../ProductZoom";

const ProductModal = (props) => {
  const context = useContext(MyContext);

  return (
    <>
      <Dialog
        open={context.isOpenProductModal}
        className="productmodal"
        onClose={() => context.setisOpenProductModal(false)}
      >
        <Button
          className="close_"
          onClick={() => context.setisOpenProductModal(false)}
        >
          <IoCloseSharp />
        </Button>
        <div className="row mt-3 productDetailModal">
          <div className="col-md-5">
            <ProductZoom />
          </div>

          <div className="col-md-7">
            <div className="d-flex info align-items-center">
              <h4 className="mb-1 d-block">
                Men Printed Hooded Neck Cotton Blend Black T-Shirt
              </h4>
            </div>
            <div className="d-flex align-items-center">
              <span className="brand">
                Brand : <b>BLIVE</b>
              </span>
            </div>
            <div>
              <Rating
                name="read-only"
                value={4}
                size="medium"
                precision={0.5}
                readOnly
                className="mt-2"
              />
            </div>
            <h6>Product Details</h6>
            <p>
              Name : BLIVE Men Printed Hooded Neck Cotton Blend Black T-Shirt
              <br />
              Fabric : Cotton
              <br />
              Sleeve Length : Sleeveless
              <br />
              Pattern : Solid
              <br />
              Net Quantity (N): 1
              <br />
              Sizes : S ,M ,L ,XL
              <br />
              Country of Origin : India
            </p>
            <span className="oldPrice lg">₹999</span>
            <span className="netPrice lg text-danger">₹299</span>
            <span className="off">
              <b>70% off</b>
            </span>
            <div className="d-flex align-items-center">
              <QuantityBox />
              <Button className="btn-blue btn-lg btn-big btn-round">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};
export default ProductModal;
