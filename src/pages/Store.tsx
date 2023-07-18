import React, { useState } from "react";
import storeItems from "../data/items.json";
import { Row, Col } from "react-bootstrap";
import { json } from "stream/consumers";
import StoreItem from "../components/StoreItem";
import { sellingitems } from "../utilities/ProductStore";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Store = () => {
  // Flatten the selling items into a single array
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
      {Object.entries(sellingitems[0]).map(([category, items], index) => (
        <div key={index}>
          <h1>{category}</h1>
          <Carousel
            arrows={false}
            showDots={true}
            responsive={responsive}
            itemClass="carousel-item-padding-40-px"
          >
            {items.map((item, itemIndex) => (
              <Col key={itemIndex} className="d-flex">
                <StoreItem {...item} />
              </Col>
            ))}
          </Carousel>
        </div>
      ))}
    </>
  );
};

export default Store;
