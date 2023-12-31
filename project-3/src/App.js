import React from 'react'
import {Footer , Blog, Possiblity, Features , WhatGPT3 , Header} from  './container';
import {CTA , Brand , Navbar} from "./components";
import "./App.css";


const App = () => {
  return (
    <div className="app">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possiblity />
      <CTA />
      <Blog />
      <Footer />
    </div>
   
  )
}

export default App