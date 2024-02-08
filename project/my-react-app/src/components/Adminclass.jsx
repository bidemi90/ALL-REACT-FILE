import React, { useState } from "react";
import { Link, redirect } from "react-router-dom";

import { RxDotFilled } from "react-icons/rx";
import AxiosAdmin from "./AxiosAdmin";
import Adminhomepage from "./Adminhomepage";
import { useSelector } from "react-redux";

const AdminclassName = () => {
  const { data, loading } = AxiosAdmin("http://localhost:4354/junior_class");
  console.log(data);

  
const {a}=useSelector((state)=>state.counterincdec)

  return (
    <>
    <Adminhomepage/>
    <section className="seactionhold bg-dark text-light">
      <h2 className="text-uppercase fw-bold fs-2 text-center m-2">classes</h2>
      <div className="d-lg-flex justify-content-evenly">
        {data && (loading ? "Loading" :  data.map((element, index) => (
            
            <div
              className="card bg-primary text-capitalize col-10 mx-auto my-2 col-lg-3"
              key={index}
            >
              <div className="card-header text-center fw-bold fs-4">
                {element.name}
              </div>
              <div className="card-body">
                <h5 className="card-title">Subjects</h5>
                <div className="card-text">
                  {element.subjects.map((element, index) => (
                    <div key={index}>
                      <RxDotFilled /> {element}
                    </div>
                  ))}
                </div>
                
                <Link
                      className="btn btn-dark  m-2 "
                      to={`/adminviewoneclass/${element.id}`}
                    >
                    View / Edit / Delete
                      
                    </Link>
              </div>
            </div>
         ) ))}
      </div>
      <div className="col-4  bg-primary p-3">
{a}
      </div>
    </section>
    </>
  );
};

export default AdminclassName;
