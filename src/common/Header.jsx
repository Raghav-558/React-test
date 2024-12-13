import React, { useState, useEffect } from 'react'
import { HEADER_LIST } from '../utils/helper'
import { SearchIcon } from '../utils/icon'

const Header = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleOverflow = () => {
      if (open && window.innerWidth < 1025) {
        document.body.classList.add('overflow-hidden')
      } else {
        document.body.classList.remove('overflow-hidden')
      }
    }
    handleOverflow()
    window.addEventListener('resize', handleOverflow)
    return () => {
      window.removeEventListener('resize', handleOverflow)
    }
  }, [open])

  return (
    <section className='bg-dark-blue '>
      <div className='pl-3.5 max-md:hidden bg-deep-blue' >
        <div className='flex items-center justify-between max-w-[1215px] mx-auto'>
          <img
            className='max-w-[115px] max-h-6 max-md:max-w-20'
            src='./assets/images/webp/tdk-logo.webp'
            alt='logo'
          />
          <img
            className='max-w-[427px]'
            src='./assets/images/webp/language-image.webp'
            alt='logo'
          />
        </div>
      </div>
      <div className='max-w-[1215px] mx-auto px-4'>
        <div className='flex items-center justify-between pt-11 pb-[22px]'>
          <ul className='flex items-center gap-6 max-md:hidden'>
            {HEADER_LIST.map((obj, i) => (
              <li key={i}>
                <a
                  href={obj.link}
                  className='text-white text-custom-13 leading-[15px] relative flex after:absolute after:w-0 after:transition-all after:duration-300 after:hover:w-full after:bottom-1 after:h-[0.2px] after:bg-white pb-0.5'
                >
                  {obj.title}
                </a>
              </li>
            ))}
          </ul>
          <form className='border border-white rounded-[5px] max-w-[257px] flex items-center justify-between overflow-hidden max-md:hidden pr-3 py-2'>
            <input
              type='text'
              name='search'
              id='search'
              placeholder='Search by Keyword'
              className='text-white text-[13px] leading-[15px] pl-[14px] outline-none bg-transparent'
            />
            <button type='submit'>
              <SearchIcon />
            </button>
          </form>
          <div className='md:hidden'>
            <img
              src='./assets/images/webp/tdk-logo.webp'
              alt='page-logo'
              className='w-[120px] h-[36px] max-sm:w-[100px] max-sm:h-[28px]'
            />
          </div>
          <div
            className={`md:hidden z-30 cursor-pointer`}
            onClick={() => setOpen(!open)}
          >
            <div className={`flex flex-col gap-[4px] items-center`}>
              <div
                className={`h-[2px] bg-white w-5 transition-all duration-300 ${
                  open ? 'transform rotate-45 translate-y-[6px]' : ''
                } `}
              ></div>
              <div
                className={`h-[2px] bg-white w-5 transition-all duration-300 ${
                  open ? 'opacity-0' : ''
                } `}
              ></div>
              <div
                className={`h-[2px] bg-white w-5 transition-all duration-300 ${
                  open ? 'transform -rotate-45 -translate-y-[6px]' : ''
                } `}
              ></div>
              <p className='text-white text-xs text-center '>MENU</p>
            </div>
          </div>
          <div
            className={`w-full h-full transition-all duration-500 left-0 md:-top-full z-20 fixed flex flex-col bg-dark-blue justify-center items-center ${
              open ? 'top-0 left-0' : '-top-full'
            }`}
          >
            <ul className='flex items-center flex-col gap-6'>
              {HEADER_LIST.map((obj, i) => (
                <li key={i}>
                  <a
                    href={obj.link}
                    onClick={() => setOpen(false)}
                    className='text-white text-[13px] leading-[15px]'
                  >
                    {obj.title}
                  </a>
                </li>
              ))}
              <form className='max-w-[257px] border border-white rounded-[5px] flex items-center justify-between overflow-hidden pr-3 py-2'>
                <input
                  type='text'
                  name='search'
                  id='search'
                  placeholder='Search by Keyword'
                  className='text-white text-[13px] leading-[15px] pl-[14px] outline-none bg-transparent'
                />
                <button type='submit' onClick={() => setOpen(false)}>
                  <SearchIcon />
                </button>
              </form>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
