import Button from "@mui/material/Button";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { GoTriangleDown } from "react-icons/go";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";

const Categories = () => {
  const [isopenSidebarVal, setisopenSidebarVal] = useState(false);

  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 navPart1">
            <div className="catWrapper">
              <Button
                className="allCatTab align-items-center"
                onClick={() => setisopenSidebarVal(!isopenSidebarVal)}
              >
                <span className="icon1 mr-2">
                  <IoMenu />
                </span>
                <span class="text">All Categories</span>
                <span className="icon2 ml-2">
                  <GoTriangleDown />
                </span>
              </Button>

              <div
                className={`sidebarNav ${
                  isopenSidebarVal === true ? "open" : ""
                }`}
              >
                <ul>
                  <li>
                    <Link to="/"><Button>Men<FaAngleRight className='ml-auto'/></Button></Link>
                    <div className="submenu">
                      <Link to="/"><Button>Top Wear</Button></Link>
                      <Link to="/"><Button>Bottom Wear</Button></Link>
                      <Link to="/"><Button>OutWear</Button></Link>
                      <Link to="/"><Button>Active Wear</Button></Link>
                      <Link to="/"><Button>Ethnic & Traditional</Button></Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/"><Button>WoMen<FaAngleRight className='ml-auto'/></Button></Link>
                    <div className="submenu">
                      <Link to="/"><Button>Top Wear</Button></Link>
                      <Link to="/"><Button>Bottom Wear</Button></Link>
                      <Link to="/"><Button>Dresses</Button></Link>
                      <Link to="/"><Button>OutWear</Button></Link>
                      <Link to="/"><Button>Active Wear</Button></Link>
                      <Link to="/"><Button>Ethnic & Traditional</Button></Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/"><Button>Kids</Button></Link>
                      <div className="submenu">
                        <Link to="/"><Button>Top Wear</Button></Link>
                        <Link to="/"><Button>Boys Clothing</Button></Link>
                        <Link to="/"><Button>Girls Clothing</Button></Link>
                        <Link to="/"><Button>Toys & Games</Button></Link>
                        <Link to="/"><Button>Baby Care</Button></Link>
                        <Link to="/"><Button>Ethnic Wear</Button></Link>
                    </div>      
                  </li>
                  <li>
                    <Link to="/"><Button>FootWear</Button></Link>
                    <div className="submenu">
                      <Link to="/"><Button>Men</Button></Link>
                      <Link to="/"><Button>Women</Button></Link>
                      <Link to="/"><Button>Kids</Button></Link>
                    </div>    
                  </li>
                  <li>
                    <Link to="/"><Button>Accessories</Button></Link>
                  </li>
                  <li>
                    <Link to="/"><Button>Sale & Clerance</Button></Link>
                  </li>
                  <li>
                    <Link to="/"><Button>New Arrivals</Button></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-9 navPart2 d-flex align-item-center">
            <ul className="list list-inline ml-auto">
              <li className="list-inline-item">
                <Link to="/">Men</Link>
                <div className="menu shadow">
                  <Link to="/">
                    <Button>Top Wear</Button>
                  </Link>
                  <Link to="/">
                    <Button>Bottom Wear</Button>
                  </Link>
                  <Link to="/">
                    <Button>OutWear</Button>
                  </Link>
                  <Link to="/">
                    <Button>Active Wear</Button>
                  </Link>
                  <Link to="/">
                    <Button>Ethnic & Traditional</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">Women</Link>
                <div className="menu shadow">
                  <Link to="/">
                    <Button>Top Wear</Button>
                  </Link>
                  <Link to="/">
                    <Button>Bottom Wear</Button>
                  </Link>
                  <Link to="/">
                    <Button>Dresses</Button>
                  </Link>
                  <Link to="/">
                    <Button>OutWear</Button>
                  </Link>
                  <Link to="/">
                    <Button>Active Wear</Button>
                  </Link>
                  <Link to="/">
                    <Button>Ethnic & Traditional</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">Kids</Link>
                <div className="menu shadow">
                  <Link to="/">
                    <Button>Boys Clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>Girls Clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>Toys & Games</Button>
                  </Link>
                  <Link to="/">
                    <Button>Baby Care</Button>
                  </Link>
                  <Link to="/">
                    <Button>Ethnic Wear</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">Foot Wear</Link>
                <div className="menu shadow">
                  <Link to="/">
                    <Button>Men</Button>
                  </Link>
                  <Link to="/">
                    <Button>Women</Button>{" "}
                  </Link>
                  <Link to="/">
                    <Button>Kids</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">Accessories</Link>
                <div className="menu shadow">
                  <Link to="/">
                    <Button>Bags & Wallets</Button>
                  </Link>
                  <Link to="/">
                    <Button>Jewellery</Button>
                  </Link>
                  <Link to="/">
                    <Button>Hats</Button>
                  </Link>
                  <Link to="/">
                    <Button>Belts</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">Sale & Clerance</Link>
                <div className="menu shadow">
                  <Link to="/">
                    <Button>Men's Sale</Button>
                  </Link>
                  <Link to="/">
                    <Button>Women's Sale</Button>
                  </Link>
                  <Link to="/">
                    <Button>Kids' Sale</Button>
                  </Link>
                  <Link to="/">
                    <Button>Accessories Sale</Button>
                  </Link>
                  <Link to="/">
                    <Button>Footwear Sale</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">New Arrivals</Link>
                <div className="menu1 shadow">
                  <Link to="/">
                    <Button>Men's New Arrivals</Button>
                  </Link>
                  <Link to="/">
                    <Button>Women's New Arrivals</Button>
                  </Link>
                  <Link to="/">
                    <Button>Kids' New Arrivals</Button>
                  </Link>
                  <Link to="/">
                    <Button>Accessories New Arrivals</Button>
                  </Link>
                  <Link to="/">
                    <Button>Footwear New Arrivals</Button>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Categories;
