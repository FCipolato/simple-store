import React, { useState, useEffect, useContext } from "react";

import api from "../../services/api";

import CartContext from "../../contexts/cart";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Loader from "../../components/Loader";

import { StyledMain, StyledUl, StyledLi, ImageDiv, InfosDiv } from "./styles";

const List = () => {
  const [products, setProducts] = useState();
  const [error, setError] = useState();

  const { addProduct } = useContext(CartContext);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await api.products.getProducts();
        setProducts(res.data);
      } catch (e) {
        setError(e.message);
      }
    };

    getProducts();
  }, []);

  useEffect(() => {
    error &&
      toast.error(`${error}`, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  }, [error]);

  return (
    <StyledMain>
      {products ? (
        <StyledUl>
          {products.map((product) => (
            <StyledLi key={product.id}>
              <ImageDiv>
                <img src={product.image} alt={product.name} />
              </ImageDiv>
              <InfosDiv>
                <h2>{product.name}</h2>
                <p>${product.price}</p>
                <button onClick={() => addProduct(product)}>Add to cart</button>
              </InfosDiv>
            </StyledLi>
          ))}
        </StyledUl>
      ) : (
        <Loader />
      )}
    </StyledMain>
  );
};

export default List;
