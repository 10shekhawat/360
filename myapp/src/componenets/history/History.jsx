import React from 'react'
import Navbar from '../home/Navbar'
import Bottom from '../home/Bottom'
import HistoryData from './HistoryData'

const History = () => {
  return (
    <>
    <div style={{height:"100vh",width:"100vw"}} >
    <div style={{height:"8%"}} >
        <Navbar/>
    </div>
    <div style={{height:"84%",overflowY:"auto"}} >
    <HistoryData/>   
    </div>
    <div style={{height:"8%" }}>
    <Bottom/>
    </div>
</div>
    </>
  )
}

export default History
