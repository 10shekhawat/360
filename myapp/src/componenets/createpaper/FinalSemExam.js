import React from 'react'

const FinalSemExam = () => {
    let name = "Chemistry"
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div>
                            <h1 className='head'>Preview</h1>
                            <p className='nop'>Name of paper</p>
                            <h1 className='head' style={{ fontWeight: "600" }}>{name} Final Sem Of Examination </h1>
                        </div>


                    </div>
                    <div style={{ height: "40vh", borderTop: "1px solid #565656", marginTop: "10px" }}>
                   <div className='row'>
                        <div className='col-12'>
                            <h1 className='tc'>Topic & Composition</h1>
                            
                    </div>
                   </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default FinalSemExam
