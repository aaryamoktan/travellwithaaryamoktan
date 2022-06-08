import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contack from "./contack/contack"
import Home from "./home/home";
import Footer from './Footer';
import About from "./about/About";
import Service from './service/service';
import Registration from './login/registration';
import Login from './login/login';
import Nev from './Nev';
import Package from './package/package';
import Book from './book/book';
import Trip from './trip';
import Display from './display';
const Main = (email) => {
  return (
    <>
      <BrowserRouter>
      <div className='main'>
          <Nev/>
          <Routes>
          <Route path="/display" element={<Display/>}/>
            <Route path="/" element={<Home />} />
            <Route path="/regis" element={<Registration/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/book/:title" element={<Book/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/booked" element={<Display />} />
            <Route path="/service" element={<Service />} />
            <Route path="/package" element={<Package />} /> 
            <Route path="/service/:main" element={<Trip/>}/>
            <Route path="/service/:category/:title" element={<Book/>}/>
          </Routes>
          <Footer /></div>
        
      </BrowserRouter>
    </>
  )
}
export default Main;