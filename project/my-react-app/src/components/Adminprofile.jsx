import React, { useState } from "react";
import AxiosAdmin from "./AxiosAdmin";
import Adminhomepage from "./Adminhomepage";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementbyvalue } from "../Redux/counterSlice";


const Adminprofile = () => {

  const [addnumber, setaddnumber] = useState(null)
  const { data, loading } = AxiosAdmin("http://localhost:4354/admin_details");
  console.log(data);



  const dispatch=useDispatch();
  
const {a}=useSelector((state)=>state.counterincdec)
console.log(a);



  const inc= ()=>{
    dispatch(increment())
  }
  const dec= ()=>{
    dispatch(decrement())
  }
  const byvalue=()=>{
dispatch(incrementbyvalue(Number(addnumber)))
  }
  return (
    <>
     <Adminhomepage/>

     <section className="w-100 bg-dark  seactionhold ">
      <h1 className="text-capitalize text-center fw-semibold text-light">
        Admin profile
      </h1>

      <div className="card mb-3 mx-auto bg-primary my-3" style={{ maxWidth: "90%" }}>
        {loading ? "Loading" : (
          <div className="row g-0">
            <div className="col-md-5">
              <img
                src={data.profil_img}
                className="img-fluid rounded-start h-100 w-100"
                alt="..."
              />
            </div>
            <div className="col-md-7 text-light ">
              <div className="card-body">
                <h5 className="card-title   fs-2 fw-bold text-capitalize">
                  name: {data.name}
                </h5>
                <p className="card-text  fs-4 fw-bold text-capitalize">
                  email: {data.email}
                </p>
                <p className="card-text  fs-4 fw-bold text-capitalize">
                  role: {data.role}
                </p>
                <p className="card-text  fs-4 fw-bold text-capitalize">
                  department: {data.department}
                </p>
                <p className="card-text  fs-4 fw-bold text-capitalize">
                  phone number: {data.phone}
                </p>
                <hr />
                <p className="card-text  fs-4 fw-bold text-capitalize">
                 school details
                </p>
                <ul className="list-group bg-dark text-light text-capitalize">
                  <li className="list-group-item bg-dark text-light">
                    school name: {data.school.name}
                  </li>
                  <li className="list-group-item bg-dark text-light">
                    address: {data.school.address}
                  </li>
                  <li className="list-group-item bg-dark text-light">
                    phone number: {data.school.phone}
                  </li>
                  <li className="list-group-item bg-dark text-light">
                    email: {data.school.email}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="text-light d-flex w-25 p-3 bg-light rounded justify-content-evenly align-items-center" >
     <button onClick={inc} className="btn btn-danger">in</button>
     <p className="text-dark  m-0">{a}</p>
     <button onClick={dec} className="btn btn-danger"> de</button>

     <input type="text" onChange={(e)=>setaddnumber(e.target.value)} className=" form-control" /> 
     <button className=" btn btn-danger" onClick={byvalue}></button>
     </div>
    </section>
    </>
   
  );
};

export default Adminprofile;
