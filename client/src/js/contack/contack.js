import React, { useState } from 'react'
import "../../css/contack.css"
const Contack = () => {
  const [user,setuser]=useState({
    name:"",email:"",gender:"",problem:"",quary:""
  });
  let name,value;
  const handle=(event)=>
  {
    name=event.target.name;
    value=event.target.value;
    setuser({...user,[name]:value});
  }
  const submit = async(event)=>
  {
    event.preventDefault();
    const {name,email,gender,quary,problem }=user;
    const res = await  fetch("/contack",
    {
      method:"POST",
      headers:
      {
        "content-type":"application/json"
      },
      body:JSON.stringify(
        {
          name,email,gender,quary,problem
        }
      )
    })
    const res2 = await res.json();
    if(res2.status>=400 ||!res2)
    {
      window.alert("some invalid point");
    }
    else{
      window.alert("your problem has been submited")
    }
  }
  

  
  return (
   <>
  <h3>Contact-Us</h3>
     <div className='contack'>
     
     <form method="POST">
          <div className='input' >
            <label>Name:</label>
              <input type="text" name="name" value={user.name} onChange={handle}/>
            
            <label>Email:</label>
              <input type="text" name="email" value={user.email} onChange={handle} />
            
            <label>Gender:</label>
              <input type="text" name="gender" value={user.gender} onChange={handle} />
            

            <label>Problem:</label>
              <input type="text" name="problem" value={user.problem} onChange={handle}/>
            
            <label>Quary:<br/></label>
              <textarea name="quary" cols={22.75}  value={user.quary} onChange={handle} ></textarea>
            <button type="submit"  onClick={submit} >Submit</button>
          </div></form>
     </div>
   </>
  )
}

export default Contack