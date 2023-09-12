import { plantList } from "../data/plantList";
import '../css/ShoppingList.css'
import CareScale from './CareScale.js'





function ShoppingList ({setTotalPrice, totalPrice,element_panier,setElement_panier,isOpen, setIsOpen}) {
    
    return (
        <div className="AllItems" >
            {plantList.map( (plante)=>(
            <div className="oneitem" >
                <img src={plante.cover} className="cover" onClick={() => clickOnArticle(plante.name,setTotalPrice,totalPrice,plante.price,setElement_panier,element_panier,setIsOpen)} alt={plante.name}/>
                <br/>
                <div className="titreplante">{plante.name}</div> 
                {<CareScale typeScale="water"       ValueScale={plante.water} />}
                {<CareScale typeScale="light"       ValueScale={plante.light} />}
                <div className="priceArticle"> {plante.price}€         </div>

            </div>
            ))}
            

            
        </div>
    )
    
}

function clickOnArticle (nom,setTotalPrice,totalPrice,prix,setElement_panier,element_panier,setIsOpen){
  
    setTotalPrice       (   totalPrice      +   prix)
    setIsOpen(true)
    const index = element_panier.findIndex(item => item[0] === nom);
    if (index === -1)
        element_panier.push( [nom,prix,1] )
    else 
        element_panier[index][2]+=1

    
}




export default ShoppingList