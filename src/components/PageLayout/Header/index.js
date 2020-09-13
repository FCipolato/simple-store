import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import CartContext from "../../../contexts/cart";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { StyledHeader } from "./styles";

import CartSVG from "../../../assets/cart.svg";
import HomeSVG from "../../../assets/home.svg";

const Header = () => {
  const history = useHistory();

  const { cartList } = useContext(CartContext);

  const handleHome = () => history.push("/");

  const handleCart = () => {
    cartList.length
      ? history.push("/cart")
      : toast.info("Empty cart!", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
  };

  return (
    <StyledHeader>
      <button onClick={() => handleHome()}>
        <img src={HomeSVG} alt="back" />
      </button>
      <button onClick={() => handleCart()}>
        <img src={CartSVG} alt="cart" />
      </button>
    </StyledHeader>
  );
};

export default Header;
