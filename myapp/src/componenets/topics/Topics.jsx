import React from 'react'
import Navbar from '../home/Navbar'
import TopicsData from './TopicsData'
import Bottom from '../home/Bottom'

const Topics = () => {
  return (
    <>
    <div style={{height:"100vh",width:"100vw"}} >
    <div style={{height:"8%"}} >
        <Navbar/>
    </div>
    <div style={{height:"84%",overflowY:"auto"}} >
        <TopicsData/>
    </div>
    <div style={{height:"8%" }}>
    <Bottom/>
    </div>
</div>
    </>
  )
}

export default Topics
