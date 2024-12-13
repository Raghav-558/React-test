import React from 'react'
import Header from '../common/Header'

const Hero = () => {
  return (
    <div className='bg-hero bg-cover bg-center bg-no-repeat h-[1028px] max-lg:h-[1263px] max-lg:bg-center max-md:h-[930px] max-sm:h-[703px] overflow-hidden'>
      <Header />
      <div className='max-w-[1140px] mx-auto '>
        <div className='pt-[68px] max-sm:pt-[39px]'>
          <h1 className='font-bold text-custom-61 leading-[83.08px] text-white text-center max-w-[1072px] mx-auto max-lg:max-w-[753px] max-md:text-5xl max-md:leading-[65px] max-sm:text-3xl max-sm:leading-[40.86px] max-sm:max-w-[374px]'>
            Driving Transformation for Performance and Passion Within 
          </h1>
          <p className='font-normal text-custom-22 leading-[29.96px] text-center text-white pt-[15px] max-w-[960px] mx-auto max-lg:pt-[53px] max-lg:max-w-[420px] max-md:pt-6 max-md:text-xl max-sm:text-base max-sm:leading-[21.79px] max-sm:pt-[14px] max-sm:max-w-[310px]'>
            The future of electric mobility is here. TDK and NEOM McLaren
            Formula E
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
