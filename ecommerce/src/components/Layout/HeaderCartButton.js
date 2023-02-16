import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Cart from "../Cart/Cart";

import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + 1;
  }, 0);

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Cart <Badge bg="secondary">{numberOfCartItems}</Badge>
      </Button>

      <Cart show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default HeaderCartButton;
