import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backButton from "../assets/backButton.svg";
import Offcanvas from "react-bootstrap/Offcanvas";
import Select from "react-select";
import Modal from "react-bootstrap/Modal";

const cardData = [
  {
    section: "Section A",
    total: 30,
    mcq: 15,
    short: 10,
    long: 5,
    blanks: 5,
  },
  {
    section: "Section A",
    total: 30,
    mcq: 15,
    short: 10,
    long: 5,
    blanks: 5,
  },
  {
    section: "Section A",
    total: 30,
    mcq: 15,
    short: 10,
    long: 5,
    blanks: 5,
  },
  {
    section: "Section A",
    total: 30,
    mcq: 15,
    short: 10,
    long: 5,
    blanks: 5,
  },
  {
    section: "Section A",
    total: 30,
    mcq: 15,
    short: 10,
    long: 5,
    blanks: 5,
  },
  {
    section: "Section A",
    total: 30,
    mcq: 15,
    short: 10,
    long: 5,
    blanks: 5,
  },

];

const SectionComposition = () => {
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
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

  const options = [
    { value: "demo1", label: "demo1" },
    { value: "demo2", label: "demo2" },
    { value: "demo3", label: "demo3" },
    { value: "demo4", label: "demo4" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <div className="col-6">
              <p
                className="mb-0"
                style={{
                  color: "#565656",
                  fontFamily: "Archivo",
                  fontSize: "0.875rem",
                  fontStyle: "normal",
                  fontWeight: 700,
                }}
              >
                Section Composition
              </p>
            </div>

            <div className="col-6">
              <button
                className="p-1 px-3 border-0"
                style={{
                  float: "right",
                  background: "#EDF7FF",
                  color: "#3774A5",
                  fontSize: "0.875rem",
                  fontStyle: "normal",
                  fontWeight: 400,
                  borderRadius: "3px",
                }}
                onClick={handleShow}
              >
                +Add
              </button>
            </div>

            <div className="col-12">
              {cardData.map((value, index) => (
                <>
                  <div className="card mt-3 p-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <h1
                        className="mb-0 w-50 py-2 ps-2"
                        style={{
                          fontFamily: "Archivo",
                          fontSize: "0.875rem",
                          fontStyle: "normal",
                          fontWeight: 400,
                          color: "#000",
                          background:"#F1F1F1",
                          borderRadius:"5px"
                        }}
                      >
                        {value.section}
                      </h1>
                      <h1
                        className="mb-0"
                        style={{
                          fontFamily: "Archivo",
                          fontSize: "0.875rem",
                          fontStyle: "normal",
                          fontWeight: 400,
                          color: "#FF2525",
                        }}
                      >
                        {value.total}
                      </h1>
                    </div>
                    <hr />

                    <div className="d-flex justify-content-between align-items-center">
                      <h1
                        className="mb-0"
                        style={{
                          fontFamily: "Archivo",
                          fontSize: "0.875rem",
                          fontStyle: "normal",
                          fontWeight: 400,
                          color: "#4B4B4B",
                        }}
                      >
                        Multiple Choice Questions
                      </h1>
                      <input
                        value={inputValues.mcq}
                        onChange={(e) =>
                          handleInputChange("mcq", e.target.value)
                        }
                        placeholder=""
                        style={{
                          fontFamily: "Archivo",
                          fontSize: "0.875rem",
                          fontStyle: "normal",
                          fontWeight: 400,
                          color: "#FF2525",
                          width: "5ch",
                        }}
                        className="createQuestionsInput p-1"
                        defaultValue={inputValues.mcq}
                      />
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <h1
                        className="mb-0"
                        style={{
                          fontFamily: "Archivo",
                          fontSize: "0.875rem",
                          fontStyle: "normal",
                          fontWeight: 400,
                          color: "#4B4B4B",
                        }}
                      >
                        Short Answer
                      </h1>
                      <input
                        value={inputValues.short}
                        onChange={(e) =>
                          handleInputChange("short", e.target.value)
                        }
                        placeholder=""
                        style={{
                          fontFamily: "Archivo",
                          fontSize: "0.875rem",
                          fontStyle: "normal",
                          fontWeight: 400,
                          color: "#FF2525",
                          width: "5ch",
                        }}
                        className="createQuestionsInput p-1"
                        defaultValue={inputValues.short}
                      />
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <h1
                        className="mb-0"
                        style={{
                          fontFamily: "Archivo",
                          fontSize: "0.875rem",
                          fontStyle: "normal",
                          fontWeight: 400,
                          color: "#4B4B4B",
                        }}
                      >
                        Long Answer
                      </h1>
                      <input
                        value={inputValues.long}
                        onChange={(e) =>
                          handleInputChange("long", e.target.value)
                        }
                        placeholder=""
                        style={{
                          fontFamily: "Archivo",
                          fontSize: "0.875rem",
                          fontStyle: "normal",
                          fontWeight: 400,
                          color: "#FF2525",
                          width: "5ch",
                        }}
                        className="createQuestionsInput p-1"
                        defaultValue={inputValues.long}
                      />
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <h1
                        className="mb-0"
                        style={{
                          fontFamily: "Archivo",
                          fontSize: "0.875rem",
                          fontStyle: "normal",
                          fontWeight: 400,
                          color: "#4B4B4B",
                        }}
                      >
                        Fill in the blank
                      </h1>
                      <input
                        value={inputValues.blanks}
                        onChange={(e) =>
                          handleInputChange("blanks", e.target.value)
                        }
                        placeholder=""
                        style={{
                          fontFamily: "Archivo",
                          fontSize: "0.875rem",
                          fontStyle: "normal",
                          fontWeight: 400,
                          color: "#FF2525",
                          width: "5ch",
                        }}
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
              onClick={handleShow1}
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


      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="bottom"
        style={{ height: "60%" }}
      >
        <Offcanvas.Header>
          <Offcanvas.Title
            className="d-flex justify-content-center mx-auto"
            onClick={handleClose}
          >
            <div
              style={{ width: "50px", height: "2px", background: "#E1E1E1" }}
            ></div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h1
            className="text-center"
            style={{
              color: "#000",
              fontSize: "1.25rem",
              fontStyle: "normal",
              fontWeight: 600,
            }}
          >
            Add Section
          </h1>
          <div className="d-flex flex-column justify-content-between h-75 mt-3">
            <div className="d-flex flex-column gap-3">
              <input
                type="number"
                className="w-100 p-1"
                placeholder="Enter Section Name"
                style={{ border: "1px solid #E5E5E5", borderRadius: "5px" }}
              />
              <Select
                styles={{ border: "1px solid #E5E5E5" }}
                defaultValue={selectedOption}
                placeholder="Select Question Type"
                onChange={setSelectedOption}
                options={options}
              />
            </div>

            <div>
              <button
                onClick={handleClose}
                className="w-100 py-2 border-0"
                style={{
                  background: "#EDF7FF",
                  borderRadius: "5px",
                  color: "#3774A5",
                  fontSize: "0.875rem",
                  fontStyle: "normal",
                  fontWeight: 500,
                }}
              >
                Add Section
              </button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>



      <Modal
            show={show1}
            onHide={handleClose1}
            backdrop="static"
            keyboard={false}
            centered
          >
            <Modal.Body className="d-flex flex-column gap-1">
              <div >
                <span className="text-center d-block" style={{color:"#000",fontFamily:"Archivo",fontSize:"1.25rem",fontStyle:"normal",fontWeight:600}}>Confirm Delete Paper</span>
                <p className="text-center" style={{color:"#FF2525",fontFamily:"Archivo",fontSize:"0.875rem",fontStyle:"normal",fontWeight:400}}>This action cannot be reversed</p>
              </div>
              <button onClick={handleClose1} className="py-2 border-0" style={{color:"#fff",fontFamily:"Archivo",fontSize:"1rem",fontStyle:"normal",fontWeight:600,background:"#FF2525",borderRadius:"5px"}}>Cancel</button>
              <button  className="py-2 bg-transparent mt-1" style={{color:"#000",fontFamily:"Archivo",fontSize:"1rem",fontStyle:"normal",fontWeight:600,borderRadius:"5px",border:"1px solid #000"}}>Proceed Ahead</button>
            </Modal.Body>
                    </Modal>

    </>
  );
};

export default SectionComposition;