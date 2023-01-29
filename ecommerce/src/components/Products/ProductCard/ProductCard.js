import React, { useRef } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ProductCard = (props) => {
  const clickHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Row>
      <Col>
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
      </Col>
    </Row>
  );
};

export default ProductCard;
