import React from 'react'
import {Link} from "react-router-dom"
import "../css/footer.css"
const Footer = () => {
  return (
    <>
      <div className='Footer'>
        <div className='first'>
          <Link to="/">Home</Link><br/>
          <Link to="/service">Service</Link><br/>
          <Link to="/about">About-us</Link><br/>
          <Link to="/contact">Contack</Link><br/>
          <Link to="/book">Book-Now</Link>
        </div>
        <div className='first'>
        <Link to="">Getting started</Link><br/>
        <Link to="">Starter template</Link><br/>
        <Link to="">Webpack</Link><br/>
        <Link to="">Parcel</Link>
        </div>
        <div className='first'>
        <Link to="">Getting started</Link><br/>
        <Link to="">Starter template</Link><br/>
        <Link to="">Webpack</Link><br/>
        <Link to="">Parcel</Link>
        </div>
        <div className='first'>
        <Link to="">Getting started</Link><br/>
        <Link to="">Starter template</Link><br/>
        <Link to="">Webpack</Link><br/>
        <Link to="">Parcel</Link>
        </div>
      </div>
    </>
  )
}

export default Footer