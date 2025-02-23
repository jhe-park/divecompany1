import React from 'react'
import ResortCarousel from './ResortCarousel'


export default function Resort() {
  return (
    <div className=" w-full  h-[40vh] md:h-[540px] flex flex-col justify-center items-start gap-y-5 px-[2vw] py-[3vw]">
      <div className='flex  gap-x-5 justify-center md:justify-start items-center w-full'>
        <p className='text-2xl md:text-[36px] font-bold'>BADIVE 협력 리조트</p>
      </div>
      <ResortCarousel></ResortCarousel>

    </div>  )
}
