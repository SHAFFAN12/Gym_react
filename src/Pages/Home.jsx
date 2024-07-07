import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from './components/Slider';
import HomeData from './components/HomeData'
import Aboutfacility from './components/Aboutfacility';
import Classessfacility from './components/Classessfacility';
import MeetourTrainers from './components/MeetourTrainers';
import Home1 from './components/Home1';
import ThreeScene from './components/ThreeScene';

function Home() {
  
  return (
    <div className='space-y-10 space-x-10'>
  <Slider/>
  <ThreeScene/>
  <Home1/>

{/* <HomeData/> */}
{/* <Aboutfacility  /> */}
{/* <Classessfacility/> */}
{/* <MeetourTrainers/> */}
    </div>
  );
}

export default Home;
