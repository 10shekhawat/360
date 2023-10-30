import React from 'react'

const BottomButton = ({  updateProgressState }) => {
    const handleNextClick = () =>{
        updateProgressState();
    }
    return (
        <>
            <div className='container h-100' >
                <div className='row align-items-center justify-content-center  h-100' >
                    <div className='col-12' >
                            <button onClick={handleNextClick} className='nextButtonClass w-100 p-3 mx-auto text-center' >Next</button>
                    </div>

                </div>

            </div>
        </>
    )
}

export default BottomButton
