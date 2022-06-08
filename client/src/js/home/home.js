import React from 'react';
import Nev from '../Nev';
import { Routes, Route } from "react-router-dom";
import Contack from "../contack/contack"
import Footer from '../Footer';
import About from "../about/About"
import Package from '../package/package';
import "../../css/home.css"
import Service from '../service/service';
const Home = () => {
  return (
    <>
      <div className='home'>
       
        <About/>
        <Service/>
        <Contack/>
        <Package/>
        
       
        </div>
    </>
  )
}

export default Home