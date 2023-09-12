import '../css/App.css';
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import {useState} from 'react'



function App() {

  const [totalPrice   ,setTotalPrice  ]= useState(0)
  const [element_panier ,setElement_panier]=useState([])
  const [isOpen, setIsOpen] = useState(true) //TRUE OUVERT, FALSE FERME

  return (
    <div>

      <Banner />
      <br/> 
      <body className="body">
      <Cart         setTotalPrice = {setTotalPrice}       totalPrice  ={totalPrice} setElement_panier={setElement_panier} element_panier={element_panier} isOpen ={isOpen} setIsOpen ={setIsOpen}/>
      <ShoppingList setTotalPrice = {setTotalPrice}       totalPrice  ={totalPrice} setElement_panier={setElement_panier} element_panier={element_panier} isOpen ={isOpen} setIsOpen ={setIsOpen}/>
      
      </body>
      

    </div>
  );
}

export default App;
