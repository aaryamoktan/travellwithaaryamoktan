import React from 'react'
import "../../css/imgs.css"
import {Link} from "react-router-dom"
const Img = () => {
  return (
      <>
    <div className='img'>
        <img className='pic' src="https://wallpaperaccess.com/full/706913.jpg" alt=""/>   
    </div>
    <div className='text'>
    <p>We are the one of the best guide to heloow to travell the world
        If you are on a personal connection, like at home, you can run an anti-virus scan on your device to make sure it is not infected with malware.

If you are at an office or shared network, you can ask the network administrator to run a scan across the network looking for misconfigured or infected devices.</p>
<p>To visit check our package
        <Link to="/service">Service</Link></p>
    </div>
    
    </>
    
  )
}

export default Img