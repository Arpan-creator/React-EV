import React from 'react'
import { useAppContext } from '../contexts/AppContext'
import './ThemeToggle.css';

const ThemeToggle = () => {
    const {theme, setTheme}=useAppContext();
    const toggleTheme=()=>{
        setTheme((prevTheme)=>(prevTheme=='light'?'dark':'light'));
    }
  return (
   <button onClick={toggleTheme}>
   Switch to {theme === 'light'?'dark':'Light'}Mode
   </button>
  )
}

export default ThemeToggle;