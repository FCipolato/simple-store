import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CartContext from "../../contexts/cart";

import {
  StyledMain,
  ProductsUl,
  ImageDiv,
  StyledLi,
  InfosDiv,
  PriceDiv,
  OptionsDiv,
  RemoveButton,
  FinalOptionsDiv,
  TotalDiv,
} from "./styles";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const history = useHistory();

  const {
    cartList,
    addProduct,
    removeOneOfProduct,
    removeProduct,
    removeAllProducts,
  } = useContext(CartContext);

  useEffect(() => {
    if (cartList.length) {
      const result = cartList.reduce(
        (sum, { price, quantity }) => sum + price * quantity,
        0
      );
      setTotal(result);
    } else {
      history.push("/");
      toast.info("Empty cart!", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [cartList, history]);

  return (
    <StyledMain>
      <ProductsUl>
        {cartList.map((productCart) => (
          <StyledLi key={productCart.id}>
            <ImageDiv>
              <img src={productCart.image} alt={productCart.name} />
            </ImageDiv>
            <InfosDiv>
              <h2>{productCart.name}</h2>
              <PriceDiv>
                <p>
                  $
                  {parseFloat(productCart.price * productCart.quantity).toFixed(
                    2
                  )}
                </p>
                <OptionsDiv>
                  <button onClick={() => removeOneOfProduct(productCart)}>
                    -
                  </button>
                  <p>{productCart.quantity}</p>
                  <button onClick={() => addProduct(productCart)}>+</button>
                </OptionsDiv>
                <RemoveButton onClick={() => removeProduct(productCart)}>
                  Remove Product
                </RemoveButton>
              </PriceDiv>
            </InfosDiv>
          </StyledLi>
        ))}
      </ProductsUl>
      {!!total && (
        <FinalOptionsDiv>
          <TotalDiv>
            <h1>Total:</h1>
            <p>${parseFloat(total).toFixed(2)}</p>
          </TotalDiv>
          <RemoveButton onClick={() => removeAllProducts()}>
            Remove All
          </RemoveButton>
        </FinalOptionsDiv>
      )}
    </StyledMain>
  );
};

export default Cart;
