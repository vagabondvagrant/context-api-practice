import { useContext } from 'react';
import  CartItems  from './UseContext'; // Import the named export CartItems

export const ItemsConsumer = () => {
  const { items,AddItems } = useContext(CartItems);
  const OnClick = () =>{
    AddItems()
  }
  return (
    <>
    <p>items: {items}</p>
    <button onClick={OnClick}>Add items</button>
    </>
  );
}
