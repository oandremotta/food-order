import React from 'react';

const CartContext = React.createContext({
  items: [{ amount: 0 }],
  totalAmount: 0,
  addItem: (item: any) => { },
  removeItem: (id: any) => { }
})

export default CartContext;