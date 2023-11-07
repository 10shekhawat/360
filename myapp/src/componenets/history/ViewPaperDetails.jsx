import React,{useState} from "react";
import backButton from "../assets/backButton.svg";
import { useNavigate } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import {BsFiletypePdf} from "react-icons/bs"
import {MdOutlineModeEditOutline} from "react-icons/md"


const nameOfPaper = "Chemistry Final Sem Examination";
const totalQuestions = 90;
const totalMarks = 90;

const topicsData = [
  {
    name: "Physics",
    total: 30,
    questionTypes: [
      { type: "Multiple Choice Questions", count: 15 },
      { type: "Short Answer", count: 10 },
      { type: "Long Answer", count: 5 },
      { type: "Fill in the blank", count: 5 },
    ],
  },
  {
    name: "Physics",
    total: 30,
    questionTypes: [
      { type: "Multiple Choice Questions", count: 15 },
      { type: "Short Answer", count: 10 },
      { type: "Long Answer", count: 5 },
      { type: "Fill in the blank", count: 5 },
    ],
  },
  {
    name: "Physics",
    total: 30,
    questionTypes: [
      { type: "Multiple Choice Questions", count: 15 },
      { type: "Short Answer", count: 10 },
      { type: "Long Answer", count: 5 },
      { type: "Fill in the blank", count: 5 },
    ],
  },
];

const sectionData = [
  {
    sectionName: "A",
    marks: 25,
    fillInTheBlank: 54,
    subjectOneName: "Chemistry",
    subjectOneNumber: 12,
    subjectTwoName: "Physics",
    subjectTwoNumber: 51,
    subjectThreeName: "Biology",
    subjectThreeNumber: 14,
  },
  {
    sectionName: "A",
    marks: 25,
    fillInTheBlank: 54,
    subjectOneName: "Chemistry",
    subjectOneNumber: 12,
    subjectTwoName: "Physics",
    subjectTwoNumber: 51,
    subjectThreeName: "Biology",
    subjectThreeNumber: 14,
  },
  {
    sectionName: "A",
    marks: 25,
    fillInTheBlank: 54,
    subjectOneName: "Chemistry",
    subjectOneNumber: 12,
    subjectTwoName: "Physics",
    subjectTwoNumber: 51,
    subjectThreeName: "Biology",
    subjectThreeNumber: 14,
  },

];

const setsData = [
  {
    heading:"Set 1"
  },
  {
    heading:"Set 2"
  },
  {
    heading:"Set 3"
  },
  {
    heading:"Set 4"
  },
]

