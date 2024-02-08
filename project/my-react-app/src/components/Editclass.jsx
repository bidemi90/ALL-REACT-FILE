

import React, { useState } from 'react';

function Editclass({ subjects, name, onSubmit }) {
  const [subjectList, setSubjectList] = useState(subjects);
  const [formName, setFormName] = useState(name);

  // Function to handle subject changes
  const handleSubjectChange = (index, event) => {
    const updatedSubjects = [...subjectList];
    updatedSubjects[index] = event.target.value;
      
      setSubjectList(updatedSubjects);
    

    
  };

  // Function to add a new subject
  const addSubject = () => {
    const lastSubject = subjectList[subjectList.length - 1];
    if (lastSubject !== '') {
      
      setSubjectList([...subjectList, '']);
    }
    if (lastSubject == '') {
      
      alert("you must fill the last input")
    }
    
  };
  

  // Function to remove a subject
  const removeSubject = (index) => {
    const updatedSubjects = [...subjectList];
    updatedSubjects.splice(index, 1);
    setSubjectList(updatedSubjects);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
   

    const lastSubject = subjectList[subjectList.length - 1];
    if (lastSubject !== '') {
      
      onSubmit({ name: formName, subjects: subjectList });
    }
    if (lastSubject == '') {
      
      alert("you must fill the last input or remove last input")
    }

  };

  return (
    <form className='card col-10 bg-primary  text-light rounded mx-auto my-3 p-3' onSubmit={handleSubmit}>
      <label className='  d-flex card-header  fs-4 text-center fw-bold'>
        Name:
        <input className='form-control'
          type="text"
          value={formName}
          onChange={(event) => setFormName(event.target.value)}
        />
      </label>
      
      <div className=' card-body'>
      <label>Subjects:</label>
      {subjectList.map((subject, index) => (
        <div key={index} className=' input-group m-1 '>
          <input className=' form-control'
            type="text"
            value={subject}
            onChange={(event) => handleSubjectChange(index, event)}
          />
          <button type="button" className=' btn btn-danger' onClick={() => removeSubject(index)}>
            Remove
          </button>
        </div>
      ))}
      </div>
      
      <div className=' card-footer bg-dark '>
      <button className='btn  btn-info m-1' type="button" onClick={addSubject}>
        Add Subject
      </button>
      
      <button className=' btn m-1 btn-primary' type="submit">Save</button>
      </div>
    </form>
  );
}

export default Editclass;
