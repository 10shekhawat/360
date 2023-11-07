import React, { useState } from 'react';

const CreateMcq = () => {
  const subjects = [
    { name: 'Physics', id: 'physics' },
    { name: 'Chemistry', id: 'chemistry' },
    { name: 'Maths', id: 'maths' },
    { name: 'Biology', id: 'biology' },
    { name: 'English', id: 'english' },
    { name: 'Hindi', id: 'hindi' },
    { name: 'History', id: 'history' },
    { name: 'History', id: 'history' },
    { name: 'History', id: 'history' },
    { name: 'History', id: 'history' },
    { name: 'History', id: 'history' },
  ];

  const [subjectData, setSubjectData] = useState({});
  // console.log(subjectData)

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setSubjectData({ ...subjectData, [id]: value });
  };

  return (
    <>
      <div className='container h-100'>
        <div className='row h-100'>
          <div className='col-12'>
            <div>
              <h1 className='createPaperHeading'>Create MCQ Composition</h1>
            </div>
            <div style={{overflowY: "scroll", height:"48vh"}}>
              {subjects.map((subject) => (
                <div key={subject.id} style={{ display: "flex", justifyContent: "space-between", padding: "20px", textAlign: "center", borderBottom: "1px solid #DCDCDC" }}>
                  <span className='input'>{subject.name}</span>
                  <input
                    className='inputbutton'
                    type='number'
                    id={subject.id}
                    value={subjectData[subject.id] || ''}
                    onChange={handleInputChange}
                    style={{border:"0"}}
                    
                  />
                </div>
              ))}
            </div>

          </div>
            <div className='col-12' style={{display:"flex", gap:"1rem"}}>
              <div>
                <h1 className='createPaperHeading'>MPQ</h1>
                <input
                    className='inputbutton'
                    type='number'
                    style={{border:"0"}}
                  />
              </div>
              <div>
                <h1 className='createPaperHeading'>Compulsory</h1>
                <input
                    className='inputbtn'
                    type='number'
                    style={{border:"0"}}
                  />
              </div>

            </div>
        </div>
      </div>
    </>
  );
}

export default CreateMcq;

