import { useState, createContext } from 'react';
 const CartItems = createContext();

export const CartItemsProvider = ({ children }) => {
  const [items, setItems] = useState(1);
  
  const AddItems = () =>{
    setItems(prev=>prev+1)
  }
  
  return (
    <CartItems.Provider value={{ items,AddItems }}>
      {children}
    </CartItems.Provider>
  );
  
}
export default CartItems;
