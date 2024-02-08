import React,{useState,useEffect} from "react";

const Allnavebar = (props) => {


  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  



  return (
    <nav className="text-light bg-dark d-flex justify-content-between align-items-center p-3  nav">
      <div>{props.one}</div>
      <div className="d-flex col-lg-7 justify-content-between align-items-center ">
        <p className="m-0 d-none d-md-block fw-bold">Time: {time.toLocaleTimeString()}</p>
        {props.two}
        {props.three}
        {props.four}
        {props.five}
        {props.six}
      </div>
    </nav>
  );
};

export default Allnavebar;
