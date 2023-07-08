import React, { useContext, ReactNode, createContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";

type ShoppingCardProviderProps = {
  children: ReactNode;
};
type ShoppingCartContext = {
  getitemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  OpenCart: () => void;
  CloseCart: () => void;
  cartQuantity: number;
  cartItems: CartItem[];
};
type CartItem = {
  id: number;
  quantity: number;
};
// import React, { useContext, ReactNode, createContext } from "react";
// This line is importing the necessary dependencies from React.

// const ShoppingCartContext = createContext({});
// This line is creating a new context called ShoppingCartContext. The argument provided to createContext ({} in this case) is the default value for the context.

// export function useShoppingCart() { return useContext(ShoppingCartContext); }
// This is creating a custom hook called useShoppingCart. When invoked, this hook returns the current value of ShoppingCartContext. The useContext hook is a built-in React hook that allows you to consume a context in a function component.

// type ShoppingCardProviderProps = { children: ReactNode; };
// This line is defining a TypeScript type for the props of ShoppingCardProvider component. The children prop is expected to be a ReactNode, which is a type that includes anything that can be rendered in React (strings, elements, arrays, fragments, etc.).

// export function ShoppingCardProvider({ children }: ShoppingCardProviderProps) { ... }
// This function is a component that serves as the provider for ShoppingCartContext. Any components wrapped inside ShoppingCardProvider will be able to access the context.

// <ShoppingCartContext.Provider value={{}}>
// This is the Provider component for ShoppingCartContext. It accepts a value prop which will be the current value of the context. In this case, an empty object is passed as the value, but typically you would pass some state value here.

// All components that are children of ShoppingCardProvider (included in the {children} placeholder) will have access to the ShoppingCartContext. They can access this context by using the useShoppingCart hook.
const ShoppingCartContext = createContext({} as ShoppingCartContext);
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCardProvider({ children }: ShoppingCardProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  );
  const [isOpen, setIsOpen] = useState(false);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const OpenCart = () => setIsOpen(true);
  const CloseCart = () => setIsOpen(false);

  function getitemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }
  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function decreaseCartQuantity(id: number) {
    setCartItems((currItem) => {
      if (currItem.find((item) => item.id === id)?.quantity == 1) {
        return currItem.filter((item) => item.id !== id);
      } else {
        return currItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id != id);
    });
  }
  return (
    <ShoppingCartContext.Provider
      value={{
        getitemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        OpenCart,
        CloseCart,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}
