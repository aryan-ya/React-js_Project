import React from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StoreIcon from '@mui/icons-material/Store';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='header'>
        <Link to="/" style={{textDecoration: "none"}}>
        <div className='header_logo'>
    <StoreIcon className='header_logoImage' fontSize='large' />
    <h2 className='header_logoTitle'>eshop</h2>
   </div>

        </Link>
        
   <div className="header_search">
     <input type="text" className='header_searchInput'/>
     <SearchIcon className='header_searchIcon' />
   </div>

   <div className="header_nav">
     <div className="nav_item">
     <span className='nav_itemLineOne'>Hello Guest</span>
     <span className='nav_itemLineTwo'>Sign in </span>
     </div>
     <div className="nav_item">
     <span className='nav_itemLineOne'>Your</span>
     <span className='nav_itemLineTwo'>Shop </span>
     </div>
     <Link to="/checkout" style={{textDecoration: "none"}}>
     <div className="nav_item">
   <ShoppingBasketIcon fontSize='large' />
     <span className='nav_itemLineTwo'>0</span>
     </div>
     </Link>
   
   </div></div>
  )
}

export default Header