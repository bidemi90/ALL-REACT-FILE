import React from 'react'

const usefetch = () => {
    useEffect(() => {
        fetch("http://localhost:3010/posts")
          .then((res) => res.json())
          .then((data) => {
            setData(data);
          })
      }, []);
  return (
    <div></div>
  )
}

export default usefetch