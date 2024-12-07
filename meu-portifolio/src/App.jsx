import React,{ useState } from 'react'
import Styles from './App.module.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience' 
import Projects from "./components/Projects/Projects"

function App() {
  
  return (
    
 <div className={Styles.App}>
  <Navbar/>
  <Hero />
  <About />
  <Experience/>
  <Projects />
  

 </div>
    
  )
}

export default App
