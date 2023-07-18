import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Container,
  Nav,
  Navbar as NavbarBs,
  FormControl,
  Form,
  InputGroup,
  Dropdown,
  Overlay,
  Popover,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUser,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import LoginForm from "../Forms/LoginForm";
import RegistrationForm from "../Forms/RegistrationForm";
import { useShoppingCart } from "../contexts/ShoppingCartContext";
import { getProductData } from "../utilities/ProductStore"; // Update with your file path
import { useLoginPageContext } from "../contexts/LoginPageProvider"; // Update with your file path
import { useMultiStepForm } from "../hooks/useMultistepForm";

type Items = {
  id: number;
  name: string;
};

const NavBar = () => {
  const { OpenCart, cartQuantity } = useShoppingCart();
  const [searchResults, setSearchResults] = useState<Items[]>([]);
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const { activeTab, setActiveTab } = useLoginPageContext();
  const activeTabIndex = activeTab === "register" ? 1 : 0;

  const { currentStepIndex } = useMultiStepForm(
    [<LoginForm />, <RegistrationForm />],
    activeTabIndex
  );

  // Handle search submission
  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // No need to do anything on submit as results are updated in real time
  };

  // Handle search change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchResults = getProductData(0, event.target.value);
    setSearchResults(searchResults || []);
    setShow(!!event.target.value);
  };

  const handleLoginClick = (event: React.FormEvent) => {
    event.preventDefault();
    setActiveTab("/login");
  };

  const handleSignUpClick = (event: React.FormEvent) => {
    event.preventDefault();
    setActiveTab("/signup");
  };
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            <FontAwesomeIcon icon={faShoppingCart} />
          </Nav.Link>
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/Store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/About" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Form onSubmit={handleSearchSubmit} style={{ marginRight: "15px" }}>
          <InputGroup>
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
              onChange={handleSearchChange}
              ref={target}
            />
            <Button variant="dark" type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </InputGroup>
        </Form>
        <Overlay
          show={show}
          target={target.current}
          placement="bottom"
          rootClose={true}
          onHide={() => setShow(false)}
        >
          <Popover id="popover-contained">
            <Popover.Body>
              {searchResults.map((item) => (
                <div key={item.id}>
                  <a
                    className="text-decoration-none text-dark"
                    href={`/product/${item.id}`}
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </Popover.Body>
          </Popover>
        </Overlay>
        <Dropdown style={{ marginRight: "15px" }}>
          <Dropdown.Toggle variant="dark" id="dropdown-basic">
            <FontAwesomeIcon icon={faUser} />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/login/login">
              Login
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/login/signup">
              Sign Up
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {cartQuantity > 0 && (
          <Button
            onClick={OpenCart}
            variant="dark"
            style={{ position: "relative" }}
          >
            <FontAwesomeIcon icon={faShoppingCart} />

            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%, 25%)",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  );
};

export default NavBar;
