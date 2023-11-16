import React,{useState} from 'react';
import "./CreateMain.css"
import BottomButton from './BottomButton';
import SelectBoard from './SelectBoard';
import { RxCross1 } from 'react-icons/rx';
import ProgressBar from "@ramonak/react-progress-bar";
import SelectCourse from './SelectCourse';
import SelectTopic from './SelectTopic';
import CreateMcq from './CreateMcq';
import CreateShortQues from './CreateShortQues';
import CreateLongQues from './CreateLongQues';
import CreateFillUps from './CreateFillUps';
import Modal from 'react-bootstrap/Modal';
import CreateSections from './CreateSections';
import SetAndExam from './SetAndExam';
import FinalSemExam from './FinalSemExam';
import { useNavigate } from 'react-router-dom';

const CreateMain = () => {


  const Navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [progressState, setProgressState] = useState(1);

  const updateProgressState = () => {
    if (progressState < 10) {
      setProgressState((prevProgressState)=>prevProgressState+1)
    }
  };

    
  return (
    <>
        <div className='main' >
            <div style={{height:"20%"}} >
            <div className='container h-100'>
                <div className='row h-100 align-items-center' >
                    <div className='col-12' >
                        <div className='d-flex justify-content-between align-items-center' >
                            <h1 style={{ textAlign: "justify",fontSize:"2rem" }}>Create New <br></br>Question Paper</h1>
                            <h1 onClick={handleShow}><RxCross1 /></h1>
                        </div>
                    </div>

                    <div className='col-12'>
                        <ProgressBar
                            completed={progressState}
                            bgColor=" linear-gradient(89deg, #3774A5 0%, #2BA1FF 93.2%)"
                            height="10px"
                            isLabelVisible={false}
                            baseBgColor="#E4E9EC"
                            labelColor="#e80909"
                            animateOnRender
                            maxCompleted={10}
                        />
                        <p className='inc'>{progressState}/10</p>

                    </div>
                </div>

            </div>
            </div>
            <div style={{height:"60%",overflowY:"auto",}} >
                {progressState===1 && <SelectBoard/>}
                {progressState===2 && <SelectCourse/>}
                {progressState===3 && <SelectTopic/>}
                {progressState===4 && <CreateMcq/>}
                {progressState===5 && <CreateShortQues/>}
                {progressState===6 && <CreateLongQues/>}
                {progressState===7 && <CreateFillUps/>}
                {progressState===8 && <CreateSections/>}
                {progressState===9 && <SetAndExam/>}
                {progressState===10 && <FinalSemExam/>}
            </div>
            <div style={{height:"20%",}} >
              {
                progressState!==10?
                <>
                <BottomButton updateProgressState={updateProgressState} />
                </>:
                <>
                  <div className='container h-100' >
                <div className='row align-items-center justify-content-center  h-100' >
                    <div className='col-12'>  
                            <button onClick={()=>{Navigate('/CreatedSuccessfully')}} className='nextButtonClass w-100 p-3 mx-auto text-center' >Create Paper</button>
                    </div>

                </div>

            </div>
                </>
              }
                
            </div>

        </div>

        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
       <div className='outline' style={{display:"flex" ,height:"30vh",flexDirection:"column",justifyContent:"center"}}>
        <div >
        <div className=''>
         <h1 className='sets' style={{border:"0"}}>Stop Creating Paper</h1>
            <h1 className='action'>The action cannot be reversed</h1>
         </div>
           <div className='d-flex justify-content-center'>
           <button className='cancel ' onClick={handleClose}>Cancel</button>
          
           </div>
           <div className='d-flex justify-content-center mt-2'>
           <button className='ahead'  onClick={()=>{Navigate('/')}}>Process Ahead</button>
           </div>
        </div>
       </div>
      
        {/* <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer> */}
      </Modal>
    </>
  )
}

export default CreateMain
