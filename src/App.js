import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import Home from "./Pages/Home/Home";
import Listing from "./Pages/Listing/Listing";
import ProductDetails from "./Pages/ProductDetails/ProductsDetails";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import ProductModal from "./Component/ProductModal";
import Cart from "./Pages/Cart/Cart";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";

const MyContext = createContext();

function App() {
  const [isOpenProductModal, setisOpenProductModal] = useState(false);
  const [isHeaderFooterShow, setisHeaderFooterShow] = useState(true);
  const [isLogin, setisLogin] = useState(true);

  const values = {
    isOpenProductModal,
    setisOpenProductModal,
    isHeaderFooterShow,
    setisHeaderFooterShow,
    isLogin,
    setisLogin,
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {isHeaderFooterShow === true && <Header />}
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/cat/:id" exact={true} element={<Listing />} />
          <Route
            exact={true}
            path="/product/:id"
            element={<ProductDetails />}
          />
          <Route exact={true} path="/cart" element={<Cart />} />
          <Route exact={true} path="/signIn" element={<SignIn />} />
          <Route exact={true} path="/signUp" element={<SignUp />} />
        </Routes>
        {isHeaderFooterShow === true && <Footer />}
        {isOpenProductModal === true && <ProductModal />}
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;

export { MyContext };
