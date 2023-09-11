import sun from "../media/sun.svg"
import water from "../media/water.svg"


function CareScale ({typeScale,ValueScale}) {
    const careLogo = typeScale === "light" ? sun : water
    const tab = [1,2,3,4,5]
    
    return ( 
        <div>
            {tab.map((num)=>(  
                <tswira>
                    {num <= ValueScale ? <img src={careLogo} /> : null}
                </tswira>
            ))}
        </div>
    )
    
   
}
export default CareScale