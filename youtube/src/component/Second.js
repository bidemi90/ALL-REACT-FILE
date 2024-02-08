import React, { useEffect, useState, axios } from 'react'
// import axios from "axios"
const Second = () => {

  useEffect(() => {
    fetch("http://localhost:3010/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
  }, [])




  const [title, settitle] = useState([])
  const [content, setcontent] = useState([])

  const addtopost = () => {
    let blog_post = { title, content }
    console.log(blog_post);

    // FOR JS FETCH

    fetch("http://localhost:3010/posts",{
        headers:{
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(blog_post)
    }
    )
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        console.log('post successful');
        alert('post successful');
    }).catch((err)=>{
        console.log(err);
    })

    // FOR AXIOS

    // axios.post("http://localhost:3010/posts", {
    //   // headers:{
    //   //     "Content-Type": "application/json"
    //   // },
    //   // method: "POST",
    //   title, content
    // })
    //   .then((res) => {
    //     console.log(res.data.body);
    //   }).catch((err) => {
    //     console.log(err);
    //   })
  }



  return (
    <section >
      <div className='divforposting m-2'>
        <input className="form-control m-2" onChange={(e) => settitle(e.target.value)} type="text" placeholder='title' />
        <textarea className="form-control m-2" onChange={(e) => setcontent(e.target.value)} name="" id="" placeholder='content' cols="30" rows="10"></textarea>
        <button className="form-control m-2 btn btn-primary" onClick={addtopost}>
          submit
        </button>
      </div>
    </section>
  )
}

export default Second

