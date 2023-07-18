type Item = {
  name: string;
  id: number;
  price: number;
  imgUrl: string;
};

type Category = {
  [key: string]: Item[];
};

const sellingitems: Category[] = [
  {
    Food: [
      {
        name: "Juice",
        id: 1,
        price: 4.99,
        imgUrl: "https://source.unsplash.com/random/300x200?juice",
      },
      {
        name: "Health Juice",
        id: 2,
        price: 4.99,
        imgUrl: "https://source.unsplash.com/random/300x200?fruits",
      },
      {
        name: "Sea Food",
        id: 3,
        price: 4.99,
        imgUrl: "https://source.unsplash.com/random/300x200?seafood",
      },
      {
        name: "Meat",
        id: 4,
        price: 4.99,
        imgUrl: "https://source.unsplash.com/random/300x200?meat",
      },
      {
        name: "Beverages",
        id: 5,
        price: 4.99,
        imgUrl: "https://source.unsplash.com/random/300x200?beverages",
      },
      {
        name: "Canned Foods",
        id: 6,
        price: 4.99,
        imgUrl: "https://source.unsplash.com/random/300x200?cannedfood",
      },
    ],
    Clothing: [
      {
        name: "Jackets",
        id: 7,
        price: 4.99,
        imgUrl: "https://source.unsplash.com/random/300x200?jackets",
      },
      {
        name: "Trousers",
        id: 8,
        price: 4.99,
        imgUrl: "https://source.unsplash.com/random/300x200?trousers",
      },
      {
        name: "Ethenic wear",
        id: 9,
        price: 4.99,
        imgUrl: "https://source.unsplash.com/random/300x200?ethnicwear",
      },
      {
        name: "T-shirts",
        id: 10,
        price: 4.99,
        imgUrl: "https://source.unsplash.com/random/300x200?t-shirts",
      },
      {
        name: "Skirts",
        id: 11,
        price: 4.99,
        imgUrl: "https://source.unsplash.com/random/300x200?skirts",
      },
      {
        name: "Women Shorts",
        id: 12,
        price: 4.99,
        imgUrl: "https://source.unsplash.com/random/300x200?skirts",
      },
    ],
    "Mens Footwear": [
      {
        name: "Sandals",
        id: 13,
        price: 4.99,
        imgUrl: "https://source.unsplash.com/random/300x200?sandals",
      },
      {
        name: "Office shoes",
        id: 14,
        price: 4.99,
        imgUrl: "https://source.unsplash.com/random/300x200?sandals",
      },
      {
        name: "Formal Shoes",
        id: 15,
        price: 4.99,
        imgUrl: "https://source.unsplash.com/random/300x200?formalshoes",
      },
      {
        name: "Sneakers",
        id: 16,
        price: 4.99,
        imgUrl: "https://source.unsplash.com/random/300x200?sneakers",
      },
      {
        name: "Crocs",
        id: 17,
        price: 4.99,
        imgUrl: "https://source.unsplash.com/random/300x200?formalshoes",
      },
      {
        name: "Office shoes",
        id: 18,
        price: 4.99,
        imgUrl: "https://source.unsplash.com/random/300x200?formalshoes",
      },
    ],
    "Womens Footwear": [
      {
        name: "Sandals",
        id: 19,
        price: 4.99,
        imgUrl: "https://source.unsplash.com/random/300x200?sandals",
      },
      {
        name: "Sneakers",
        id: 20,
        price: 4.99,
        imgUrl: "https://source.unsplash.com/random/300x200?sneakers",
      },
      {
        name: "Party wears",
        id: 21,
        price: 4.99,
        imgUrl: "https://source.unsplash.com/random/300x200?sandals",
      },
      {
        name: "Sleepers",
        id: 22,
        price: 4.99,
        imgUrl: "https://source.unsplash.com/random/300x200?slippers",
      },
      {
        name: "Office heels",
        id: 23,
        price: 4.99,
        imgUrl: "https://source.unsplash.com/random/300x200?sandals",
      },
      {
        name: "Casual Wears",
        id: 24,
        price: 4.99,
        imgUrl: "https://source.unsplash.com/random/300x200?sandals",
      },
    ],
    Sunglasses: [
      {
        name: "Mens Sunglasses",
        id: 25,
        price: 4.99,
        imgUrl: "https://source.unsplash.com/random/300x200?sunglasses",
      },
      {
        name: "Women Sunglasses",
        id: 26,
        price: 4.99,
        imgUrl: "https://source.unsplash.com/random/300x200?sunglasses",
      },
      {
        name: "Power glasses",
        id: 27,
        price: 4.99,
        imgUrl: "https://source.unsplash.com/random/300x200?sunglasses",
      },
      {
        name: "Party glasses",
        id: 28,
        price: 4.99,
        imgUrl: "https://source.unsplash.com/random/300x200?sunglasses",
      },
      {
        name: "New Drop",
        id: 29,
        price: 4.99,
        imgUrl: "https://source.unsplash.com/random/300x200?sunglasses",
      },
      {
        name: "Prescription Glasses",
        id: 30,
        price: 4.99,
        imgUrl: "https://source.unsplash.com/random/300x200?sunglasses",
      },
    ],
    Electronics: [
      {
        name: "Television Screens",
        id: 31,
        price: 4.99,
        imgUrl: "https://source.unsplash.com/random/300x200?television",
      },
      {
        name: "Mobile phones",
        id: 32,
        price: 4.99,
        imgUrl: "https://source.unsplash.com/random/300x200?mobilephones",
      },
      {
        name: "Household",
        id: 33,
        price: 4.99,
        imgUrl: "https://source.unsplash.com/random/300x200?household",
      },
      {
        name: "Gaming",
        id: 34,
        price: 4.99,
        imgUrl: "https://source.unsplash.com/random/300x200?gaming",
      },
      {
        name: "Earphones",
        id: 35,
        price: 4.99,
        imgUrl: "https://source.unsplash.com/random/300x200?earphones",
      },
    ],
  },
];

// function getProductData(id=0, name = null){
//     let ProductData;

//     // Iterate over all product categories
//     for (let category of Object.values(sellingitems[0])) {
//         // Look for the product in this category
//         let foundProduct = name
//             ? category.find(product => product.name.toLowerCase() === name.toLowerCase())
//             : category.find(product => product.id === id);
//         if (foundProduct) {
//             ProductData = foundProduct;
//             break;  // No need to continue searching other categories
//         }
//     }

//     if (ProductData == undefined) {
//         console.log("Product data does not exist for ID "+ id);
//         return undefined;
//     }

//     return ProductData;
// }
type ProductType = {
  name: string;
  id: number;
  price: number;
  imgUrl: string;
};

function getProductData(
  id = 0,
  name: string | null = null
): Item[] | undefined {
  let ProductData: Item[] = [];

  if (name !== null) {
    // If a name is given, search for products that match this name
    for (let category of Object.values(sellingitems[0])) {
      // Look for the product in this category
      let foundProducts = category.filter((product) =>
        product.name.toLowerCase().includes(name.toLowerCase())
      );
      ProductData.push(...foundProducts);
    }
  } else {
    // If an id is given, search for the product with this id
    for (let category of Object.values(sellingitems[0])) {
      // Look for the product in this category
      let foundProduct = category.find((product) => product.id === id);
      if (foundProduct) {
        ProductData.push(foundProduct);
        break; // No need to continue searching other categories
      }
    }
  }

  if (ProductData.length === 0) {
    console.log("No product data exists for ID " + id + " or name " + name);
    return undefined;
  }

  return ProductData;
}
export { sellingitems, getProductData };
