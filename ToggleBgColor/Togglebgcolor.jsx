import React from 'react';
import { useState } from 'react';
import "../style.css";

const Togglebgcolor = () => {
    const [bgcolor, setBgcolor] = useState("white");
    const [textcolor, setTextcolor] = useState("#1b1b1b");
    const [buttonStyle, setButtonStyle] = useState("white");

    const handleclick = () => {
        setBgcolor(bgcolor == "white" ? "#1b1b1b" : "white")
        setTextcolor(textcolor == '#1b1b1b' ? "white" : "#1b1b1b")
    }
  return (
    <div style={{ backgroundColor : bgcolor, color : textcolor}}>
        <button onClick={handleclick} style={{buttonStyle, color : textcolor, border:`2px solid ${textcolor}` }}>
            {bgcolor == '#1b1b1b' ? "Black Theme" : "Whtie Theme"}
        </button>

        <section className='content'>
            <h1>Welcome to A <br />
            Real world...</h1>
        </section>
    </div>
  )
}

export default Togglebgcolor