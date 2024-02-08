import React, { useEffect, useState } from 'react'

const Tableusershow = () => {


    const [myData, setMyData] = useState([]);

    useEffect(() => {
        const dataFromLocalStorage = JSON.parse(localStorage.getItem('myData')) || [];
        setMyData(dataFromLocalStorage);
    }, []);


    function handleDelete(index) {
        const newData = [...myData];
        newData.splice(index, 1);
        setMyData(newData);
        localStorage.setItem('myData', JSON.stringify(newData));
    }
    return (
        <section>
            <table className="table table-striped text-light m-3">
                <thead>
                    <tr>
                        <th scope="col">S/N</th>
                        <th scope="col">NAME</th>
                        <th scope="col">PHONE NUMBER</th>
                        <th scope="col">EMAIL</th>
                        <th scope="col">GENDER</th>
                        <th scope="col">AGE</th>
                        <th scope="col">REMOVE</th>
                    </tr>
                </thead>



                {myData.length > 0 ? (
                    myData.map((el, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{el.username}</td>
                            <td>{el.usernumber}</td>
                            <td>{el.useremail}</td>
                            <td>{el.usergender}</td>
                            <td>{el.userage}</td>
                            <td>
                                <button onClick={() => handleDelete(index)} className='text-light btn btn-danger'>
                                    DELETE
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="7">No data found in local storage</td>
                    </tr>
                )}





            </table>
        </section>
    )
}

export default Tableusershow