import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { useContext } from "react";
import { BsArrowsFullscreen } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import ProductModal from "../ProductModal";
import { MyContext } from "../../App";

const ProductItem = (props) => {
  const context = useContext(MyContext);

  const viewProductDetails = (id) => {
    context.setisOpenProductModal(true);
  };

  return (
    <>
      <div className={`productItem ${props.itemView}`}>
        <div className="imgWrapper">
          <img
            src="https://rukminim2.flixcart.com/image/128/128/xif0q/t-shirt/v/a/u/m-ts72-vebnor-original-imah7rpffb9mqxeb.jpeg?q=70&crop=false"
            className="w-100"
          />
          <span className="badge badge-primary">70%</span>
          <div className="actions">
            <Button onClick={() => viewProductDetails(1)}>
              <BsArrowsFullscreen />
            </Button>
            <Button>
              <FaRegHeart />
            </Button>
          </div>
        </div>
        <div className="info">
          <h4>HRX by Hrithik Roshan</h4>
          <span className="st text-success d-block">In Stock</span>
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
    </>
  );
};

export default ProductItem;
