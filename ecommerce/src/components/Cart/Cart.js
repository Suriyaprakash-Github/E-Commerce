import React from "react";

import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul>
      {[
        {
          id: 1,

          title: "Colors",
          price: 100,
        },
      ].map((item) => (
        <li key={Math.random()}>{item.title}</li>
      ))}
    </ul>
  );

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
          <span>99.46</span>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
