

import React from "react";
import { Link } from 'react-router-dom'
import Button from "./Button";
import Allnavebar from "./Allnavebar";
import Allsidebar from "./Allsidebar";

const Studenthomepage = () => {
 

  return (
    <>
      <Allnavebar
        one={<div className="text-ligth fw-bold fs-3">Student PAGE</div>}
        // two={<Link className="btn btn-primary d-none d-md-block m-2 " to="/adminhome">  Home</Link>}
        // three={<Link className="btn btn-primary d-none d-md-block m-2 " to="/adminclass">  Classes</Link>}
        // four={<Link className="btn btn-primary d-none d-md-block m-2 " to="/adminstudent">  Students</Link>}
        // five={<Button className="btn btn-primary d-none d-md-block m-2 " name="Teachers" />}
        // six={
        //   <div className="sidebar d-block d-md-none">
        //     <Button className="btn btn-primary m-2 " name="sidebar" />

        //     <Allsidebar
        //       one={
        //         <div className="align-items-center p-2 d-flex flex-column text-ligth fw-bold fs-3 holdingprofile">
        //           <img src="" alt="" />
        //           <Button className="btn btn-primary m-2 " name="click me" />
        //         </div>
        //       }
        //       two={<Link className="btn btn-primary  m-2 " to="/adminhome">  Home</Link>}
        // three={<Link className="btn btn-primary  m-2 " to="/adminclass">  Classes</Link>}
        //       four={<Link className="btn btn-primary  m-2 " to="/adminstudent">  Students</Link>}
        //       five={<Button className="btn btn-primary m-2 " name="click me" />}
        //       six={<Button className="btn btn-primary m-2 " name="click me" />}
        //     />
        //   </div>
        // }
      />
    </>
  );
};

export default Studenthomepage;
