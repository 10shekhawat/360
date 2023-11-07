import React from "react";
import filter from "../assets/filter.svg";
import sort from "../assets/sort.svg";
import HistoryCard from "./HistoryCard";

const HistoryData = () => {
  return (
    <>
      <div className="container h-100">
        <div className="row">
          <div className="col-12 mt-3">
            <div className="row align-items-center">
              <div className="col-6">
                <h1 style={{fontFamily:"Archivo",color:"#000",fontWeight:500,fontStyle:"normal",fontSize:"1.5rem"}} >Paper History</h1>
              </div>
              <div className="col-6 text-end d-flex justify-content-end align-items-center gap-3" >
                <div className="p-1" style={{border:"1px solid #000",borderRadius:"5px"}}>
                    <img src={filter} alt="filter" />
                </div>
                <div className="p-1" style={{border:"1px solid #000",borderRadius:"5px"}}>
                    <img src={sort} alt="sort" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 mt-3 example" style={{height:"70vh",overflowY:"auto"}} >
                <HistoryCard/>
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryData;