import React from 'react'
import Feature from "./components/feature/Feature.jsx";
import Article from "./components/article/Article.jsx"
import Brand from "./components/brand/Brand.jsx"
import CTA from "./components/cta/CTA.jsx"
import Navbar from "./components/navbar/Navbar.jsx"



const App = () => {
  return (
    <div>
      <Article />
      <Brand />
      <CTA />
      <Navbar />
      <Feature />
    </div>
  )
}

export default App