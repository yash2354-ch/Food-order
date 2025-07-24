import React from 'react'
import './Header.css'
const Header = ({serachTerm,setSearchTerm}) => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your craving and elevate your dining experience, one delecious meal at a time.</p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header
