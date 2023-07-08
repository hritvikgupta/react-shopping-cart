import React from "react";
import { Offcanvas } from "react-bootstrap";
import { useShoppingCart } from "../contexts/ShoppingCartContext";
import { Stack } from "react-bootstrap";
import CartItem from "./CartItem";
import formatCurrency from "../utilities/formatCurrency";
import StoreItem from "./StoreItem";
import storeItem from "../data/items.json";
type ShoppingCartProps = {
  isOpen: Boolean;
};

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { cartItems, CloseCart } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={CloseCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItem.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;