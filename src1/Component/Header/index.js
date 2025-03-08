import { Link } from "react-router-dom";
import Logo from "../../assest/Image/Logo.png";
import LocDropDown from "../LocDropDown";
import SearchBox from "../Header/SearchBox";
import { Button } from "@mui/material";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa6";
import Categories from "../Header/Categories";
import { MyContext } from "../../App";
import { useContext } from "react";

const Header = () => {

  const context = useContext(MyContext);
   
  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-btn-blue">
          <div className="container">
            <p className="mb-0 mb-0 text-center">
              Sign Up & get 20% off to your first order
              <a className="sign-btn" href="#">
                Sign Up Now
              </a>
            </p>
          </div>
        </div>

        <header className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex align-items-center col-sm-2">
                <Link to={"/"}>
                  <img src={Logo} alt="logo" />
                </Link>
              </div>

              <div className="col-sm-10 d-flex align-items-center part2">
                <SearchBox />
                <LocDropDown />
                <div className="part3 d-flex align-items-center ml-auto">
                  <Button className="circle mr-3">
                    <LiaShoppingCartSolid />
                  </Button>
                </div>

                <div className="part4 d-flex align-items-center ml-auto">
                  <ul>
                    <li>
                      <Link to="/">
                        <Button className="circle2"><FaRegUser /></Button>
                      </Link>
                      <div className="submenu">
                        {
                          context.isLogin !== true ?<Link to="/signUp">
                          <Button>Sign Up</Button>
                        </Link>: <Link to="/signIn">
                          <Button>Sign In</Button>
                        </Link>                     
                        }   
                      </div>
                    </li>
                  </ul>

                  
                </div>
              </div>
            </div>
          </div>
        </header>

        <Categories />
      </div>
    </>
  );
};

export default Header;
