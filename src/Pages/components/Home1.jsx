import React from 'react'
import avatar from './assets/Kerfin7_NEA_2543-removebg-preview.png'
import product1 from "../components/assets/product 1.png";
import product2 from "../components/assets/product 2.png";
import product3 from "../components/assets/product 3.png";
import product4 from "../components/assets/product 4.png";
const Home1 = () => {
  return (
  <>
  <div className='flex text-center justify-between items-center px-[20rem]'>
        <div className='text-2xl bg-white drop-shadow-2xl border-red-500  border-4 p-5 italic rounded-lg '><q>WANT TO GET FIT? <br></br> SO LETS GO!</q></div>
<div><img src={avatar} className='drop-shadow-2xl h-[30rem] ' /> 
</div>

</div>

<div className='grid grid-cols-4 gap-4 px-[10rem]' >
<div><img src={product1} alt=""/></div>
<div><img src={product2} alt=""/></div>
<div><img src={product3} alt=""/></div>
<div><img src={product4} alt=""/></div>

    </div>
    </>
  )
}

export default Home1