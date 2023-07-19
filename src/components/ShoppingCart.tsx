import React from "react";
import { Offcanvas } from "react-bootstrap";
import { useShoppingCart } from "../contexts/ShoppingCartContext";
import { Stack } from "react-bootstrap";
import CartItem from "./CartItem";
import formatCurrency from "../utilities/formatCurrency";
import { sellingitems } from "../utilities/ProductStore";

type ShoppingCartProps = {
  isOpen: Boolean;
};

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { cartItems, CloseCart } = useShoppingCart();
  console.log(cartItems);

  // Flatten all items in all categories into a single array
  const allItems = Object.values(sellingitems[0]).flat();

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
                const item = allItems.find((i) => i.id === cartItem.id);
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
