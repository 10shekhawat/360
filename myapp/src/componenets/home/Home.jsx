import React from 'react';
import Navbar from './Navbar';
import HomeData from './HomeData';


const Home = () => {
  return (
    <>
    <div style={{height:"100vh",width:"100vw"}} >
        <div style={{height:"8%"}} >
            <Navbar/>
        </div>
        <div style={{height:"84%",overflowY:"auto"}} >
            <HomeData/>
        </div>
    </div>
    </>
  )
}

export default Home
