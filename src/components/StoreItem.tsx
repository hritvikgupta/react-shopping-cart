import React, { useEffect, useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import formatCurrency from "../utilities/formatCurrency";
import { useShoppingCart } from "../contexts/ShoppingCartContext";
import { useNavigate } from "react-router-dom";

type ItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: ItemProps) => {
  const {
    getitemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const Quantity = getitemQuantity(id);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <div className="container-fluid h-100 mb-4">
      <Card className="h-100 w-80">
        <Card.Img
          variant="top"
          src={imgUrl}
          style={{ objectFit: "cover", height: "100%" }}
        />
        <Card.Body className="d-flex flex-column" style={{ height: "200px" }}>
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-2">{name}</span>
            <span className="ms-2 text-muted">{formatCurrency(price)}</span>
          </Card.Title>
          <div className="mt-auto">
            {Quantity === 0 ? (
              <Button
                className="w-100"
                onClick={() => {
                  increaseCartQuantity(id);
                }}
              >
                Add to cart
              </Button>
            ) : (
              <div
                className="d-flex align-items-center flex-column"
                style={{ gap: ".5rem" }}
              >
                <div
                  className="d-flex align-items-center 
                justify-content-center"
                  style={{ gap: ".5rem" }}
                >
                  <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                  <div>
                    <span className="fs-3">{Quantity}</span>
                  </div>
                  <Button
                    onClick={() => {
                      console.log(id, name, price);

                      increaseCartQuantity(id);
                    }}
                  >
                    +
                  </Button>
                </div>
                <Button
                  onClick={() => removeFromCart(id)}
                  variant="danger"
                  size="sm"
                >
                  Remove
                </Button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={imgUrl} alt={name} style={{ width: "100%" }} />
          <p>{formatCurrency(price)}</p>
          {/* Display other details here */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              increaseCartQuantity(id);
              handleClose();
            }}
          >
            Add to cart
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default StoreItem;
