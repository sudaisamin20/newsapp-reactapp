import React from 'react'
import loading from './loading.gif'
import { useTheme } from './ThemeContext'

const Spinner = () => {
  const { theme } = useTheme()
  return (
    <div className={`flex justify-center pt-10 ${theme === "light" ? "bg-white" : "bg-black"} `}>
      <img src={loading} alt="noImage" />
    </div>
  )
}

export default Spinner
