import React, { useState } from 'react'
import Styles from './App.module.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import { ThemeProvider } from '../ThemeProvider'

import Particles from './components/Particles/Particles '


import PixelCard from './components/Pixel/PixelCard'

function App() {

  return (
    <ThemeProvider>
      <div className={Styles.App}   >


      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact /> 

      import Particles from './Particles';



      
      </div>
    </ThemeProvider>
    )
}
export default App
