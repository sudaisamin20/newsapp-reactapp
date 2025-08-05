import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa6'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaMoon } from 'react-icons/fa6'
import { useTheme } from './ThemeContext'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    // eslint-disable-next-line
    const { theme, toggleTheme } = useTheme()
    const categories = [
        {
            id: 1,
            category: "business"
        },
        {
            id: 2,
            category: "general"
        },
        {
            id: 3,
            category: "health"
        },
        {
            id: 4,
            category: "entertainment"
        },
        {
            id: 5,
            category: "science"
        },
        {
            id: 6,
            category: "sports"
        },
        {
            id: 7,
            category: "technology"
        },
    ]
    const capitalizeFirstLetter = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1, word.lenght)
    }
    return (
        <div className={`flex items-center justify-between h-16 px-3 bg-black bg-opacity-70 text-white fixed ${theme === "light" ? "bg-opacity-50" : "bg-opacity-20"} backdrop-blur-sm w-full z-20`}>
            <div>
                <div className='text-3xl max-[400px]:text-2xl max-[210px]:text-[17px] font-bold relative z-20'>Get News</div>
            </div>
            <ul className='lg:flex hidden largeDevice'>
                <FaMoon size={25} className='cursor-pointer' onClick={toggleTheme} />
                {categories.map((e) => {
                    return <li key={e.id} className='px-5'><Link to={e.category}>{capitalizeFirstLetter(e.category)}</Link></li>
                })}
            </ul>
            <div className='lg:hidden z-10 flex'>
                <FaMoon size={25} className='cursor-pointer h-6 w-7 max-[210px]:h-4 max-[210px]:w-4' onClick={toggleTheme} />
                <div className='cursor-pointer pl-4' onClick={() => { setNav(!nav) }}>
                    {nav ? <FaTimes className='h-6 w-7 max-[210px]:h-4 max-[210px]:w-4 ' /> : <FaBars className='h-6 w-7 max-[210px]:h-4 max-[210px]:w-4 ' />}
                </div>
            </div>
            {nav &&
                <ul className={`flex flex-col pt-4 absolute h-screen w-full justify-center items-center top-0 left-0 ${theme === "light" ? "bg-black bg-opacity-90" : "bg-gradient-to-b from-gray-950 to-black"} text-white font-bold text-3xl`}>
                    {/* <li className='py-4'><Link to="/About">About</Link></li> */}
                    {categories.map((e) => {
                        return <li key={e.id} className='py-4' onClick={() => setNav(!nav)}><Link to={e.category}>{capitalizeFirstLetter(e.category)}</Link></li>
                    })}
                </ul>
            }
        </div>
    )
}

export default Navbar
/* <li className='px-5'><Link to="/about">About</Link></li> */