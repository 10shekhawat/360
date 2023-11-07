import React from 'react'

const New = () => {
  return (
    <div>
     <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div>
                  <h1 className='nop'>Name of Paper</h1>
                  <h1 className='head' style={{ fontWeight: "600" }}>{name} Final Sem Of Examination </h1>
                  <div style={{}}>
                    <div className='row' style={{marginTop:"50px", overflowY:"auto"}}>
                     <div>
                     <div style={{display:"flex",justifyContent:"space-between",alignContent:"center" }}>
                      <h1 className='tq'>Total Questions</h1>
                      <h1 className='tq'>90</h1>
                     </div>
                   
                     <div style={{display:"flex",justifyContent:"space-between",alignContent:"center" }}>
                      <h1 className='tc'>Total Marks</h1>
                      <h1 className='tc'>90</h1>
                     </div>
                     </div>
                     <hr className='hr'></hr>
                     <div>
                     <div style={{display:"flex",justifyContent:"space-between",alignContent:"center", padding:"10px"}}>
                      <h1 className='tq'>Sections</h1>
                      <h1 className='tq'>90</h1>
                     </div>
                   
                     </div>
                     <hr className='hr'></hr>
                     <div>
                     <div style={{display:"flex",justifyContent:"space-between",alignContent:"center",padding:"10px" }}>
                      <h1 className='tq'>Sets</h1>
                      <h1 className='tq'>90</h1>
                     </div>
                   
                     </div>
                     <hr className='hr'></hr>
                    </div>
                 </div>
                </div>
              </div>
            </div>
          </div> 
    </div>
  )
}

export default New
