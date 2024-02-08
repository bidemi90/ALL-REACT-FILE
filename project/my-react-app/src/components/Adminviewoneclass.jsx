import React from "react";
import { Link, redirect, useParams } from "react-router-dom";
import AxiosAdmin from "./AxiosAdmin";
import { useNavigate } from 'react-router-dom';
import Adminhomepage from "./Adminhomepage";



const Adminviewoneclass = () => {

    const { id } = useParams();

    
  const { data, loading } = AxiosAdmin(
    `http://localhost:4354/junior_class/${id}`
  );
  console.log(data);
  const navigate = useNavigate();
  const deletestudent = () =>{
    fetch(`http://localhost:4354/junior_class/${id}`, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log('delete successful');
        alert('class subject list deleted successfully');
        navigate("/adminclass");
      })
      .catch((err) => {
        console.log(err);
      });
  
}



  return (
    <>
    <Adminhomepage/>
    {loading ? "Loading" :  (
      <section className="seactionhold bg-dark">
        <div className="card border-primary mb-3 col-10 bg-primary text-light mx-auto my-3" >
          <div className="card-header fw-bold fs-3">{data.name}</div>
          <div className="card-body text-primary d-block d-md-flex row   justify-content-evenly">
          {loading ? "Loading" :  data.subjects.map((element,index)=>(
           
            <p key={index} className="text-light fs-5 rounded p-2 bg-dark m-1 col-10 mx-auto m-lg-1  col-md-5 col-lg-3  ">
                {element}
               
            </p>
           ))}
        
          </div>
        </div>
        
        <div className="card border-primary mb-3 col-10  bg-primary text-light mx-auto my-3" >
        <Link className="btn btn-dark w-50 mx-auto   m-2 " to={`/admineditoneclass/${data.id}`}>  EDIT</Link>
        <button type="button" className="btn w-50 mx-auto    m-2 btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
          DELETE
          </button>
          
        
        </div>
         
       <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
           <div className="modal-dialog" role="document">
             <div className="modal-content bg-primary text-light">
               <div className="modal-header">
                 
                 <button type="button " className="close btn btn-primary" data-bs-dismiss="modal" aria-label="Close">
                   <span aria-hidden="true">×</span>
                 </button>
               </div>
               <div className="modal-body text-uppercase fs-5 fw-bold">
                 
       You are about to delete {data.name} subject list 
               </div>
               <div className="modal-footer ">
                 <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                 <button className="btn btn-danger w-50 mx-auto    m-2 " data-bs-dismiss="modal"  onClick={deletestudent} >  DELETE</button>
               </div>
             </div>
           </div>
         </div>
      </section>
    )}
  </>
  )
}

export default Adminviewoneclass