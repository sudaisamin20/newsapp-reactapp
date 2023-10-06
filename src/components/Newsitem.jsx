import React from 'react'
import { useTheme } from './ThemeContext'

const Newitem = (props) => {
  const { articles, category } = props
  const { theme } = useTheme()
  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1, word.lenght)
  }
  return (
    <div className={`pt-20 pb-6 ${theme === "light" ? "bg-white" : "bg-gradient-to-b from-gray-950 to-black"}`}>
      <div>
        <h1 className={`font-bold text-3xl text-center ${theme === "light" ? "text-black" : "text-white"} pb-7`}>{`Get News - Top ${capitalizeFirstLetter(category)} Headlines`}</h1>
        <div className='grid max-[599px]:grid-cols-1 min-[600px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-3'>
          {articles.map((e, i) => {
            return <div key={i} className={`rounded-md shadow-md ${theme === "dark" ? "shadow-white" : "shadow-black"} overflow-hidden ${theme === "light" ? "bg-white" : "bg-gradient-to-b from-gray-950 to-black"}`}>
              <div className='absolute z-10 bg-red-500 rounded-md px-1 flex justify-end'>
                <span className='text-white'>{e.source.name}</span>
              </div>
              <img src={e.urlToImage ? e.urlToImage : "https://www.reuters.com/resizer/bv163XLndq0LU7Tw-9B6JrZXK1A=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ZN7LA3W5GJD6HNTGVQEYLU4ANQ.JPG"} className='rounded-t-md hover:scale-105 duration-300 transition-all ease-in-out' alt="noImage" />
              <div className='text-white p-2'>
                <h1 className='text-2xl font-bold text text-yellow-400'>{e.title}</h1>
                <p className={`${theme === "dark" ? "text-white" : "text-black"}`}>{e.description ? e.description.slice(0, 80) + "..." : e.description}</p>
                <p className={`${theme === "light" ? "text-black" : "text-white"}`}><small>Published by {e.author ? e.author : "Unknown"} on {new Date(e.publishedAt).toGMTString()}</small></p>
                <small className={`${theme === "light" ? "text-black" : "text-white"} block`}>Watch/Read details of this news by clicking the Read More button</small>
                <button className={`p-2 hover:bg-gray-900 duration-300 ease-in-out mt-4 border border-white rounded-md ${theme === "light" ? "bg-gray-700" : ""}`}><a href={e.url} target='_blank' rel='noreferrer'>Read More</a></button>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Newitem
