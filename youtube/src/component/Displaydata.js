import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

const Displaydata = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3010/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
  }, []);


  const readmore = (index) => {
    console.log(index);
console.log(data[index]);
  

    
  }

  return (
    <section id='showthedata'>
      {data.map((element, index) => (
        <div  key={index} className="card mb-3 bg-success text-light m-2" style={{ maxWidth: "300px" }}>
          <div className="row  g-0">
           
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{element.title}</h5>
                <p className="card-text">{element.content}</p>
                {/* <button className='btn btn-danger' onClick={readmore}>read more</button> */}
                <button className='btn btn-danger' onClick={() => readmore(index)}>read more</button>

              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Displaydata
