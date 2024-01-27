import React, {useState} from "react";

import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from "../../assets/logo.svg"

const Navbar = () => {
  const [toggleMenu, setToggleMenu ] = useState();
  return (
    <>
    <div className='gpt3__navbar'>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo"  />
          </div>    

          <div className="gpt3__navbar_links_container">
            <p><a href='#home'>Home</a></p>
            <p><a href='#wpt3'>What is GPT</a></p>
            <p><a href='#possiblite'>Open Ai</a></p>
            <p><a href='#features'>Case Studies</a></p>
            <p><a href='#blog'>Library</a></p>
         
          </div>
            </div>
      

      <div  className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
        ? <RiCloseLine color="#fff" size={27} onClick={()=> setToggleMenu(true)} /> 
        : <RiMenu3Line color="#fff" size={27} onClick={()=>  setToggleMenu(true)} /> 
        }
         {toggleMenu && (
        <div className="gpt3__navbar-menu_container"></div>


         ) }
      </div>
    </div>

    
    
    
    </>
  )
}

export default Navbar