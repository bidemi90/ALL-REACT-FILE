import React, { useEffect, useState } from "react";

const Tesss = () => {
  const [dataset, setDataset] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((jsonData) => {
        setDataset(jsonData);
        console.log(jsonData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  
  const handleAdditClick = () => {
    fetch("http://localhost:4354/add", {
      method: "PUT", // Change the HTTP method to PUT or POST
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataset),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log('update successful');
        alert('student updated successfully');
        navigate("/adminstudent");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  

  return (
    <div>
      Tesss
      <button className="btn btn-outline-secondary d-">
        click me
      </button>
      <button onClick={handleAdditClick}>addit</button>
    </div>
  );
};

export default Tesss;
