import React, { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Select from 'react-select';


const options = [
    { value: 'Central Board of Secondary Education', label: 'Central Board of Secondary Education' },
    { value: 'Rajasthan Board of Secondary Education', label: 'Rajasthan Board of Secondary Education' },
    { value: 'Punjab Board of Secondary Education', label: 'Punjab Board of Secondary Education' },
    { value: 'Uttarpradesh Board of Secondary Education', label: 'Uttarpradesh Board of Secondary Education' },
    { value: 'Uttarpradesh Board of Secondary Education', label: 'Uttarpradesh Board of Secondary Education' },
    { value: 'Uttarpradesh Board of Secondary Education', label: 'Uttarpradesh Board of Secondary Education' },
    { value: 'Uttarpradesh Board of Secondary Education', label: 'Uttarpradesh Board of Secondary Education' },
    { value: 'Uttarpradesh Board of Secondary Education', label: 'Uttarpradesh Board of Secondary Education' },
    { value: 'Uttarpradesh Board of Secondary Education', label: 'Uttarpradesh Board of Secondary Education' },
    { value: 'Uttarpradesh Board of Secondary Education', label: 'Uttarpradesh Board of Secondary Education' },
    { value: 'Uttarpradesh Board of Secondary Education', label: 'Uttarpradesh Board of Secondary Education' },
    { value: 'Uttarpradesh Board of Secondary Education', label: 'Uttarpradesh Board of Secondary Education' },
];
const CreateSections = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const data = [
    {
        section:"Section A",
        marks:'Marks:25',
        fill:'Fill in the blank',
        a54:'54',
        chemistry:"Chemistry",
        a12:'12',
        physics:'Physics',
        a55:'55',
        biology:'Biology',
        a14:'14'
},
    {
        section:"Section A",
        marks:'Marks:25',
        fill:'Fill in the blank',
        a54:'54',
        chemistry:"Chemistry",
        a12:'12',
        physics:'Physics',
        a55:'55',
        biology:'Biology',
        a14:'14'
},
    {
        section:"Section A",
        marks:'Marks:25',
        fill:'Fill in the blank',
        a54:'54',
        chemistry:"Chemistry",
        a12:'12',
        physics:'Physics',
        a55:'55',
        biology:'Biology',
        a14:'14'
},
    {
        section:"Section A",
        marks:'Marks:25',
        fill:'Fill in the blank',
        a54:'54',
        chemistry:"Chemistry",
        a12:'12',
        physics:'Physics',
        a55:'55',
        biology:'Biology',
        a14:'14'
},

]

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='row align-items-center'>
              <div className='col-8'>
                <div style={{ lineHeight: "0px" }}>
                  <h1 className='createPaperHeading'>Create Sections</h1>
                </div>
              </div>
              <div className='col-4'>
                <button onClick={handleShow} className='addbtn'>+Add</button>

              </div>
            </div>

           
       
            <div className='row' style={{height:"58vh", overflowY:"auto"}}>
                      <div className='col-12 pt-4' >
                      {
                        data.map((res,index)=>{
                          return(
                            <div className='card mt-3' >
                          <div className='card-body'>
                            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                            <h4>{res.section}</h4>
                            <h6>{res.marks}</h6>
                            </div>
                            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                            <h5 style={{fontWeight:'600',color:'#565656'}}>{res.fill}</h5>
                            <h6 style={{color:'#565656',fontWeight:"600"}}>{res.a54}</h6>
                            </div>
                            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                            <h7 style={{color:'#565656'}}>{res.chemistry}</h7>
                            <h6 style={{color:'#565656'}}>{res.a12}</h6>
                            </div>
                            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                            <h7 style={{color:'#565656'}}>{res.physics}</h7>
                            <h6 style={{color:'#565656'}}>{res.a55}</h6>
                            </div>
                            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                            <h7 style={{color:'#565656'}}>{res.biology}</h7>
                            <h6 style={{color:'#565656'}}>{res.a14}</h6>
                            </div>
                          </div>
                        </div>
                          )
                        })
                      }
                         
                      </div>
                      </div>
                      
      
          </div>
        </div>

      </div>
<Offcanvas className='border' show={show} onHide={handleClose} placement='bottom' style={{ height: "50%", }} backdrop="static">
        <Offcanvas.Header className='w-100  d-flex align-items-start justify-content-center'>
          <div onClick={handleClose} style={{ height: "2px", backgroundColor: "grey", width: "50px" }}></div>
        </Offcanvas.Header>

        <Offcanvas.Body>

          <div>
            <h4 className='sectionadd' style={{ textAlign: "center" }}>Add Section</h4>
          </div>

          <div className='section-name '>
         <div className='pt-3'>
         <input placeholder='Enter Section Name' type='text' className='w-100 p-3 ' style={{border: '1px solid #E5E5E5'}} ></input>
         </div>
           <div className='pt-5 pb-2'>
          
           <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              styles={{overflowY: "scroll",}}
              placeholder="Select Section Type"
          />
          


           </div>

          </div>
          <div className='mt-5 lastbtnoutline'>
            <button type='submit' onClick={handleClose} className='addsecbtn p-3' style={{width:"100%"}}>Add Section</button>
          </div>


        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default CreateSections
