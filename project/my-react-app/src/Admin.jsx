import { useEffect } from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import Adminprofile from "./components/Adminprofile";
import Adminclass from "./components/Adminclass";
import Adminstudent from "./components/Adminstudent";
import Adminviewonestudent from "./components/Adminviewonestudent";
import Adminviewoneclass from "./components/Adminviewoneclass";
import Admineditoneclass from "./components/Admineditoneclass";
import Adminviewtwostudent from "./components/Adminviewtwostudent";
import Adminviewthreestudent from "./components/Adminviewthreestudent";
import Adminhomepage from "./components/Adminhomepage";
import Tesss from "./components/Tesss";

function Admin() {
 
  return (
    <>
   
    <Routes>
      <Route path='/adminhome'element={<Adminprofile />}></Route>
      <Route path='/adminclass'element={<Adminclass />}></Route>
      <Route path='/adminstudent'element={<Adminstudent />}></Route>
      <Route path='/test'element={< Tesss/>}></Route>
      <Route path='/adminviewonestudent/:id'element={<Adminviewonestudent />}></Route>
      <Route path='/adminviewtwostudent/:id'element={<Adminviewtwostudent />}></Route>
      <Route path='/adminviewthreestudent/:id'element={<Adminviewthreestudent />}></Route>
      <Route path='/adminviewoneclass/:id'element={<Adminviewoneclass />}></Route>
      <Route path='/admineditoneclass/:id'element={<Admineditoneclass />}></Route>
     


      <Route path='/studentprofile'element={<Studentprofile />}></Route>

    </Routes>
    </>
  );
}

export default Admin;
