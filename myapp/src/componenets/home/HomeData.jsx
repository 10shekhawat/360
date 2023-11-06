import React from 'react'
import { NavLink } from 'react-router-dom'
const data=[
  {
    heading:"Central Board of Secondary Education"
  },
  {
    heading:"Central Board of Secondary Education"
  },
  {
    heading:"Central Board of Secondary Education"
  },
]

const HomeData = () => {
  return (
    <>
      <div className='container mt-2' >
        <div className='row'>
          <div className='col-12'>
            <NavLink to='/CreatePaper' style={{ textDecoration: "none", color: "black" }}>
              <div>
                <div className='w-100 card border-0 p-2 ' style={{ backgroundColor: "#FAFFC3", borderRadius: "10px" }}>
                  <h1 className='homeCardHeading'>Create New<br />Question Paper </h1>

                  <div style={{ height: "5vh", width: "100%", display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{ backgroundColor: "#DEE94B", borderRadius: "70%", padding: "9px" }}></div>
                    <div style={{ backgroundColor: "#DEE94B", borderRadius: "70%", padding: "9px" }}></div>
                    <div style={{ backgroundColor: "#DEE94B", borderRadius: "70%", padding: "9px" }}></div>
                    <div style={{ backgroundColor: "#DEE94B", borderRadius: "70%", padding: "9px" }}></div>
                    <div style={{ backgroundColor: "#DEE94B", borderRadius: "70%", padding: "9px" }}></div>
                  </div>

                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='w-100 card mt-3 border-0 p-2' style={{ backgroundColor: "#EEFFDD",  borderRadius: "10px" }}>
              <h1 className='homeCardHeading'>Check my<br />Previous Papers </h1>
              <div style={{ height: "5vh", width: "100%", display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ backgroundColor: "#CDFFC5", borderRadius: "70%", padding: "9px" }}></div>
                <div style={{ backgroundColor: "#CDFFC5", borderRadius: "70%", padding: "9px" }}></div>
                <div style={{ backgroundColor: "#CDFFC5", borderRadius: "70%", padding: "9px" }}></div>
                <div style={{ backgroundColor: "#CDFFC5", borderRadius: "70%", padding: "9px" }}></div>
                <div style={{ backgroundColor: "#CDFFC5", borderRadius: "70%", padding: "9px" }}></div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className='container'>
      <div className='row'>
      <div className='col-12'>
      <h1 className='mt-2 homeDataMedium ' style={{}}>Mediums</h1>
      <div className='mt-2'>
      {
        data.map((value,index)=>(
          <>
          <div className='card p-1 text-center mt-2 py-3' style={{border:"1px solid #DFDFDF",borderRadius:"5px"}}>
<h1 className='mediumCardHeading mb-0 '>{value.heading}</h1>
          </div>
          </>
        ))
          
        
      }
      
      </div>
      </div>
      </div> 
      </div>

    </>
  )
}

export default HomeData
