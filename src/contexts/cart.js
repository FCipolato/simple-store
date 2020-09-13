import React, { useState, createContext } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartContext = createContext({ cartList: [] });

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addnewProduct = (product) => {
    let newCartList = cartList;
    let newProdCartList = {
      id: product.id,
      name: product.name,
      image: product.image,
      price: parseFloat(product.price.replace(",", ".").replace(" ", "")),
      quantity: 1,
    };
    newCartList.push(newProdCartList);
    setCartList(newCartList);
  };

  const addProduct = (product) => {
    if (cartList.length) {
      if (cartList.find((cartList) => cartList.id === product.id)) {
        const newCartList = cartList.map((prodInCart) =>
          prodInCart.id === product.id
            ? { ...prodInCart, quantity: prodInCart.quantity + 1 }
            : { ...prodInCart }
        );
        setCartList(newCartList);
      } else {
        addnewProduct(product);
      }
    } else {
      addnewProduct(product);
    }
    toast.success(`${product.name} added!`, {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const removeOneOfProduct = (product) => {
    let newCartList = cartList.map((prodInCart) =>
      prodInCart.id === product.id
        ? { ...prodInCart, quantity: prodInCart.quantity - 1 }
        : { ...prodInCart }
    );

    const index = newCartList.findIndex(
      (prodInCart) => prodInCart.quantity <= 0
    );
    if (index >= 0)
      newCartList = [...cartList.slice(0, index), ...cartList.slice(index + 1)];

    setCartList(newCartList);

    if (index >= 0) {
      toast.info(`${product.name} removed!`, {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.info(`One ${product.name} removed!`, {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const removeProduct = (productCart) => {
    const index = cartList.findIndex(
      (prodInCart) => prodInCart.id === productCart.id
    );
    const newCartList = [
      ...cartList.slice(0, index),
      ...cartList.slice(index + 1),
    ];
    setCartList(newCartList);

    toast.info(`${productCart.name} removed!`, {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const removeAllProducts = () => {
    toast.info("All products removed!", {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setCartList([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addProduct,
        removeOneOfProduct,
        removeProduct,
        removeAllProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
