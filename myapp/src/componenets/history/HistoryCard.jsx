import React from "react";
import {BiBookBookmark} from "react-icons/bi"
import {MdOutlineDateRange} from "react-icons/md"
import { useNavigate } from "react-router-dom";

const HistoryCard = () => {
  const Navigate = useNavigate();
  const cardData = [
    {
      name: "Chemistry Final Sem Examination",
      subject: "NEET",
      totalQuestions: 45,
      date: "12 August 2023",
    },
    {
      name: "Chemistry Final Sem Examination",
      subject: "NEET",
      totalQuestions: 45,
      date: "12 August 2023",
    },
    {
      name: "Chemistry Final Sem Examination",
      subject: "NEET",
      totalQuestions: 45,
      date: "12 August 2023",
    },
    {
      name: "Chemistry Final Sem Examination",
      subject: "NEET",
      totalQuestions: 45,
      date: "12 August 2023",
    },
    {
      name: "Chemistry Final Sem Examination",
      subject: "NEET",
      totalQuestions: 45,
      date: "12 August 2023",
    },
  ];

  return (
    <>
      {cardData.map((value, index) => (
        <div className="card p-3 mt-3">
            <h6 style={{color:"#000",fontFamily:"Archivo",fontWeight:600,fontStyle:"normal",fontSize:"1rem"}} >{value.name}</h6>
            <span style={{color:"#7e7e7e",fontFamily:"Archivo",fontWeight:400,fontStyle:"normal",fontSize:"0.85rem"}}> <BiBookBookmark/> {value.subject}</span>
            <div className="d-flex gap-5 align-items-center" >
                <p  style={{color:"#7e7e7e",fontFamily:"Archivo",fontWeight:400,fontStyle:"normal",fontSize:"0.85rem"}}>Questions : {value.totalQuestions}</p>
                <p  style={{color:"#3774a5",fontFamily:"Archivo",fontWeight:400,fontStyle:"normal",fontSize:"0.85rem"}} ><MdOutlineDateRange style={{verticalAlign:"middle"}} /> {value.date}</p>
            </div>
            <div>
                <button onClick={()=>Navigate('/ViewPaperDetails')} className="py-2 w-100 bg-transparent" style={{border:"1px solid #000",borderRadius:"5px",color:"#000",fontSize:"0.85rem",fontStyle:"normal",fontWeight:400}} >View Details</button>
            </div>
        </div>
      ))}
    </>
  );
};

export default HistoryCard;