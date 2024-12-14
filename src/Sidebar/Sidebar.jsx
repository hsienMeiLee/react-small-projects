import React from 'react';
import './Sidebar.css';
import Category from './Category/Category';
import Price from './Price/Price';
import Colors from './Colors/Colors';

function Sidebar({handleCategoryChange, handlePriceChange, handleColorChange}) {
  return (
    <>
    <section className="sidebar">
        <div className="logo-container">
            <h1>🛒</h1>
        </div>

        <Category handleChange={handleCategoryChange}/>
        <Price handleChange={handlePriceChange}/>
        <Colors handleChange={handleColorChange}/>
        
    </section>
    </>
  )
}

export default Sidebar;