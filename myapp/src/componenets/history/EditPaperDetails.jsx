import React,{useState} from "react";
import backButton from "../assets/backButton.svg";
import { useNavigate } from "react-router-dom";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Modal from "react-bootstrap/Modal";

const nameOfPaper = "Chemistry Final Sem Examination";



const EditPaperDetails = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const Navigate = useNavigate();
  return (
    <>
      <div style={{ height: "100vh" }}>
        <div className="container h-100">
          <div
            className="row py-2"
            style={{ borderBottom: "1px solid #CECECE", height: "15%" }}
          >
            <div className="col-2">
              <img
                src={backButton}
                alt="back"
                onClick={()=>{Navigate('/Topics')}}
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
              <h3
                style={{
                  color: "#000",
                  fontSize: "1.25rem",
                  fontStyle: "normal",
                  fontWeight: 600,
                }}
              >
                {nameOfPaper}
              </h3>
            </div>
          </div>

          <div
            className="row p-2 example"
            style={{ height: "80%", overflowY: "auto" }}
          >
            <h1
              style={{
                color: "#000",
                fontFamily: "Archivo",
                fontSize: "1.25rem",
                fontStyle: "normal",
                fontWeight: 400,
              }}
            >
              Choose the assignment to Edit
            </h1>
              <div className="col-12" >
                  <div className="card p-3 " style={{border:"1px solid #000"}} onClick={()=>{Navigate("/Question")}} >
                    <p className="mb-0 text-center" style={{color:"#000",fontSize:"0.875rem",fontStyle:"normal",fontFamily:"Archivo",fontWeight:400}} >Question Composition</p>
                    <p className="mb-0 text-center" style={{color:"#FF0707",fontSize:"0.75rem",fontStyle:"normal",fontFamily:"Archivo",fontWeight:400}} >Create or modify Settings of Questions Types</p>
                  </div>
                </div>
              <div className="col-12" >
                  <div className="card p-3" style={{border:"1px solid #000"}} >
                    <p className="mb-0 text-center" style={{color:"#000",fontSize:"0.875rem",fontStyle:"normal",fontFamily:"Archivo",fontWeight:400}} >Question Composition</p>
                    <p className="mb-0 text-center" style={{color:"#FF0707",fontSize:"0.75rem",fontStyle:"normal",fontFamily:"Archivo",fontWeight:400}} >Create or modify Settings of Questions Types</p>
                  </div>
                </div>
              <div className="col-12" >
                  <div className="card p-3" style={{border:"1px solid #000"}} >
                    <p className="mb-0 text-center" style={{color:"#000",fontSize:"0.875rem",fontStyle:"normal",fontFamily:"Archivo",fontWeight:400}} >Question Composition</p>
                    <p className="mb-0 text-center" style={{color:"#FF0707",fontSize:"0.75rem",fontStyle:"normal",fontFamily:"Archivo",fontWeight:400}} >Create or modify Settings of Questions Types</p>
                  </div>
                </div>
              <div className="col-12" >
                  <div onClick={()=>{handleShow1()}} className="card p-3" style={{border:"1px solid #000"}} >
                    <p className="mb-0 text-center" style={{color:"#000",fontSize:"0.875rem",fontStyle:"normal",fontFamily:"Archivo",fontWeight:400}} >Question Composition</p>
                    <p className="mb-0 text-center" style={{color:"#FF0707",fontSize:"0.75rem",fontStyle:"normal",fontFamily:"Archivo",fontWeight:400}} >Create or modify Settings of Questions Types</p>
                  </div>
                </div>
              <div className="col-12" >
                  <div className="card p-3  " style={{border:"1px solid #000"}} >
                    <p className="mb-0 text-center" style={{color:"#000",fontSize:"0.875rem",fontStyle:"normal",fontFamily:"Archivo",fontWeight:400}} >Question Composition</p>
                    <p className="mb-0 text-center" style={{color:"#FF0707",fontSize:"0.75rem",fontStyle:"normal",fontFamily:"Archivo",fontWeight:400}} >Create or modify Settings of Questions Types</p>
                  </div>
                </div>
          </div>

          <div className="row align-items-center" style={{ height: "5%" }}>
            <div className="col-6 p-0 h-100">
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
            <div className="col-6 p-0 h-100">
              <button
              onClick={handleShow}
                className="w-100 py-2 h-100"
                style={{
                  border: "0",
                  background: "#fff",
                  boxShadow: "0px 1px 12px 0px rgba(0, 0, 0, 0.12)",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  fontStyle: "normal",
                  fontFamily: "Archivo",
                  color: "#FF2525",
                }}
              >
                {" "}
                <MdOutlineDeleteOutline /> Delete Paper
              </button>
            </div>
          </div>
        </div>
      </div>








                  {/* modal for delete button  */}
                    <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
          >
            <Modal.Body className="d-flex flex-column gap-1">
              <div >
                <span className="text-center d-block" style={{color:"#000",fontFamily:"Archivo",fontSize:"1.25rem",fontStyle:"normal",fontWeight:600}}>Confirm Delete Paper</span>
                <p className="text-center" style={{color:"#FF2525",fontFamily:"Archivo",fontSize:"0.875rem",fontStyle:"normal",fontWeight:400}}>This action cannot be reversed</p>
              </div>
              <button onClick={handleClose} className="py-2 border-0" style={{color:"#fff",fontFamily:"Archivo",fontSize:"1rem",fontStyle:"normal",fontWeight:600,background:"#FF2525",borderRadius:"5px"}}>Cancel</button>
              <button  className="py-2 bg-transparent mt-1" style={{color:"#000",fontFamily:"Archivo",fontSize:"1rem",fontStyle:"normal",fontWeight:600,borderRadius:"5px",border:"1px solid #000"}}>Proceed Ahead</button>
            </Modal.Body>
                    </Modal>
                  {/* modal for delete button  */}


                  {/* modal for edit topics  */}
                  <Modal
            show={show1}
            onHide={handleClose1}
            backdrop="static"
            keyboard={false}
            centered
          >
            <Modal.Body className="d-flex flex-column gap-1">
              <div >
                <span className="text-center d-block" style={{color:"#000",fontFamily:"Archivo",fontSize:"1.25rem",fontStyle:"normal",fontWeight:600}}>Edit Topics</span>
                <p className="text-center" style={{color:"#FF2525",fontFamily:"Archivo",fontSize:"0.875rem",fontStyle:"normal",fontWeight:400}}>This action cannot be reversed</p>
              </div>
              <button onClick={handleClose1} className="py-2 border-0" style={{color:"#fff",fontFamily:"Archivo",fontSize:"1rem",fontStyle:"normal",fontWeight:600,background:"#FF2525",borderRadius:"5px"}}>Cancel</button>
              <button  className="py-2 bg-transparent mt-1" style={{color:"#000",fontFamily:"Archivo",fontSize:"1rem",fontStyle:"normal",fontWeight:600,borderRadius:"5px",border:"1px solid #000"}}>Proceed Ahead</button>
            </Modal.Body>
                    </Modal>
                  {/* modal for edit topics  */}









    </>
  );
};

export default EditPaperDetails;