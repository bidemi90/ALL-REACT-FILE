import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementbyvalue } from "../Redux/counterSlice";


const Thenew = () => {
    const [addnumber, setaddnumber] = useState(null)


    const dispatch=useDispatch();
  
    const {a}=useSelector((state)=>state.counterincdec)
    console.log(a);
    
    
    
      const inc= ()=>{
        dispatch(increment())
      }
      const dec= ()=>{
        dispatch(decrement())
      }
      const byvalue=()=>{
    dispatch(incrementbyvalue(Number(addnumber)))
      }

    return (
        <section className='seactionhold bg-dark'>
            <div className=' bg-light col-6 mx-auto p-4 '>
                <div className="w-100 d-flex justify-content-between align-items-center">
                <button onClick={inc} className='btn btn-danger'>
                    +
                </button>
                <p className=' p-3 text-danger'>{a}</p>
                <button onClick={dec} className='btn btn-danger'>
                    -
                </button> 
                </div>
                <div>
                <input type="number" onChange={(e)=>setaddnumber(e.target.value)} className=" form-control" /> 
     <button className=" btn btn-danger" onClick={byvalue}></button>

                </div>
            </div>
           

    


        </section>
    )
}

export default Thenew