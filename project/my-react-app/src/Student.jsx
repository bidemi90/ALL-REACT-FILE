import { useEffect } from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import Adminprofile from "./components/Adminprofile";
import Studenthomepage from "./components/Studenthomepage";

function Student() {
 
  return (
    <>
    
    <Routes>
     
      {/* <Route path='/adminclass'element={<Adminclass />}></Route>
      <Route path='/adminstudent'element={<Adminstudent />}></Route>
      <Route path='/adminviewonestudent/:id'element={<Adminviewonestudent />}></Route>
      <Route path='/adminviewtwostudent/:id'element={<Adminviewtwostudent />}></Route>
      <Route path='/adminviewthreestudent/:id'element={<Adminviewthreestudent />}></Route>
      <Route path='/adminviewoneclass/:id'element={<Adminviewoneclass />}></Route>
      <Route path='/admineditoneclass/:id'element={<Admineditoneclass />}></Route> */}
     
    </Routes>
    </>
  );
}

export default Student;