import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [value, setValue] = useState([100, 5000]);
  const [value2, setValue2] = useState(0);

  return (
    <>
      <div className="sidebar">
        <div className="sticky">
        <div className="filterBox">
          <h6>PRODUCT CATEGORIES</h6>
          <div className="scroll">
            <ul>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Men"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Women"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Kids"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="FootWear"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Accessories"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Sale & Clerance"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="New Arrivals"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Women"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Kids"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="FootWear"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Accessories"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Sale & Clerance"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="New Arrivals"
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="filterBox">
          <h6>FILTER BY PRICE</h6>
          <RangeSlider
            value={value}
            onInput={setValue}
            min={100}
            max={5000}
            step={5}
          />

          <div className="d-flex pt-2 pb-2 priceRange">
            <spna>
              From: <strong className="text-dark">Rs: {value[0]}</strong>
            </spna>
            <span className="range">
              From: <strong className="text-dark">Rs: {value[1]}</strong>
            </span>
          </div>
        </div>

        <div className="filterBox">
          <h6>PRODUCT STATUS</h6>
          <div className="scroll">
            <ul>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="In Stock"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="On Sale"
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="filterBox">
          <h6>BRAND</h6>
          <div className="scroll">
            <ul>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Gucci"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Zara"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Cartier "
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Adidas"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Nike"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Levis"
                />
              </li>
              <li>
                <FormControlLabel
                  className="w-100"
                  control={<Checkbox />}
                  label="Calvin Klein"
                />
              </li>
            </ul>
          </div>
        </div>

        <Link to='#'><img src="https://preview.redd.it/zara-sale-alert-for-26-12-2024-v0-266f6gqiu09e1.jpeg?width=1080&crop=smart&auto=webp&s=c0159dff53b88f6785b4049dd4a20a1820fb7656" className="w-100"/></Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
