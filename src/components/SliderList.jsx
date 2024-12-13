import React from 'react'
import Slider from 'react-slick'
import { REACT_SLIDER_LIST } from '../utils/helper'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const SliderList = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    arrows:false,
    autoplaySpeed: 3000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          dots: true
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          dots: true,
          centerMode: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true,
          centerMode: true
        }
      }
    ]
  }

  return (
    <div className='max-w-[1215px] px-4 mx-auto py-20 max-lg:py-[60px]'>
      <Slider {...settings}>
        {REACT_SLIDER_LIST.map((obj, i) => (
          <div key={i} className='p-6 border border-black rounded max-sm:p-3'>
            <h2 className='text-3xl font-semibold pb-2 max-sm:text-2xl max-sm:pb-1'>
              {obj.title}
            </h2>
            <p className='text-base font-medium max-sm:font-normal text-black'>
              {obj.description}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SliderList
