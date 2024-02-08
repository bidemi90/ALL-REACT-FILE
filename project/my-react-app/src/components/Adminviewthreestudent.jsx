




import React from "react";
import { Navigate, useParams } from "react-router-dom";
import AxiosAdmin from "./AxiosAdmin";
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import Adminhomepage from "./Adminhomepage";

const Adminviewthreestudent = () => {
  const { id } = useParams();
  const { data, loading } = AxiosAdmin(
    `http://localhost:4354/students_junior_3/${id}`
  );
  console.log(data);
  console.log(id);

  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      gender: "",
      address: "",
    },

    onSubmit: (values) => {
      console.log(values);

        fetch(`http://localhost:4354/students_junior_3/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify( {
          "enable":false,
          "id": data.id,
          "student_id": data.student_id,
          "name": values.name,
          "profile_img": data.profile_img,
          "age": values.age,
          "gender": values.gender,
          "grade": data.grade,
          "address": values.address,
          "phone": data.address,
          "guardian": data.guardian,
          "class": data.class
          }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("update successful");

          alert(" updated successfully");
          // navigate(`/adminviewonestudent/${data.id}`);
        })
        .catch((err) => {
          console.log(err);
        });

    },
  });
  console.log(formik.errors);

  const formikk = useFormik({
    initialValues: {
      name: "",
      relation: "",
      phone: "",
      email: "",
    },

    onSubmit: (values) => {
      console.log(values);

      fetch(`http://localhost:4354/students_junior_3/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify( {
          "enable":false,
          "id": data.id,
          "student_id": data.student_id,
          "name": data.name,
          "profile_img": data.profile_img,
          "age": data.age,
          "gender": data.gender,
          "grade": data.grade,
          "address": data.address,
          "phone": data.address,
          "guardian": values,
          "class": data.class
          }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("update successful");

          alert(" updated successfully");
          // navigate(`/adminviewonestudent/${data.id}`);
        })
        .catch((err) => {
          console.log(err);
        });


    },
  });
  console.log(formikk.errors);


  const navigate = useNavigate();

 const enabledisable = () => {
    // e.preventDefault();
    // console.log(id);
    // console.log(data);
   
if (data.enable==true) {

    fetch(`http://localhost:4354/students_junior_3/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify( {
          "enable":false,
          "id": data.id,
          "student_id": data.student_id,
          "name": data.name,
          "profile_img": data.profile_img,
          "age": data.age,
          "gender": data.gender,
          "grade": data.grade,
          "address": data.address,
          "phone": data.address,
          "guardian": data.guardian,
          "class": data.class
          }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("update successful");

          alert(" updated successfully");
          navigate(`/adminviewonestudent/${data.id}`);
        })
        .catch((err) => {
          console.log(err);
        });

} else {
    fetch(`http://localhost:4354/students_junior_3/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
          "enable":true,
          "id": data.id,
          "student_id": data.student_id,
          "name": data.name,
          "profile_img": data.profile_img,
          "age": data.age,
          "gender": data.gender,
          "grade": data.grade,
          "address": data.address,
          "phone": data.address,
          "guardian": data.guardian,
          "class": data.class
          }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("update successful");
          alert(" updated successfully");
          
          navigate(`/adminviewonestudent/${data.id}`);
        })
        .catch((err) => {
          console.log(err);
        });
}}
   
