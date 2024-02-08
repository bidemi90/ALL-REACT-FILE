import React from "react";
import { Link, redirect } from "react-router-dom";
import Adminstudent1 from "./Adminstudent1";
import Adminstudent2 from "./Adminstudent2";
import Adminstudent3 from "./Adminstudent3";
import Adminhomepage from "./Adminhomepage";


const Adminstudent = () => {



  return (
    <>
    <Adminhomepage/>
    <section className="seactionhold bg-dark">
      <h1 className="text-center text-uppercase fw-bold fs-3 text-light m-2 ">
        Students
      </h1>
    

      <Adminstudent1/>
      <Adminstudent2/>
      <Adminstudent3/>
    </section>
    </>
  );
};

export default Adminstudent;
