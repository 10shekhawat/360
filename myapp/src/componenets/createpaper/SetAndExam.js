import React, { useState } from 'react'
import Select from 'react-select';
const options = [
    { value: '10', label: '10' },
    { value: '20', label: '20' },
    { value: '10', label: '10' },
    { value: '20', label: '20' },
    { value: '10', label: '10' },
    { value: '20', label: '20' },

];
const SetAndExam = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='p-3'>
                            <h1 className='head'>Numbers of sets required</h1>
                            <div className='pt-3'>
                                <input placeholder='Enter Number of Sets Required' type='text' className='w-100 p-3 ' style={{ border: '1px solid #E5E5E5' }} ></input>
                            </div>

                            <div className='pt-5'>
                                <h1 className='head'>Name of Exam</h1>
                                <div className='pt-3'>
                                    <input placeholder='Enter the name of Exam' type='text' className='w-100 p-3 ' style={{ border: '1px solid #E5E5E5' }} ></input>
                                </div>
                            </div>
                            <div className='pt-5'>
                                <h1 className='head'>Duration of Exam</h1>
                                <div className='pt-3'>

                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='col-12' style={{ display: "flex", gap: "1rem" }}>
                                <div>
                                    <div style={{ width: "30%", display: "flex" }}>
                                        <button onClick={handleDecrement} className='min-plusbtn'>-</button>
                                        <p className='min-plusbtn' style={{ color: "#1174C3" }}>{count}</p>
                                        <button onClick={handleIncrement} className='min-plusbtn'>+</button>
                                    </div>
                                </div>
                                <div>
                                    <Select
                                        defaultValue={selectedOption}
                                        onChange={setSelectedOption}
                                        options={options}
                                        styles={{ overflowY: "scroll", }}
                                        placeholder="Minutes"
                                    />
                                </div>

                            </div>
                        </div>
                        <div className='pt-5'>
                                <h1 className='head'>Enter Instructions</h1>
                                <div class="form-floating">
  <textarea class="w-100 p-2" rows={10} placeholder="Enter the Instructions of Exam, use # to add a line break" id="floatingTextarea"></textarea>
  {/* <label for="floatingTextarea">Comments</label> */}
</div>
                            </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SetAndExam