const deletestudent = () =>{
    fetch(`http://localhost:4354/students_junior_3/${id}`, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log('delete successful');
        alert('student deleted successfully');
        navigate("/adminstudent");
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
          <div className="card col-11 mx-auto my-3 bg-primary text-light">
            <div className="card-header bg-dark fw-bold fs-3">
              Student Details
            </div>
            <div className="d-md-flex  justify-content-evenly my-2 text-dark ">
              <div className="card col-md-5 col-11 mx-auto mx-md-0  my-2 my-md-0 bg-dark text-light">
                <h5 className="card-header card-title">Personal Details</h5>
                <div className="card-body ">
                  <p className="card-text">Name: {data.name}</p>
                  <p className="card-text">ID: {data.student_id}</p>
                  <p className="card-text">Age: {data.age}</p>
                  <p className="card-text">Gender: {data.gender}</p>
                  <p className="card-text">Address: {data.address}</p>
                  <button
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Edit
                  </button>
                </div>
              </div>
              <div className="card col-md-5 col-11  mx-auto mx-md-0  my-2 my-md-0 bg-dark text-light ">
                <h5 className="card-header card-title">Guardian Details</h5>
                <div className="card-body">
                  <p className="card-text">Guardian: {data.guardian.name}</p>
                  <p className="card-text">
                    Relation: {data.guardian.relation}
                  </p>
                  <p className="card-text">Phone: {data.guardian.phone}</p>
                  <p className="card-text">Email: {data.guardian.email}</p>
                  <button
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>

            <div className="card col-11  bg-dark text-light mx-auto my-2">
              <h5 className="card-header">Class Information</h5>
              <div className="card-body">
                <p className="card-title">Class: {data.class.name}</p>
                <p className="card-text"></p>
                <table className="table text-light">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Subjects</th>
                      <th scope="col">Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? "Loading" : data.class.subjects.map((element, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{element.name}</td>
                        <td>{element.test +element.exam}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <button
              onClick={enabledisable}
                className={
                  data.enable == true
                    ? "btn m-2 btn-danger"
                    : "btn m-2 btn-dark"
                }
                title={
                  data.enable == true ? "click to Disable" : "click to Enable"
                }
              >
                {data.enable == true ? "Disable" : "Enable"}
              </button>
              <button type="button" className="btn m-2 btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModalhh">
          DELETE
          </button>
            </div>
          </div>

          
          
        
        
         
       <div className="modal fade" id="exampleModalhh" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
           <div className="modal-dialog" role="document">
             <div className="modal-content bg-primary text-light">
               <div className="modal-header">
                 
                 <button type="button " className="close btn btn-primary" data-bs-dismiss="modal" aria-label="Close">
                   <span aria-hidden="true">×</span>
                 </button>
               </div>
               <div className="modal-body text-uppercase fs-5 fw-bold">
                 
       You are about to delete {data.name} 
               </div>
               <div className="modal-footer ">
                 <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                 <button className="btn btn-danger w-50 mx-auto    m-2 "  onClick={deletestudent} >  DELETE</button>
               </div>
             </div>
           </div>
         </div>


          <div
            className="modal fade"
            id="exampleModal"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header bg-primary text-light">
                  <h1 className="modal-title fs-5 " id="exampleModalLabel">
                    Edit Student Details
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body bg-dark text-light">
                  <p>Student ID: {data.student_id}</p>

                  <form
                    onSubmit={formik.handleSubmit}
                    action=""
                  >
                    <div className="form-group my-2">
                      <input
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        name="name"
                        type="text"
                        onBlur={formik.handleBlur}
                        className={
                          formik.errors.name
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        placeholder="Name"
                      />
                      <span className="text-danger fw-bold">
                        {formik.errors.name}
                      </span>
                    </div>
                    <div className="form-group my-2">
                      <input
                        value={formik.values.age}
                        onChange={formik.handleChange}
                        name="age"
                        type="number"
                        onBlur={formik.handleBlur}
                        className={
                          formik.errors.age
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        placeholder="Age"
                      />
                      <span className="text-danger fw-bold">
                        {formik.errors.age}
                      </span>
                    </div>
                    <div className="form-group my-2">
                      <select
                        name="gender"
                        id=""
                        className="form-control"
                        value={formik.values.gender}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      >
                        <option value="">choose gender</option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                      </select>
                    </div>
                    <div className="form-group my-2">
                      <input
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        name="address"
                        type="text"
                        className="form-control"
                        placeholder="address"
                      />
                    </div>
                    <div>
                      <button type="submit" className="btn btn-primary">
                      Update
                      </button>
                    </div>
                  </form>
                </div>
                <div className="modal-footer bg-primary ">
                  <button
                    type="button"
                    className="btn btn-dark"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div
            className="modal fade"
            id="exampleModal2"
            aria-labelledby="exampleModalLabe2"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header bg-primary text-light">
                  <h1 className="modal-title fs-5 " id="exampleModalLabel">
                    Edit Guardian Details
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body bg-dark text-light">
                  <p>Student ID: {data.student_id}</p>
                  <p>Student Name: {data.name}</p>

                  <form
                    onSubmit={formikk.handleSubmit}
                    action=""
                  >
                    <div className="form-group my-2">
                      <input
                        value={formikk.values.name}
                        onChange={formikk.handleChange}
                        name="name"
                        type="text"
                        onBlur={formikk.handleBlur}
                        className={
                          formikk.errors.name
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        placeholder="Guardian Name"
                      />
                      <span className="text-danger fw-bold">
                        {formikk.errors.name}
                      </span>
                    </div>
                    <div className="form-group my-2">
                      <input
                        value={formikk.values.relation}
                        onChange={formikk.handleChange}
                        name="relation"
                        type="text"
                        onBlur={formikk.handleBlur}
                        className={
                          formikk.errors.relation
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        placeholder="Guardian Relation"
                      />
                      <span className="text-danger fw-bold">
                        {formikk.errors.relation}
                      </span>
                    </div>
                    <div className="form-group my-2">
                      <input
                        value={formikk.values.phone}
                        onChange={formikk.handleChange}
                        name="phone"
                        type="number"
                        onBlur={formikk.handleBlur}
                        className={
                          formikk.errors.phone
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        placeholder="Guardian Number"
                      />
                      <span className="text-danger fw-bold">
                        {formikk.errors.phone}
                      </span>
                    </div>
                    <div className="form-group my-2">
                      <input
                        value={formikk.values.email}
                        onChange={formikk.handleChange}
                        name="email"
                        type="email"
                        onBlur={formikk.handleBlur}
                        className={
                          formikk.errors.email
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        placeholder="Guardian Email"
                      />
                      <span className="text-danger fw-bold">
                        {formikk.errors.number}
                      </span>
                    </div>
                    
                    <div>
                      <button type="submit" className="btn btn-primary">
                      Update
                      </button>
                    </div>
                  </form>
                </div>
                <div className="modal-footer bg-primary ">
                  <button
                    type="button"
                    className="btn btn-dark"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Adminviewthreestudent;
