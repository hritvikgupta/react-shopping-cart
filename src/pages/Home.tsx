import React, { useState, useEffect } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import StoreItem from "../components/StoreItem";
import { sellingitems } from "../utilities/ProductStore";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import "./style.css";
interface Item {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  // any other properties your items might have...
}
const Home = () => {
  const [allItems, setAllItems] = useState<Item[]>([]);

  useEffect(() => {
    let tempAllItems: Item[] = [];
    Object.values(sellingitems[0]).forEach((category) => {
      tempAllItems = [...tempAllItems, ...category];
    });
    setAllItems(tempAllItems);
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Container className="mt-3 mb-5 all-items-container">
        <h1 className="m-4 home-heading text-center">
          Summer Discounts, Explore Hot deals!
        </h1>
        <Carousel
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          showDots={false}
          responsive={responsive}
          itemClass="carousel-item-padding-40-px"
        >
          {allItems.map((item, itemIndex) => (
            <Col key={itemIndex} className="d-flex">
              <img
                src={item.imgUrl}
                alt={item.name}
                style={{ width: "100%" }}
              />
            </Col>
          ))}
        </Carousel>
      </Container>

      {Object.entries(sellingitems[0]).map(([category, items], index) => (
        <Container key={index} style={{ width: "100%" }} className="mt-3 mb-5">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="m-3">{category}</h1>
            <Link
              to="/Store"
              style={{ color: "black", textDecoration: "none" }}
            >
              See More {"\u2192"}
            </Link>
          </div>
          <Row>
            {items.slice(0, 3).map((item, itemIndex) => (
              <Col key={itemIndex} md={4}>
                <Card className="card-item" style={{ width: "22rem" }}>
                  <Card.Img variant="top" src={item.imgUrl} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>Price: {item.price}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      ))}
    </>
  );
};

export default Home;
