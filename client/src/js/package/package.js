import react,{useState} from "react";
import Offer from './packageapi'
import Display from "../display";
import "../../css/package.css"
const Package = () => {
    const [data,usedata]=useState(Offer)
    
    
  return (
      
    <>
    <div className='package'>
        <h2>our-Gallary</h2>
        
        <div className="data">
            {data.map((ele)=>{
            const {img} = ele
            
                return(
                    <>
                    <div className="cont">
                    <img src={img} alt=""/>

                    </div>
                    </>
                )
            })}
        </div>
        
        
    </div>

    </>
    
  )
  
}

export default Package