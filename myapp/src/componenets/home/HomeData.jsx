import React from 'react'
import { useNavigate } from 'react-router-dom'
const data=[
  {
    heading:"Central Board of Secondary Education"
  },
  {
    heading:"Central Board of Secondary Education"
  },
  {
    heading:"Central Board of Secondary Education"
  },
]

const HomeData = () => {
  const Navigate=useNavigate()
  return (
    <>
    <div className="container">
    <div className="row row-gap-4 mt-3">
      <div
        className="col-12"
        onClick={() => {
          Navigate("/CreatePaper");
        }}
      >
        <div className="card bannerCard1 position-relative">
          <h1>
            Create New <br /> Question Paper
          </h1>
          <div className="d-flex align-items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle cx="8" cy="8" r="8" fill="#DEE94B" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle cx="8" cy="8" r="8" fill="#DEE94B" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle cx="8" cy="8" r="8" fill="#DEE94B" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle cx="8" cy="8" r="8" fill="#DEE94B" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle cx="8" cy="8" r="8" fill="#DEE94B" />
            </svg>
          </div>
          <div
            className=""
            style={{ position: "absolute", right: "5%", bottom: "0" }}
          >
            <div>
              <svg
                style={{ float: "right" }}
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="55"
                viewBox="0 0 42 55"
                fill="none"
              >
                <path
                  d="M40.8068 27.2352L34.6503 27.0476L35.4386 7.00485L15.3958 6.21652L15.6924 0.0642221L41.8351 1.09248L40.8068 27.2352ZM13.2931 61.0639L4.92159 52.0069C2.02645 48.8747 0.66245 45.1838 0.829601 40.9342C0.996751 36.6845 2.64638 33.1136 5.77847 30.2213L19.7602 17.2978L4.07457 16.6809L4.37111 10.5286L30.5138 11.5568L29.4856 37.6996L23.329 37.512L23.946 21.8263L9.96422 34.7498C8.07734 36.4939 7.08392 38.6367 6.98395 41.1784C6.88398 43.7201 7.70603 45.9343 9.45009 47.8212L17.8216 56.8782L13.2931 61.0639Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="card bannerCard2 position-relative">
          <h1>
            Check My <br /> Previous Papers
          </h1>

          <div className="d-flex align-items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle cx="8" cy="8" r="8" fill="#CDFFC5" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle cx="8" cy="8" r="8" fill="#CDFFC5" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle cx="8" cy="8" r="8" fill="#CDFFC5" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle cx="8" cy="8" r="8" fill="#CDFFC5" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle cx="8" cy="8" r="8" fill="#CDFFC5" />
            </svg>
          </div>
          <div
            className=""
            style={{ position: "absolute", right: "5%", bottom: "0" }}
          >
            <svg
              style={{ float: "right" }}
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="55"
              viewBox="0 0 42 55"
              fill="none"
            >
              <path
                d="M40.8068 27.2352L34.6503 27.0476L35.4386 7.00485L15.3958 6.21652L15.6924 0.0642221L41.8351 1.09248L40.8068 27.2352ZM13.2931 61.0639L4.92159 52.0069C2.02645 48.8747 0.66245 45.1838 0.829601 40.9342C0.996751 36.6845 2.64638 33.1136 5.77847 30.2213L19.7602 17.2978L4.07457 16.6809L4.37111 10.5286L30.5138 11.5568L29.4856 37.6996L23.329 37.512L23.946 21.8263L9.96422 34.7498C8.07734 36.4939 7.08392 38.6367 6.98395 41.1784C6.88398 43.7201 7.70603 45.9343 9.45009 47.8212L17.8216 56.8782L13.2931 61.0639Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>

      <div className='container'>
      <div className='row'>
      <div className='col-12'>
      <h1 className='mt-2 homeDataMedium ' style={{}}>Mediums</h1>
      <div className='mt-2'>
      {
        data.map((value,index)=>(
          <>
          <div className='card p-1 text-center mt-2 py-3' style={{border:"1px solid #DFDFDF",borderRadius:"5px"}}>
<h1 className='mediumCardHeading mb-0 '>{value.heading}</h1>
          </div>
          </>
        ))
          
        
      }
      
      </div>
      </div>
      </div> 
      </div>

    </>
  )
}

export default HomeData
