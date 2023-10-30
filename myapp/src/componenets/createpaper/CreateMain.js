import React,{useState} from 'react';
import "./CreateMain.css"
import BottomButton from './BottomButton';
import SelectBoard from './SelectBoard';
import { RxCross1 } from 'react-icons/rx';
import ProgressBar from "@ramonak/react-progress-bar";
import SelectCourse from './SelectCourse';
import SelectTopic from './SelectTopic';

const CreateMain = () => {

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
                            <h1><RxCross1 /></h1>
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
            <div style={{height:"60%",overflowY:"auto"}} >
                {progressState===1 && <SelectBoard/>}
                {progressState===2 && <SelectCourse/>}
                {progressState===3 && <SelectTopic/>}
            </div>
            <div style={{height:"20%",}} >
                <BottomButton updateProgressState={updateProgressState} />
            </div>

        </div>
    </>
  )
}

export default CreateMain
