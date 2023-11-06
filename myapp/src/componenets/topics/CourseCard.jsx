import React from "react";
import { useNavigate } from "react-router-dom";
import { BiBookBookmark } from "react-icons/bi";

const CourseCard = () => {
  const Navigate = useNavigate();
  const cardData = [
    {
      name: "Colulomb's Law",
      subject: "NEET",
      totalQuestions: 45,
      state: "Public",
    },
    {
      name: "Colulomb's Law",
      subject: "NEET",
      totalQuestions: 45,
      state: "Private",
    },
    {
      name: "Colulomb's Law",
      subject: "NEET",
      totalQuestions: 45,
      state: "Public",
    },
    {
      name: "Colulomb's Law",
      subject: "NEET",
      totalQuestions: 45,
      state: "Private",
    },
    {
      name: "Colulomb's Law",
      subject: "NEET",
      totalQuestions: 45,
      state: "Public",
    },
    {
      name: "Colulomb's Law",
      subject: "NEET",
      totalQuestions: 45,
      state: "Private",
    },
    {
      name: "Colulomb's Law",
      subject: "NEET",
      totalQuestions: 45,
      state: "Public",
    },
    {
      name: "Colulomb's Law",
      subject: "NEET",
      totalQuestions: 45,
      state: "Private",
    },
    {
      name: "Colulomb's Law",
      subject: "NEET",
      totalQuestions: 45,
      state: "Public",
    },
    {
      name: "Colulomb's Law",
      subject: "NEET",
      totalQuestions: 45,
      state: "Private",
    },
  ];
  return (
    <>
      {cardData.map((value, index) => (
        <div className="card p-3 mt-3">
          <h6
            style={{
              color: "#000",
              fontFamily: "Archivo",
              fontWeight: 600,
              fontStyle: "normal",
              fontSize: "1rem",
            }}
          >
            {value.name}
          </h6>
          <h6
            style={{
              color: "#7e7e7e",
              fontFamily: "Archivo",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "0.85rem",
            }}
          >
            {" "}
            <BiBookBookmark /> {value.subject}
          </h6>
          <p
            style={{
              color: "#3774A5",
              fontFamily: "Archivo",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "0.85rem",
            }}
          >
            Questions : {value.totalQuestions}
          </p>
          {value.state == "Public" ? (
            <>
              <p
                className="p-1 px-2"
                style={{
                  color: "#4EC53B",
                  fontFamily: "Archivo",
                  fontSize: "0.85rem",
                  fontStyle: "normal",
                  fontWeight: 400,
                  background: "#ECFFE9",
                  borderRadius: "10px",
                  width: "max-content",
                }}
              >
                {value.state}
              </p>
            </>
          ) : (
            <>
              <p
                className="p-1 px-2"
                style={{
                  color: "#C53B3B",
                  fontFamily: "Archivo",
                  fontSize: "0.85rem",
                  fontStyle: "normal",
                  fontWeight: 400,
                  background: "#FFE9E9",
                  borderRadius: "10px",
                  width: "max-content",
                }}
              >
                {value.state}
              </p>
            </>
          )}
          <div>
            <button
              className="py-2 w-100 bg-transparent"
              style={{
                border: "1px solid #000",
                borderRadius: "5px",
                color: "#000",
                fontSize: "0.85rem",
                fontStyle: "normal",
                fontWeight: 400,
              }}
            >
              View Questions
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default CourseCard;