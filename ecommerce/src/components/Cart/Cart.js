import React, { useContext } from "react";
import cartContext from "./../../store/cart-context";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";

const Cart = (props) => {
  let cartCtx = useContext(cartContext);

  const loginEmail = cartCtx.email;

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <li key={Math.random()}>{item.title}</li>
      ))}
    </ul>
  );

  // localStorage
  let cart = cartCtx.items;
  localStorage.setItem(`${loginEmail}`, JSON.stringify(cart));

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Title</h4>
        <p>
          {cartItems}
          <span>Total Amount</span>
          <span>{cartCtx.totalAmount}</span>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
