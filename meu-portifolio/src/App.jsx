import React,{ useState } from 'react'
import Styles from './App.module.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'

function App() {
  
  return (
    
 <div className={Styles.App}>
  <Navbar/>
  <Hero />
 </div>
    
  )
}

export default App
