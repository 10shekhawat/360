import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineCheck } from 'react-icons/ai';
import { FiFilter } from 'react-icons/fi';

const SelectTopic = () => {
    const subjectList = [
        {
            subjectName: "Physics",
        },
        {
            subjectName: "Chemistry",
        },
        {
            subjectName: "Biology",
        },
        {
            subjectName: "Math",
        },
        {
            subjectName: "History",
        },
        {
            subjectName: "Literature",
        },
        {
            subjectName: "Art",
        },
        {
            subjectName: "Computer Science",
        },
        {
            subjectName: "Music",
        },
        {
            subjectName: "Geography",
        },

    ]

    const [selectedSubjects, setSelectedSubjects] = useState({});

    const handleSubjectClick = (subjectName) => {
        setSelectedSubjects((prevState) => ({
            ...prevState,
            [subjectName]: !prevState[subjectName],
        }));
    };

    const totalSubjectSelected = Object.values(selectedSubjects).filter(
        (selected) => selected
    ).length;
    return (
        <>
            <div className='container'>

                <div className='row'>

                    <div className='col-12'>
                       

                        <div className='row align-items-center'>
                            <div className='col-6'>
                                <div style={{lineHeight:"0px"}}>
                                <h1 className='createPaperHeading' >Select Topics</h1>
                                <p style={{fontSize:'12px'}} ><span style={{color:"#FF2525"}}>{totalSubjectSelected}</span> Subjects Selected</p>
                                </div>
                            </div>
                            <div className='col-6'>

                                <FiFilter className=' p-1 text-end' style={{float:"right",border:"1px solid",fontSize:"2rem",borderRadius:"5px"}}  />
                            </div>
                        </div>

                        <div className='my-2' style={{ height: "43vh", overflowY: "auto" }} >
                            {
                                subjectList.map((value, index) => (

                                    <div
                                        key={index}
                                        className='card p-3 mt-3'
                                        style={{
                                            border: selectedSubjects[value.subjectName] ? '2px solid #00BA4A' : '2px solid #DFDFDF',
                                        }}
                                        onClick={() => handleSubjectClick(value.subjectName)}
                                    >
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <h5 style={{ color: selectedSubjects[value.subjectName] ? '#00BA4A' : '#000' }}>
                                                {value.subjectName}
                                            </h5>
                                            {selectedSubjects[value.subjectName] ? <AiOutlineCheck /> : <AiOutlinePlus />}
                                        </div>
                                    </div>
                                ))
                            }



                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SelectTopic
