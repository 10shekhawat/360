import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backButton from "../assets/backButton.svg";
import Modal from "react-bootstrap/Modal";

const cardData = [
  {
    subject: "Physics",
    total: 30,
    mcq: 15,
    short: 10,
    long: 5,
    blanks: 5,
  },
  {
    subject: "Physics",
    total: 30,
    mcq: 15,
    short: 10,
    long: 5,
    blanks: 5,
  },
  {
    subject: "Physics",
    total: 30,
    mcq: 15,
    short: 10,
    long: 5,
    blanks: 5,
  },
  {
    subject: "Physics",
    total: 30,
    mcq: 15,
    short: 10,
    long: 5,
    blanks: 5,
  },
  {
    subject: "Physics",
    total: 30,
    mcq: 15,
    short: 10,
    long: 5,
    blanks: 5,
  },
  {
    subject: "Physics",
    total: 30,
    mcq: 15,
    short: 10,
    long: 5,
    blanks: 5,
  },
  {
    subject: "Physics",
    total: 30,
    mcq: 15,
    short: 10,
    long: 5,
    blanks: 5,
  },
];


const QuestionComposition = () => {
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [inputValues, setInputValues] = useState({
        mcq: "15",
        short: "10",
        long: "5",
        blanks: "5",
      });
    
      const handleInputChange = (inputName, value) => {
        if (/^\d{0,4}$/.test(value)) {
          setInputValues((prevValues) => ({
            ...prevValues,
            [inputName]: value,
          }));
        }
      };
  const Navigate = useNavigate();
  return (
    <>
      <div style={{ height: "100vh" }}>
        <div className="container" style={{ height: "7%" }}>
          <div className="row py-2">
            <div className="col-2">
              <img
                onClick={() => Navigate("/EditPaperDetails")}
                src={backButton}
                alt="back"
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
          </div>
        </div>

        <div
          className="container example"
          style={{ height: "86%", overflowY: "auto" }}
        >
          <div className="row">
            <div className="col-12">
              <p className="mb-0"
                style={{
                  color: "#565656",
                  fontFamily: "Archivo",
                  fontSize: "0.875rem",
                  fontStyle: "normal",
                  fontWeight: 700,
                }}
              >
                Questions Composition
              </p>
            </div>

            <div className="col-12">
              {cardData.map((value, index) => (
                <>
                  <div className="card mt-3 p-3">

                    <div className="d-flex align-items-center justify-content-between" >
                      <h1 className="mb-0" style={{fontFamily:"Archivo",fontSize:"0.875rem",fontStyle:"normal",fontWeight:400,color:"#000",}}>{value.subject}</h1>
                      <h1 className="mb-0" style={{fontFamily:"Archivo",fontSize:"0.875rem",fontStyle:"normal",fontWeight:400,color:"#FF2525",}}>{value.total}</h1>
                    </div>
                    <hr/>

                    <div className="d-flex justify-content-between align-items-center" >
                    <h1 className="mb-0" style={{fontFamily:"Archivo",fontSize:"0.875rem",fontStyle:"normal",fontWeight:400,color:"#4B4B4B",}}>Multiple Choice Questions</h1>
                    <input
                    value={inputValues.mcq}
                  onChange={(e) => handleInputChange("mcq", e.target.value)}
                  placeholder=""
                  style={{fontFamily:"Archivo",fontSize:"0.875rem",fontStyle:"normal",fontWeight:400,color:"#FF2525",width:"5ch"}}
                  className="createQuestionsInput p-1"
                  defaultValue={inputValues.mcq}
                    />
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-2" >
                    <h1 className="mb-0" style={{fontFamily:"Archivo",fontSize:"0.875rem",fontStyle:"normal",fontWeight:400,color:"#4B4B4B",}}>Short Answer</h1>
                    <input
                    value={inputValues.short}
                  onChange={(e) => handleInputChange("short", e.target.value)}
                  placeholder=""
                  style={{fontFamily:"Archivo",fontSize:"0.875rem",fontStyle:"normal",fontWeight:400,color:"#FF2525",width:"5ch"}}
                  className="createQuestionsInput p-1"
                  defaultValue={inputValues.short}
                    />
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-2" >
                    <h1 className="mb-0" style={{fontFamily:"Archivo",fontSize:"0.875rem",fontStyle:"normal",fontWeight:400,color:"#4B4B4B",}}>Long Answer</h1>
                    <input
                    value={inputValues.long}
                  onChange={(e) => handleInputChange("long", e.target.value)}
                  placeholder=""
                  style={{fontFamily:"Archivo",fontSize:"0.875rem",fontStyle:"normal",fontWeight:400,color:"#FF2525",width:"5ch"}}
                  className="createQuestionsInput p-1"
                  defaultValue={inputValues.long}
                    />
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-2" >
                    <h1 className="mb-0" style={{fontFamily:"Archivo",fontSize:"0.875rem",fontStyle:"normal",fontWeight:400,color:"#4B4B4B",}}>Fill in the blank</h1>
                    <input
                    value={inputValues.blanks}
                  onChange={(e) => handleInputChange("blanks", e.target.value)}
                  placeholder=""
                  style={{fontFamily:"Archivo",fontSize:"0.875rem",fontStyle:"normal",fontWeight:400,color:"#FF2525",width:"5ch"}}
                  className="createQuestionsInput p-1"
                  defaultValue={inputValues.blanks}
                    />
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>

        <div className="container-fluid" style={{ height: "7%" }}>
          <div className="row align-items-center h-100">
            <div className="col-12 p-0 h-100">
              <button
                className="w-100 py-2 h-100"
                onClick={handleShow2}
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






      <Modal
            show={show2}
            onHide={handleClose2}
            backdrop="static"
            keyboard={false}
            centered
          >
            <Modal.Body className="d-flex flex-column gap-1">
              <div >
                <span className="text-center d-block" style={{color:"#000",fontFamily:"Archivo",fontSize:"1.25rem",fontStyle:"normal",fontWeight:600}}>Confirm Delete Paper</span>
                <p className="text-center" style={{color:"#FF2525",fontFamily:"Archivo",fontSize:"0.875rem",fontStyle:"normal",fontWeight:400}}>This action cannot be reversed</p>
              </div>
              <button onClick={handleClose2} className="py-2 border-0" style={{color:"#fff",fontFamily:"Archivo",fontSize:"1rem",fontStyle:"normal",fontWeight:600,background:"#FF2525",borderRadius:"5px"}}>Cancel</button>
              <button  className="py-2 bg-transparent mt-1" style={{color:"#000",fontFamily:"Archivo",fontSize:"1rem",fontStyle:"normal",fontWeight:600,borderRadius:"5px",border:"1px solid #000"}}>Proceed Ahead</button>
            </Modal.Body>
                    </Modal>
    </>
  );
};

export default QuestionComposition;