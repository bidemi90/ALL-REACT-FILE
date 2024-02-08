import React,{useEffect,useState} from "react";

const Allsidebar = (props) => {

    
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  
  return (
    <aside className="bg-dark d-flex flex-column text-light align-items-center">
      <div>{props.one}</div>
      <hr />
      <div className="d-flex flex-column text-light">
        <p>Time: {time.toLocaleTimeString()}</p>
        {props.two}
       
        {props.three}
        {props.four}
        {props.five}
        {props.six}
      </div>
    </aside>
  );
};

export default Allsidebar;
