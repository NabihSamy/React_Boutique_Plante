import { plantList } from "../data/plantList";
import '../css/ShoppingList.css'
import CareScale from './CareScale.js'




function ShoppingList ({setTotalPriceShop, totalPriceShop}) {
    
    return (
        <div className="AllItems" >
            {plantList.map( (plante)=>(
            <oneitem className="oneitem" >
                <img src={plante.cover} className="cover" onClick={() => clickOnArticle(setTotalPriceShop,totalPriceShop,plante.price)} alt="image"/>
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

function clickOnArticle (setTotalPriceShop,totalPriceShop,prix){
    console.log("Avant execution")
    console.log(totalPriceShop)

    setTotalPriceShop(totalPriceShop+prix)

    console.log("Apres execution")
    console.log(totalPriceShop)
}




export default ShoppingList