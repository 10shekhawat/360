import React, { useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';


const FinalSemExam = () => {
    const data = [
        {
            section:"Section A",
            marks:'Marks:25',
            fill:'Fill in the blank',
            a54:'54',
            chemistry:"Chemistry",
            a12:'12',
            physics:'Physics',
            a55:'55',
            biology:'Biology',
            a14:'14'
    },
        {
            section:"Section A",
            marks:'Marks:25',
            fill:'Fill in the blank',
            a54:'54',
            chemistry:"Chemistry",
            a12:'12',
            physics:'Physics',
            a55:'55',
            biology:'Biology',
            a14:'14'
    },
]
    let name = "Chemistry"
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                    <div>
                           <h1 className='head'>Preview</h1>
                            <p style={{ color: "#565656" }}>Name of paper</p>
                            <h1 style={{ fontSize: "1.2rem", fontWeight: "700", paddingBottom: "9px" }}>Chemistry Final Sem Examination</h1>
                        </div>


                        <hr style={{ border: "1px solid #565656", width: "100%"}}></hr>


                       <div style={{overflowY:"auto",height:"50vh"}}>
                       <div style={{ height: "auto", width: "100%"}}>
                            <p style={{ marginTop: "1rem", color: "#565656" }}>Topics & Composition</p>
                            <div class="dropdown">
                                <button style={{ width: "95%", borderRadius: "5px", border: " 1px solid #E1E1E1", backgroundColor: "white", color: "black", display: "flex", justifyContent: "space-between", alignItems: "center", marginLeft: "8px", padding: "7px 9px" }} class=" btn-secondary " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Physics
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <p style={{ fontSize: "14px", verticalAlign: "middle", marginBottom: "0rem", color: "red", marginRight: "1rem" }}>30</p>
                                        <IoIosArrowDown style={{}} />
                                    </div>
                                </button>
                                <ul style={{ width: "95%" }} class="dropdown-menu">
                                    <div style={{ display: "flex", justifyContent: 'space-between', fontSize: "14px" }}>
                                        <div style={{ color: "#565656" }}>
                                            <li><a class="dropdown-item" href="#">Multiple choice Questions</a></li>
                                            <li><a class="dropdown-item" href="#">Short Answer</a></li>
                                            <li><a class="dropdown-item" href="#">Long Answer</a></li>
                                            <li><a class="dropdown-item" href="#">Fill in the blank </a></li>
                                        </div>
                                        <div style={{}}>
                                            <li><a class="dropdown-item" href="#" style={{ color: "red", fontSize: "13px" }}>15</a></li>
                                            <li><a class="dropdown-item" href="#" style={{ color: "red", fontSize: "13px" }}>10</a></li>
                                            <li><a class="dropdown-item" href="#" style={{ color: "red", fontSize: "13px" }}>5</a></li>
                                            <li><a class="dropdown-item" href="#" style={{ color: "red", fontSize: "13px" }}>5</a></li></div>
                                    </div>
                                </ul>
                            </div>

                            <div class="dropdown">
                                <button style={{ width: "95%", borderRadius: "5px", border: " 1px solid #E1E1E1", backgroundColor: "white", color: "black", display: "flex", justifyContent: "space-between", alignItems: "center", marginLeft: "8px", padding: "7px 9px", marginTop: "1rem" }} class=" btn-secondary " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Physics
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <p style={{ fontSize: "14px", verticalAlign: "middle", marginBottom: "0rem", color: "red", marginRight: "1rem" }}>30</p>
                                        <IoIosArrowDown style={{}} />
                                    </div>
                                </button>
                                <ul style={{ width: "95%" }} class="dropdown-menu">
                                    <div style={{ display: "flex", justifyContent: 'space-between', fontSize: "14px" }}>
                                        <div style={{ color: "#565656" }}>
                                            <li><a class="dropdown-item" href="#">Multiple choice Questions</a></li>
                                            <li><a class="dropdown-item" href="#">Short Answer</a></li>
                                            <li><a class="dropdown-item" href="#">Long Answer</a></li>
                                            <li><a class="dropdown-item" href="#">Fill in the blank </a></li>
                                        </div>
                                        <div style={{}}>
                                            <li><a class="dropdown-item" href="#" style={{ color: "red", fontSize: "13px" }}>15</a></li>
                                            <li><a class="dropdown-item" href="#" style={{ color: "red", fontSize: "13px" }}>10</a></li>
                                            <li><a class="dropdown-item" href="#" style={{ color: "red", fontSize: "13px" }}>5</a></li>
                                            <li><a class="dropdown-item" href="#" style={{ color: "red", fontSize: "13px" }}>5</a></li></div>
                                    </div>
                                </ul>
                            </div>

                            <div class="dropdown">
                                <button style={{ width: "95%", borderRadius: "5px", border: " 1px solid #E1E1E1", backgroundColor: "white", color: "black", display: "flex", justifyContent: "space-between", alignItems: "center", marginLeft: "8px", padding: "7px 9px", marginTop: "1rem" }} class=" btn-secondary " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Physics
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <p style={{ fontSize: "14px", verticalAlign: "middle", marginBottom: "0rem", color: "red", marginRight: "1rem" }}>30</p>
                                        <IoIosArrowDown style={{}} />
                                    </div>
                                </button>
                                <ul style={{ width: "95%" }} class="dropdown-menu">
                                    <div style={{ display: "flex", justifyContent: 'space-between', fontSize: "14px" }}>
                                        <div style={{ color: "#565656" }}>
                                            <li><a class="dropdown-item" href="#">Multiple choice Questions</a></li>
                                            <li><a class="dropdown-item" href="#">Short Answer</a></li>
                                            <li><a class="dropdown-item" href="#">Long Answer</a></li>
                                            <li><a class="dropdown-item" href="#">Fill in the blank </a></li>
                                        </div>
                                        <div style={{}}>
                                            <li><a class="dropdown-item" href="#" style={{ color: "red", fontSize: "13px" }}>15</a></li>
                                            <li><a class="dropdown-item" href="#" style={{ color: "red", fontSize: "13px" }}>10</a></li>
                                            <li><a class="dropdown-item" href="#" style={{ color: "red", fontSize: "13px" }}>5</a></li>
                                            <li><a class="dropdown-item" href="#" style={{ color: "red", fontSize: "13px" }}>5</a></li></div>
                                    </div>
                                </ul>
                            </div>
                            <div style={{ marginTop: "1.5rem", }} className='row'>
                                <div style={{ marginLeft: "12px" }} className='col-9'>
                                    <h2 style={{ color: "#565656" }}>Total Questions</h2>
                                    <p style={{ color: "#565656" }}>Total Marks</p>
                                    <hr style={{ border: "1px solid #565656", width: "100%" }}></hr>
                                </div>
                                <div className='col-2'>
                                    <h2 style={{ color: "#565656" }}>90</h2>
                                    <p style={{ color: "#565656" }}>90</p>
                                </div>
                                <hr style={{ border: "#565656", width: "100%", marginBottom: "1rem" }}></hr>
                                <p style={{ color: "#565656", marginLeft: "3px" }}>Sets(4)</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                {
                                    data.map((res, index) => {
                                        return (
                                            <div className='card' key={index} style={{}}>
                                                <div className='card-body'>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                        <h4>{res.section}</h4>
                                                        <h6>{res.marks}</h6>
                                                    </div>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                        <h5 style={{ fontWeight: '600', color: '#565656' }}>{res.fill}</h5>
                                                        <h6 style={{ color: '#565656', fontWeight: "600" }}>{res.a54}</h6>
                                                    </div>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                        <h6 style={{ color: '#565656' }}>{res.chemistry}</h6>
                                                        <h6 style={{ color: '#565656' }}>{res.a12}</h6>
                                                    </div>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                        <h6 style={{ color: '#565656' }}>{res.physics}</h6>
                                                        <h6 style={{ color: '#565656' }}>{res.a55}</h6>
                                                    </div>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                        <h6 style={{ color: '#565656' }}>{res.biology}</h6>
                                                        <h6 style={{ color: '#565656' }}>{res.a14}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                        <hr style={{ border: "#565656", width: "100%", marginBottom: "1rem" }}></hr>
                        <p style={{ color: "#565656" }}>Sets (4)</p>

                        <div className='mt-2'>
                 <div className='sets p-2 '>SET 1</div>
                    <div className='sets p-2 mt-2'>SET 1</div>
                    <div className='sets p-2 mt-2'>SET 2</div>
                    <div className='sets p-2 mt-2'>SET 3</div>
                    <div className='sets p-2 mt-2'>SET 4</div>
                    <div className='sets p-2 mt-2'>SET 4</div>
                    <div className='sets p-2 mt-2'>SET 4</div>
                    <div className='sets p-2 mt-2'>SET 4</div>
                    <div className='sets p-2 mt-2'>SET 4</div>
                    <div className='sets p-2 mt-2'>SET 4</div>
                 </div>
                       </div>
                    </div>
                

                
                </div>




            </div>

        </>
    )
}

export default FinalSemExam
