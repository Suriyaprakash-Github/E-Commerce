import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";

const ProductCard = (props) => {
  const cartCtx = useContext(CartContext);

  const clickHandler = (event) => {
    event.preventDefault();
    cartCtx.addItem({
      title: props.title,
      price: props.price,
      imageUrl: props.image,
      Qty: 1,
    });
  };

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.price}</Card.Text>
          <Button variant="primary" onClick={clickHandler}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
