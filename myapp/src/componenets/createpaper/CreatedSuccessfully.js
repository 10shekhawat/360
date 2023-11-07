import React from 'react'

const CreatedSuccessfully = () => {
  const data = [
    {
      name: 'Name of Paper',
      totalQuestions: 90,
      totalMarks: 90,
      sections: 4,
      sets: 3,
    },
   
    // Add more data objects as needed
  ];
  let name = "Chemistry"
  return (
    <>
      <div className='contain'>
        <div className='upperdiv'>
          <div className='d-flex h-100 flex-column justify-content-center align-items-center' >
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                <path d="M53.6668 28L47.9735 21.49L48.7668 12.88L40.3435 10.9667L35.9335 3.5L28.0002 6.90667L20.0668 3.5L15.6568 10.9433L7.2335 12.8333L8.02683 21.4667L2.3335 28L8.02683 34.51L7.2335 43.1433L15.6568 45.0567L20.0668 52.5L28.0002 49.07L35.9335 52.4767L40.3435 45.0333L48.7668 43.12L47.9735 34.51L53.6668 28ZM21.8868 37.3567L16.3335 31.7567C16.1172 31.5408 15.9456 31.2844 15.8285 31.0021C15.7114 30.7199 15.6511 30.4173 15.6511 30.1117C15.6511 29.8061 15.7114 29.5035 15.8285 29.2212C15.9456 28.9389 16.1172 28.6825 16.3335 28.4667L16.4968 28.3033C17.4068 27.3933 18.9002 27.3933 19.8102 28.3033L23.5668 32.0833L35.5835 20.0433C36.4935 19.1333 37.9868 19.1333 38.8968 20.0433L39.0602 20.2067C39.9702 21.1167 39.9702 22.5867 39.0602 23.4967L25.2468 37.3567C24.2902 38.2667 22.8202 38.2667 21.8868 37.3567Z" fill="white" />
              </svg>
            </div>
            <h1 className='pcs'>Paper Created <br></br> Successfully</h1>
          </div>
        </div>
        <div className='total  p-3'>
        <div>
      {data.map((paper, index) => (
        <div key={index} className='container'>
          <div className='row'>
            <div className='col-12'>
              <div>
                <h1 className='nop'>{paper.name}</h1>
                <h1 className='head' style={{ fontWeight: "600" }}>
                  {paper.name} Final Sem Of Examination
                </h1>
                <div style={{}}>
                  <div className='row' style={{ marginTop: "50px", overflowY: "auto" }}>
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignContent: "center" }}>
                        <h1 className='tq'>Total Questions</h1>
                        <h1 className='tq'>{paper.totalQuestions}</h1>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignContent: "center" }}>
                        <h1 className='tc'>Total Marks</h1>
                        <h1 className='tc'>{paper.totalMarks}</h1>
                      </div>
                    </div>
                    <hr className='hr'></hr>
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignContent: "center", padding: "10px" }}>
                        <h1 className='tq'>Sections</h1>
                        <h1 className='tq'>{paper.sections}</h1>
                      </div>
                    </div>
                    <hr className='hr'></hr>
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignContent: "center", padding: "10px" }}>
                        <h1 className='tq'>Sets</h1>
                        <h1 className='tq'>{paper.sets}</h1>
                      </div>
                    </div>
                    <hr className='hr'></hr>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
        </div>

        <div style={{ height: "15%",background:"#fff"}} >
          <div className='container h-100' >
            <div className='row align-items-center justify-content-center h-100' >
              <div className='col-12'>
                <button className='nextButtonClass w-100 p-3 mx-auto text-center' >View Paper Details</button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default CreatedSuccessfully
