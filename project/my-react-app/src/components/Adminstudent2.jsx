


import React from "react";
import { Link, redirect } from "react-router-dom";
import AxiosAdmin from "./AxiosAdmin";
import Adminhomepage from "./Adminhomepage";


const Adminstudent2 = () => {
  const { data, loading } = AxiosAdmin(
    "http://localhost:4354/students_junior_2"
  );

  console.log(data);

  return (
    <>
    <section >
      
      {loading ? "Loading" : 
     <>
      <div className="card col-md-10 mx-auto text-light my-3 p-2 bg-primary">
        <p className="fw-bold fs-4 m-0 text-capitalize">junior secondary student 2</p>
        

        <div className="card col-12 mx-auto my-2  bg-primary">
        <table className="table text-light    mx-auto bg-primary">
          <thead>
            <tr className="text-center bg-dark">
              <th scope="col " className="bg-dark">
                S/N
              </th>
              <th scope="col">student ID</th>
              <th scope="col">Name</th>
              <th scope="col">Edit / View /Delete</th>
            </tr>
          </thead>
          <tbody>
          
          {
                  data.length == 0 ?
                   <tr className="text-center">
                  <td colSpan={4} className="fw-bold fs-3">
                  You have no student
                  </td>
                </tr> 
                : 
              
          
              (loading ? "Loading" : data.map((element, index) => (
                <tr key={index} className="text-center">
                  <th className="bg-dark">{index + 1}</th>
                  <td>{element.student_id}</td>
                  <td>{element.name}</td>
                  <td>
                    <Link
                      className="btn btn-dark  m-2 "
                      to={`/adminviewtwostudent/${element.id}`}
                    >
                      {" "}
                      Edit / View /Delete{" "}
                    </Link>
                  </td>
                </tr>
              )))
            }
          </tbody>
          
            
        </table>
      </div>
     
        <p className="fw-bold fs-5 text-capitalize">total number of junior secondary student 2 = {data.length}</p>
        <button className="btn btn-dark text-capitalize">
          add junior student
        </button>
      </div>
     </>
      }
    </section>
    </>
  );
};

export default Adminstudent2;
