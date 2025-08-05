import React from 'react'
import { CiPhone } from 'react-icons/ci'
import { CiMail } from 'react-icons/ci'
import { FaGithub } from "react-icons/fa"
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='h-full w-full text-white p-5' style={{ backgroundColor: "rgb(45, 162, 175)" }}>
      <div className='grid grid-cols-2 m-6 place-items-center'>
        <div className=''>
          <h1 className='text-3xl font-bold'>Get News</h1>
          <p className='pt-1'>
            This website is developed using <a href="http://newsapi.org/" className='transition-all hover:text-blue-200' target="_blank" rel="noopener noreferrer">News API</a>. <a href="http://newsapi.org/" className='transition-all hover:text-blue-200' target="_blank" rel="noopener noreferrer">News API</a> is a web news app which provide news and also provide access or api for developers to develope its own news web app.
          </p>
        </div>
        <div>
          <h1 className='text-lg font-bold'>Contact Sudais Amin</h1>
          <div className='inline-flex flex-col'>
            <p className='flex items-center transition-all hover:text-blue-200'>
              <CiMail /><a href="mailto:sudaisamin126@gmail.com" className=
                'pl-1'>Gmail</a>
            </p>
            <p className='flex items-center transition-all hover:text-blue-200'>
              <CiPhone /><a href="tel:+92309-8908126" className='pl-1'>Mobile Number</a>
            </p>
            <p className='flex items-center transition-all hover:text-blue-200'>
              <FaGithub /><a href="http://www.github.com/sudaisamin20" className='pl-1' target="_blank" rel="noopener noreferrer">GitHub</a>
            </p>
            <p className='flex items-center transition-all hover:text-blue-200'>
              <BsFillPersonLinesFill /><a href="http://sudaisamin-portfolio.netlify.app" className='pl-1' target="_blank" rel="noopener noreferrer">Personal Portfolio</a>
            </p>
          </div>
        </div>
      </div>
      <div className='text-center font-bold m-3'>
        <h1>@Copyright to Get News. All Rights Reserved.</h1>
        <h1>Developed by Sudais Amin</h1>
      </div>
    </div>
  )
}

export default Footer
