import React from "react";

const Finalbooking = () => {
  return (
    <>
      <div className="overcont">
        <h1>Order Details</h1>
        <div calssName="cont">
          <div calssName="img"></div>
          <div className="img-info">
              <h3>{"name"}</h3><br/>
              <p>Total: rs {"price"}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Finalbooking;
