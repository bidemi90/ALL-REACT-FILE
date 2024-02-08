import React, { useState, useEffect } from 'react';
import { formik, useFormik } from "formik";
const Formholder = () => {


  const [formik, setformik] = useFormik(
    intialValues= {
      name:"",
      email:"",
      number:"",
      gender:"",
      age:""
    }
  )




  const [name, setname] = useState("")
  const [email, setemailaddress] = useState("")
  const [number, setnumber] = useState("")
  const [gender, setgender] = useState("")
  const [age, setage] = useState("")
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem('myData');
    if (dataFromLocalStorage) {
      setMyData(JSON.parse(dataFromLocalStorage));
    } else {
      setMyData([]);
    }
  }, []);
 
 

  const adduser = () => {
    if (name == "" || email == "" || number == "" || gender == "" || age == "") {
      alert("fill all input")
    } else {
      setMyData([...myData, { username: name, usernumber: number, useremail: email, usergender: gender, userage: age }])
      console.log(myData);
    }
  }


  useEffect(() => {
    localStorage.setItem('myData', JSON.stringify(myData));
  }, [myData]);


  return (
    <section>

      <form className='m-3'>
        <div className="mb-3">
         
          <label for="exampleInputEmail1" className="form-label">Full name</label>
          <input type="text" name='name' className="form-control" id="fullname" aria-describedby="emailHelp"  />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            onChange={(e) => setemailaddress(e.target.value)} />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Phone number</label>
          <input type="number" name='number' className="form-control" id="phonenumber" onChange={(e) => setnumber(e.target.value)} />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Gender</label>
          <select className="form-control" name="gender" id="gender" onChange={(e) => setgender(e.target.value)} >
            <option value="">choose your gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Age</label>
          <input type="number" name='age' className="form-control" id="age" onChange={(e) => setage(e.target.value)} />
        </div>

        <button type="submit" onClick={adduser} className="btn btn-primary">Submit</button>
      </form>
    </section>
  )
}

export default Formholder