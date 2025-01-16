import React, { useState } from 'react'
import Styles from './App.module.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import { ThemeProvider } from '../ThemeProvider'
import Toggle from './components/Toggle/Toggle'

function App() {
  
  return (
<ThemeProvider>
    <div className={Styles.App}  >
      <Toggle />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
</ThemeProvider>
  )
}

export default App
