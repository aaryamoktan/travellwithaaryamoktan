import React, { useState } from "react";
import { useParams, Link, useNavigate, NavigationType } from "react-router-dom";
import "../../css/book.css";
import Product from "../apimain";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Book = (title) => {
  const navigate = useNavigate();
  const params = useParams();
  const filter = Product.filter((ele) => {
    return ele.title === params.title;
  });
  const [data1, setdata] = useState(filter);
  data1.map((ele) => {
    console.log(ele.title);
  });
  const [info, setinfo] = useState({
    name: "",
    number: "",
    Package: "",
    price: "",
    date: "",
    option: "",
  });

  if (info.number < 0) {
    info.number = 0;
  }
  let name, value;
  const data = (event) => {
    name = event.target.name;
    value = event.target.value;
    setinfo({ ...info, [name]: value });
  };

  const book = async (event) => {
    event.preventDefault();
    try {
      const { name, number, date, option } = info;
      data1.map((ele) => {
        const { res } = axios.post("/book", {
          name,
          number,
          Package: params.title,
          price: ele.price * number,
          date,
          option,
        });
      });
      alert("booked sucesfully");
      navigate("/")
    } 
    catch (err) {
      alert(err.response.res);
    }
  };

  return (
    <>
      <h3>Book-Now</h3>
      <div className="book">
        <div className="imgse">
          {data1.map((ele) => {
            const {
              desc,
              img,
              nameofimg1,
              nameofimg2,
              nameofimg3,
              nameofimg4,
              img1,
              img2,
              img3,
              img4,
            } = ele;
            return (
              <>
                <div className="imgsrc">
                  <img src={img} alt="PIC" />
                  <div className="subimg">
                    <div className="img">
                      <img src={img1} alt="PIC" />
                      <br />
                      <p>{nameofimg1}</p>
                    </div>
                    <div className="img">
                      <img src={img2} alt="PIC" />
                      <br />
                      <p>{nameofimg2}</p>
                    </div>
                    <div className="img">
                      <img src={img3} alt="PIC" />
                      <br />
                      <p>{nameofimg3}</p>
                    </div>
                    <div className="img">
                      <img src={img4} alt="PIC" />
                      <br />
                      <p>{nameofimg4}</p>
                    </div>
                  </div>
                </div>
                <div className="desc">
                  <p1>{desc}</p1>
                </div>
              </>
            );
          })}
        </div>
        <div className="form">
          <form method="POST">
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
            <lable className="lb1">Name:</lable>
            <br />
            <input
              type="text"
              name="name"
              onChange={data}
              value={info.name}
              required
            />
            <br />
            <lable className="lb1">Total-No:</lable>
            <br />
            <input
              type="Number"
              onChange={data}
              name="number"
              value={info.number}
              required
            />
            <br />
            <lable className="lb">Selected-package:</lable>
            <br />
            <input value={params.title} onChange={data} name="Package" />
            <br />
            <lable className="lb1">Price:</lable>
            <br />
            {data1.map((ele) => {
              return (
                <input
                  value={`RS: ${ele.price * info.number}`}
                  onChange={data}
                  name="price"
                />
              );
            })}
            <br />
            <lable className="lb">Time-to-Travel:</lable>
            <br />
            <input
              type="date"
              onChange={data}
              name="date"
              value={info.date}
              required
            />
            <br />
            <lable className="lb">Payment-method:</lable>
            <br />
            <select onChange={data} name="select" value={info.option}>
              <option> Payment On-Arrival:</option>
            </select>
            <br />
            <button onClick={book}>Book</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Book;
