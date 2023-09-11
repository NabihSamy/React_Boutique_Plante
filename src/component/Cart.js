import '../css/Cart.css';
import { useState } from 'react';

function Cart ({totalPriceCart,setPriceCart}) {

    const [isOpen, setIsOpen] = useState(true) //TRUE OUVERT, FALSE FERME
    
    return isOpen ? (
        <div className="etat-ouvert">

            <button  onClick={() => setIsOpen(false) } className="button-ferme" >
                Fermer
            </button>
            <br/>
            <br/>


            <panier className="panier">
            Panier
            </panier>
            
            <br/>
            <br/> 
            
            <total className="total">
            Total:  
            </total>



            <br/>
            <price className="price">
                {totalPriceCart} €
            </price>
            <br/>
            <button className='viderPanier' onClick={ ()  =>setPriceCart(0)   } >
                Vider le panier
            </button>
            

        </div>  )

    :   <div className="etat-ferme">
            <button  onClick={() => setIsOpen(true)} className="button-ouvrir" >
                Ouvrir le panier
            </button>
        </div>
}
export default Cart