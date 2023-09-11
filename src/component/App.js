import '../css/App.css';
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import {useState} from 'react'



function App() {

  const [totalPriceApp,setTotalPriceApp]= useState(0)

  return (
    <div>

      <Banner />
      <br/>
      <body className="body">
      <Cart         setPriceCart=       {setTotalPriceApp}       totalPriceCart  ={totalPriceApp}  />
      <ShoppingList setTotalPriceShop = {setTotalPriceApp}       totalPriceShop  ={totalPriceApp}  />
      
      </body>
      

    </div>
  );
}

export default App;
