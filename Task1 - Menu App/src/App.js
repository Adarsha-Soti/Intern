import Menu from "./Components/Menu";
import Items from "./Items";
import {useState} from "react";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import '../src/assets/css/styles.css';

function App() {
  const [basket, setBasket] = useState([]);

  // Add to basket
  const addItem = (food) => {
      // Check if the item exist or not
      const exist = basket.find((item) => item.id === food.id);
      if (exist) {
          setBasket(basket.map(item => item.id === food.id ? {...exist, qty: exist.qty + 1} : item));
      } else {
          setBasket([...basket, {...food, qty: 1}]);
      }
  };
  // Remove from basket
  const removeItem = (food) => {
      // Check if the item exist or not
      const exist = basket.find((item) => item.id === food.id);
      if (exist.qty === 1) {
          setBasket(basket.filter((item) => item.id !== food.id));
      } else {
          setBasket(basket.map(item => item.id === food.id ? {...exist, qty: exist.qty - 1} : item));
      }
  };

  return (
    <div>
            <Header basket={basket.length} menu={Items} poition="fixed"/>
            <Menu  menu={Items} addItem={addItem}/>
            <Cart items={basket} remove={removeItem}/>
        
    </div>
  );
}

export default App;
