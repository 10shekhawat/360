import React from "react";
import home from "../assets/home.svg";
import home1 from "../assets/home1.svg";
import history from "../assets/history.svg";
import history1 from "../assets/history1.svg";
import topics from "../assets/topics.svg";
import topics1 from "../assets/topics1.svg";
import {useLocation, useNavigate } from "react-router-dom";

const Bottom = () => {
  const location = useLocation();
  const Navigate = useNavigate();
  return (
    <>
      <div className="container" style={{height:"100%",borderTop:"1px solid #DEDEDE"}} >
        <div className="row align-items-center m-auto" style={{height:"100%"}} >
          <div className="col-4">
            <div
              className={`mx-auto d-flex justify-content-center align-items-center p-2 h-100 ${location.pathname==='/'?"bottomOnCurrentPage":"bottomOnAnotherPage"}`}
              onClick={()=>Navigate('/')}
            >
              {location.pathname === "/" ? (
                <>
                  <img src={home} alt="home" />
                  <span className="ms-1">Home</span>
                </>
              ) : (
                <>
                  <img src={home1} alt="home" />
                </>
              )}
            </div>
          </div>
          <div className="col-4">
            <div
              className={`mx-auto h-100 d-flex justify-content-center align-items-center p-2  ${location.pathname==='/History'?"bottomOnCurrentPage":"bottomOnAnotherPage"}`}
              onClick={()=>Navigate('/History')}
            >
              {location.pathname === "/History" ? (
                <>
                  <img src={history} alt="history" />
                  <span className="ms-1" >History</span>
                </>
              ) : (
                <>
                  <img src={history1} alt="home" />
                </>
              )}
            </div>
          </div>
          <div className="col-4">
            <div
              className={`mx-auto d-flex justify-content-center align-items-center p-2 h-100 ${location.pathname==='/Topics'?"bottomOnCurrentPage":"bottomOnAnotherPage"}`}
              onClick={()=>Navigate('/Topics')}
            >
              {location.pathname === "/Topics" ? (
                <>
                  <img src={topics} alt="topics" />
                  <span className="ms-1" >Topics</span>
                </>
              ) : (
                <>
                  <img src={topics1} alt="topics" />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bottom;