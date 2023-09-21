import "./styles.css";
import { ItemsConsumer } from './ItemsConsumer'; // Use the correct import path
import { CartItemsProvider } from './UseContext'; // Use the correct import path

export default function App() {
  return (
    <CartItemsProvider>
      <ItemsConsumer />
    </CartItemsProvider>
  );
}
