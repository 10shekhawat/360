import React from 'react'
import backButton from "../assets/backButton.svg";
import { useNavigate } from 'react-router-dom';


const QuestionComposition = () => {

    const Navigate = useNavigate();


    return (
        <>
            <div style={{ height: "100vh" }} className=''>
                <div className='container h-100' >
                    <div
                        className="row py-2"
                        style={{ height: "15%" }}
                    >
                        <div className="col-2">
                            <img
                                src={backButton}
                                alt="back"
                                onClick={() => { Navigate('/Topics') }}
                            />
                        </div>
                        <div className="col-8 text-center">
                            <h1
                                style={{
                                    fontFamily: "Archivo",
                                    color: "#000",
                                    fontWeight: 500,
                                    fontStyle: "normal",
                                    fontSize: "1.5rem",
                                }}
                            >
                                Paper Editing Mode
                            </h1>
                        </div>
                        <div className="col-2"></div>
                        <div className="col-12 ">
                            <p
                                style={{
                                    color: "#565656",
                                    fontSize: "0.875rem",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    marginBottom: "0",
                                }}
                            >
                                Name of Paper
                            </p>
                        </div>
                    </div>





                    <div className="row p-2 example" style={{ height: "80%", overflowY: "auto" }}>
                    
                    </div>
















                    <div className="row align-items-center" style={{ height: "5%" }}>
                        <div className="col-12 p-0 h-100">
                            <button
                                className="w-100 py-2 h-100"
                                style={{
                                    border: "0",
                                    background: "#EDF7FF",
                                    fontSize: "0.85rem",
                                    fontWeight: 500,
                                    fontStyle: "normal",
                                    fontFamily: "Archivo",
                                    color: "#3774A5",
                                }}
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuestionComposition
