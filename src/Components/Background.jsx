import React from 'react'

const Background = () => {
  return (
    <>
    <div className='fixed z-[2] w-full h-screen'>
    <div className='absolute w-full py-10 top-[3%] text-zinc-600 text-xl flex justify-center'>Documents</div>
      
        <h1 className='absolute text-[13vw] font-semibold top-1/2 left-1/2 
        -translate-x-[50%] -translate-y-[50%] text-zinc-900 tracking-tighter'>Docs.</h1>
      
    </div>
    </>
    
  )
}

export default Background;
