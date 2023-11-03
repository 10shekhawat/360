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

const CreateMain = () => {

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
            <div style={{height:"70%",overflowY:"auto",}} >
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
            <div style={{height:"10%",}} >
                <BottomButton updateProgressState={updateProgressState} />
            </div>

        </div>

        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Close
          </button>
          <button variant="primary">Understood</button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CreateMain
