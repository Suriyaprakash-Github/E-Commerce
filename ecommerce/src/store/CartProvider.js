import React, { useContext, useReducer } from "react";
import CartContext from "./cart-context";
import LoginContext from "./LoginContext";

const defaultCartSatate = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartSatate;
};

const CartProvider = (props) => {
  const authCtx = useContext(LoginContext);
  const email = authCtx.email;
  // console.log(email);

  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartSatate
  );

  const addItemToCart = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCart = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    email: email,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
