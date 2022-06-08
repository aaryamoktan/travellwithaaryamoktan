import React, { useState } from 'react'
import "../../css/service.css";
import Product from '../apimain';

import {Link} from "react-router-dom";
const Service = () => {
  
  const filter = Product.filter((ele)=>
  {
    return ele.main === "service";
  })
  const [data,setdata]=useState(filter);
 
  return (
   <> <div className='h2'>
     <h2 className="our">our service</h2></div>
     <div className='service'>
    
     {data.map((ele)=>
    
     { const {price,pic,desc,title,category}=ele;
       return<>
       <div className='card'>
       <p>{title}</p>
       <img src={pic} alt=""/>
       <p>{desc}</p>
       <h4><Link to={`/service/${category}`}>Explore</Link></h4>
       
       </div></>
     })}

     </div>
   </>
  )
}

export default Service