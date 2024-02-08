import React from "react";
import { useParams, Link } from "react-router-dom";
import AxiosAdmin from "./AxiosAdmin";
import Adminhomepage from "./Adminhomepage";
import Editclass from "./Editclass";
import { useNavigate } from 'react-router-dom';


const Admineditoneclass = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, loading } = AxiosAdmin(
    `http://localhost:4354/junior_class/${id}`
  );
  console.log(data);

 

  const handleFormSubmit = (newdata) =>{
    console.log(newdata);
  

    fetch(`http://localhost:4354/junior_class/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify( {
          "id": id,
      "name": newdata.name,
      "subjects": newdata.subjects
          }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("update successful");

          alert(" updated successfully");
          navigate("/adminclass");
        })
        .catch((err) => {
          console.log(err);
        });



}

  return (
    <>
    <Adminhomepage/>
      <section className="seactionhold bg-dark">
        {loading ? "Loading" :  (
         <Editclass
         
         subjects={data.subjects}
         name={data.name}
         onSubmit={handleFormSubmit}/>
         
        )}
      </section>
    </>
  );
};

export default Admineditoneclass;

  


