import React from 'react';
import { useState } from 'react';
import '../style.css';
import { CiSearch } from "react-icons/ci";

const HiddenSearchBar = () => {
    const [showInput, setShowInput] = useState(false);
    const [bgColor, setBgcolor] = useState("white");
    const handleclick = (e) => {
        setBgcolor("#1a1a1a");
        if(e.target.classname === "container"){
            setShowInput(false);
            setBgcolor("white");
        }
    }
  return (
    <section className='container' style={{ backgroundColor : bgColor}} onClick={handleclick}>
        {showInput ? (
            <input type="text" placeholder='Search..' />
        ) : (
            <CiSearch onClick={()=>setShowInput(true)} />
        )}
    </section>
  )
}

export default HiddenSearchBar