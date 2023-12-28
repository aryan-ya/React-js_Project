import React from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StoreIcon from '@mui/icons-material/Store';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
const Header = () => {
  const [{basket} , dispatch] = useStateValue();
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
        <Link to="/login" style={{ textDecoration:"none" }}>
          <div className="nav_item">
            <span className="nav__itemLineOne">Hello Guest</span>
            <span className="nav__itemLineTwo">Sign In</span>
          </div>
        </Link>
        <div className="nav_item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav_itemBasket">
            <ShoppingBasketIcon/>
            <span className="nav_itemLineTwo nav__basketCount">{basket.length}</span>
          </div>
        </Link>
      </div>
   
   </div>
  )
}

export default Header