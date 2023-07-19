import React from "react";
import { useShoppingCart } from "../contexts/ShoppingCartContext";
import { sellingitems, getProductData } from "../utilities/ProductStore";
import { Stack, Button } from "react-bootstrap";
import formatCurrency from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = getProductData(id); // Updated this line to use your getProductData function
  if (!item || item.length === 0) return null;
  const product = item[0]; // As getProductData returns an array, you need to get the first element

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={product.imgUrl}
        style={{ width: "125px", objectFit: "cover", height: "75px" }}
      />
      <div className="me-auto">
        <div>
          {product.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(product.price)}
        </div>
      </div>
      <div>{formatCurrency(product.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(product.id)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
