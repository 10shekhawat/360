import React, { useState } from 'react'
import Select from 'react-select';


const options = [
    { value: 'Central Board of Secondary Education', label: 'Central Board of Secondary Education' },
    { value: 'Rajasthan Board of Secondary Education', label: 'Rajasthan Board of Secondary Education' },
    { value: 'Punjab Board of Secondary Education', label: 'Punjab Board of Secondary Education' },
    { value: 'Uttarpradesh Board of Secondary Education', label: 'Uttarpradesh Board of Secondary Education' },
];

const SelectBoard = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>

                        <h1 className='createPaperHeading mt-3' >Select Board</h1>
                        <Select
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SelectBoard
