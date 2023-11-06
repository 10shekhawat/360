import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
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
  const Navigate=useNavigate()
  return (
    <>
    <div className="container">
    <div className="row row-gap-4 mt-3">

      <div className="col-12" onClick={()=>{Navigate('/CreatePaper')}} >
        <div className="card bannerCard1" >
            <h1>Create New <br/> Question Paper</h1>
        </div>
      </div>
      <div className="col-12" >
        <div className="card bannerCard2" >
            <h1>Check My <br/> Previous Papers</h1>
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
