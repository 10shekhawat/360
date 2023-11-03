import React from 'react'
import { NavLink } from 'react-router-dom'

const HomeData = () => {
  return (
    <>
    <NavLink to='/CreatePaper' >
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
    <div className='w-100 card1 ' style={{ backgroundColor: "#FAFFC3", padding: "1rem", borderRadius: "20px" }}>
        <h1 style={{ fontWeight: "500", fontSize: "30px" }}>Create New </h1>
        <h1 style={{ fontWeight: "500", fontSize: "30px" }}>Question Paper</h1>
        <div style={{ height: "5vh", width: "100%", display: "flex", padding: "1rem", alignItems: "center", gap: "8px" }}>
            <div style={{ backgroundColor: "#DEE94B", borderRadius: "70%", padding: "9px" }}></div>
            <div style={{ backgroundColor: "#DEE94B", borderRadius: "70%", padding: "9px" }}></div>
            <div style={{ backgroundColor: "#DEE94B", borderRadius: "70%", padding: "9px" }}></div>
            <div style={{ backgroundColor: "#DEE94B", borderRadius: "70%", padding: "9px" }}></div>
            <div style={{ backgroundColor: "#DEE94B", borderRadius: "70%", padding: "9px" }}></div>
        </div>

    </div>
</div>
</NavLink>

<div className='w-100 card2' style={{ backgroundColor: "#EEFFDD", padding: "1rem", borderRadius: "20px" }}>
<h1 style={{ fontWeight: "500", fontSize: "30px" }}>Check my </h1>
<h1 style={{ fontWeight: "500", fontSize: "30px" }}>Previous Papers</h1>
<div style={{ height: "5vh", width: "100%", display: "flex", padding: "1rem", alignItems: "center", gap: "8px" }}>
    <div style={{ backgroundColor: "#CDFFC5", borderRadius: "70%", padding: "9px" }}></div>
    <div style={{ backgroundColor: "#CDFFC5", borderRadius: "70%", padding: "9px" }}></div>
    <div style={{ backgroundColor: "#CDFFC5", borderRadius: "70%", padding: "9px" }}></div>
    <div style={{ backgroundColor: "#CDFFC5", borderRadius: "70%", padding: "9px" }}></div>
    <div style={{ backgroundColor: "#CDFFC5", borderRadius: "70%", padding: "9px" }}></div>
</div>
</div>

    </>
  )
}

export default HomeData
