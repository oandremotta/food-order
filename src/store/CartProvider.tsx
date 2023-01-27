import CartContext from './cart-context';
import { useReducer } from 'react';

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state: any, action: any) => {
  return defaultCartState;
};

const CartProvider = (props: any) => {
  useReducer(cartReducer, defaultCartState);
  const addItemToCartHandler = (id: any) => { }
  const removedItemToCartHandler = (id: any) => { }

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removedItemToCartHandler,
  };

  return (<CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>
  )
}

export default CartProvider;