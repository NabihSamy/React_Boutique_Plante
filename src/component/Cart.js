import '../css/Cart.css';
import { useEffect } from 'react';

function Cart ({totalPrice,setTotalPrice,element_panier,setElement_panier,isOpen, setIsOpen}) {

    useEffect(  () => {
       document.title = (`J'aurai ${totalPrice}€ à payer 💸`)
        }, [totalPrice]) 

    return isOpen ? (
        <div className="etat-ouvert">

            <button  onClick={() => setIsOpen(false) } className="button-ferme" >
                Fermer
            </button>
            <br/>
            <br/>


            <div className="panier">
            Panier
            <br/>
            {afficherPanier(element_panier)}
            </div>
            
            <br/>
            <br/> 
            
            <div className="total">
            Total:  
            </div>



            <br/>
          
            <div className="price">
                {totalPrice} €
            </div>
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
    return ( <div className='afficherPanier'>

    
            {element_panier.map((element) => (
                <div className="rowPanier">
                        {element[0]} 
                        <div className="nombrearticle">
                        *
                        {element[2]}
                        </div>
                        
                        <br/>
                </div>
            ))}

            </div>)
    
}


    