const ViewPaperDetails = () => {
  const [activeKey, setActiveKey] = useState(null);
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
                onClick={() => Navigate("/History")}
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
                Paper Details
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
          style={{
            height: "80%",
            overflowY: "auto",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "0.875rem",
                fontWeight: 400,
                fontStyle: "normal",
              }}
            >
              Topics & Composition
            </h1>
          </div>

          <div className="col-12 pt-0 mt-0">
            <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
              {topicsData.map((topic, index) => (
                <Accordion.Item key={index} eventKey={index.toString()}>
                  <Accordion.Header>
                    <div className="d-flex align-items-center justify-content-between w-100">
                      <span
                        style={{
                          fontFamily: "Archivo",
                          fontSize: "0.875rem",
                          fontStyle: "normal",
                          fontWeight: 400,
                          color: "#000",
                        }}
                      >
                        {topic.name}
                      </span>
                      <span
                        className="me-3"
                        style={{
                          fontFamily: "Archivo",
                          fontSize: "0.875rem",
                          fontStyle: "normal",
                          fontWeight: 400,
                          color: "#FF2525",
                        }}
                      >
                        {topic.total}
                      </span>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body style={{ borderTop: "1px solid #E1E1E1" }}>
                    {topic.questionTypes.map((question, qIndex) => (
                      <div
                        key={qIndex}
                        className="d-flex align-items-center justify-content-between w-100"
                      >
                        <span
                          style={{
                            fontFamily: "Archivo",
                            fontSize: "0.875rem",
                            fontStyle: "normal",
                            fontWeight: 400,
                            color: "#000",
                          }}
                        >
                          {question.type}
                        </span>
                        <span
                          className="me-3"
                          style={{
                            fontFamily: "Archivo",
                            fontSize: "0.875rem",
                            fontStyle: "normal",
                            fontWeight: 400,
                            color: "#FF2525",
                          }}
                        >
                          {question.count}
                        </span>
                      </div>
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>

          <div className="mt-3 pe-5">
            <div className="d-flex justify-content-between align-items-center">
              <h1
                style={{
                  fontFamily: "Archivo",
                  fontSize: "1rem",
                  fontWeight: 600,
                  fontStyle: "normal",
                  color: "#565656",
                }}
              >
                Total Questions
              </h1>
              <h1
                style={{
                  fontFamily: "Archivo",
                  fontSize: "1rem",
                  fontWeight: 600,
                  fontStyle: "normal",
                  color: "#565656",
                }}
              >
                {totalQuestions}
              </h1>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h1
                style={{
                  fontFamily: "Archivo",
                  fontSize: "0.875rem",
                  fontWeight: 400,
                  fontStyle: "normal",
                  color: "#565656",
                }}
              >
                Total Marks
              </h1>
              <h1
                style={{
                  fontFamily: "Archivo",
                  fontSize: "0.875rem",
                  fontWeight: 400,
                  fontStyle: "normal",
                  color: "#565656",
                }}
              >
                {totalMarks}
              </h1>
            </div>
          </div>
          <hr className="mt-3" />

          <div className="mt-3">
            <h1 style={{color:"#565656",fontFamily:"Archivo",fontSize:"0.875rem",fontStyle:"normal",fontWeight:400}} >Section ( 4 )</h1>

            <div>
              {sectionData.map((value, index) => (
                <div className="col-12 mt-3" key={index}>
                  <div className="card p-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <span
                        style={{
                          color: "#242424",
                          fontSize: "1.5rem",
                          fontStyle: "normal",
                          fontWeight: 600,
                        }}
                      >
                        Section {value.sectionName}
                      </span>
                      <span
                        style={{
                          color: "#242424",
                          fontSize: "1.5rem",
                          fontStyle: "normal",
                          fontWeight: 600,
                        }}
                      >
                        Marks : {value.marks}
                      </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <span
                        style={{
                          color: "#565656",
                          fontSize: "1rem",
                          fontStyle: "normal",
                          fontWeight: 600,
                        }}
                      >
                        Fill in the blank
                      </span>
                      <span
                        style={{
                          color: "#565656",
                          fontSize: "1rem",
                          fontStyle: "normal",
                          fontWeight: 600,
                        }}
                      >
                        {value.fillInTheBlank}
                      </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <span
                        style={{
                          color: "#565656",
                          fontSize: "0.75rem",
                          fontStyle: "normal",
                          fontWeight: 400,
                        }}
                      >
                        {value.subjectOneName}
                      </span>
                      <span
                        style={{
                          color: "#565656",
                          fontSize: "0.75rem",
                          fontStyle: "normal",
                          fontWeight: 400,
                        }}
                      >
                        {value.subjectOneNumber}
                      </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <span
                        style={{
                          color: "#565656",
                          fontSize: "0.75rem",
                          fontStyle: "normal",
                          fontWeight: 400,
                        }}
                      >
                        {value.subjectTwoName}
                      </span>
                      <span
                        style={{
                          color: "#565656",
                          fontSize: "0.75rem",
                          fontStyle: "normal",
                          fontWeight: 400,
                        }}
                      >
                        {value.subjectTwoNumber}
                      </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <span
                        style={{
                          color: "#565656",
                          fontSize: "0.75rem",
                          fontStyle: "normal",
                          fontWeight: 400,
                        }}
                      >
                        {value.subjectThreeName}
                      </span>
                      <span
                        style={{
                          color: "#565656",
                          fontSize: "0.75rem",
                          fontStyle: "normal",
                          fontWeight: 400,
                        }}
                      >
                        {value.subjectThreeNumber}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <hr className="mt-3" />
          
          <div className="mt-3">
            <h1 style={{color:"#565656",fontFamily:"Archivo",fontSize:"0.875rem",fontStyle:"normal",fontWeight:400}} >Sets ( 4 )</h1>

            <div>
              {setsData.map((value, index) => (
                <div className="col-12 mt-3" key={index}>
                  <div className="card p-3">
                  <div className="">
                    <h1 className="text-center mb-0" style={{color:"#242424",fontFamily:"Archivo",fontSize:"1.5rem",fontStyle:"normal",fontWeight:600}} >{value.heading}</h1>
                    <hr className="w-100 " />
                    <p className="text-center" style={{color:"#3774A5",fontSize:"0.85rem",fontFamily:"Archivo",fontWeight:400,fontStyle:"normal"}} >Download PDF <BsFiletypePdf/> </p>

                  </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

          <div className="row align-items-center" style={{height:"5%"}} >
            <div className="col-6 p-0 h-100">
                <button className="w-100 py-2 h-100" style={{border:"0",background:"#EDF7FF",fontSize:"0.85rem",fontWeight:500,fontStyle:"normal",fontFamily:"Archivo",color:"#3774A5"}}><BsFiletypePdf/> Download PDFs</button>
            </div>
            <div className="col-6 p-0 h-100" onClick={()=>Navigate('/EditPaperDetails')} >
                <button  className="w-100 py-2 h-100" style={{border:"0",background:"#fff",boxShadow:"0px 1px 12px 0px rgba(0, 0, 0, 0.12)",fontSize:"0.85rem",fontWeight:500,fontStyle:"normal",fontFamily:"Archivo",color:"#000"}} > <MdOutlineModeEditOutline/> Edit Paper</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewPaperDetails;