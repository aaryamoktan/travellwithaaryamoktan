import React, { useEffect, useState } from "react";

import "../css/display.css"
const Display = () => { 
  const [user,setUser] = useState()
 
useEffect(()=>
{
  async function api()
  {
    fetch("/display")
    .then((res)=>res.json())
    .then((res)=>setUser(res))
    .catch((err)=>console.log(err))
  }
  api()

},[])
  
  return(
    
    <><div className="display">
    <div className="content">
    <table>
          <tr>
            <th>Name</th>
            <th>Package</th>
            <th>Price</th>
            <th>Person</th>
            <th>Date</th>
          </tr>
    {user?.map((ele)=>
    {const {name,Package,price,number,date} = ele
      return(
      <>
        
          <tr>
            <td>{name}</td>
            <td>{Package}</td>
            <td>{price}</td>
            <td>{number}</td>
            <td>{date}</td>
            </tr>
          
      </>)
      
      
    })}
        </table></div>

    
    

      </div>
    </>
  )
};

export default Display;
