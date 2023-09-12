import '../css/Cart.css';
import { useState } from 'react';

function Cart ({totalPrice,setTotalPrice,element_panier,setElement_panier}) {

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
            <br/>
            {afficherPanier(element_panier)}
            </panier>
            
            <br/>
            <br/> 
            
            <total className="total">
            Total:  
            </total>



            <br/>
            <price className="price">
                {totalPrice} €
            </price>
            <br/>
            <button className='viderPanier' onClick={ ()  =>resetPanier(setTotalPrice,setElement_panier)   } >
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

function resetPanier (setTotalPrice,setElement_panier){
    setTotalPrice(0)
    setElement_panier([])

}

function afficherPanier (element_panier){
    return ( <div>

    
            {element_panier.map((element) => (
                <rowPanier>
                        {element[0]} {element[1]*element[2]}
                        <br/>
                </rowPanier>
            ))}

            </div>)
    
}