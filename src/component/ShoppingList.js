import { plantList } from "../data/plantList";
import '../css/ShoppingList.css'
import CareScale from './CareScale.js'




function ShoppingList ({setTotalPrice, totalPrice,element_panier,setElement_panier}) {
    
    return (
        <div className="AllItems" >
            {plantList.map( (plante)=>(
            <oneitem className="oneitem" >
                <img src={plante.cover} className="cover" onClick={() => clickOnArticle(plante.name,setTotalPrice,totalPrice,plante.price,setElement_panier,element_panier)} alt="image"/>
                <br/>
                <titreplante className="titreplante">{plante.name}</titreplante> 
                {<CareScale typeScale="water"       ValueScale={plante.water} />}
                {<CareScale typeScale="light"       ValueScale={plante.light} />}
                <price className="priceArticle"> {plante.price}€         </price>

            </oneitem>
            ))}
        </div>
    )
    
}

function clickOnArticle (nom,setTotalPrice,totalPrice,prix,setElement_panier,element_panier){
  
    setTotalPrice       (   totalPrice      +   prix)

    const index = element_panier.findIndex(item => item[0] === nom);
    if (index == -1)
        element_panier.push( [nom,prix,1] )
    else 
        element_panier[index][2]+=1
    
}




export default ShoppingList