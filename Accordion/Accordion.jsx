import React from 'react';
import { useState } from 'react';
import "../style.css";

const Accordion = ({title, content}) => {
    const [isActive, setisActive] = useState(false);
  return (
    <section className="accordion-card" key={Math.random()}>
        <div className="header" onClick={() => setisActive(!isActive)}>
            <div>{title}</div>
            <p className="icon">
                {isActive? '-' : '+'}
            </p>
        </div>

        <div className="content">
            {isActive && <p className='card-info'>{content}</p>}
        </div>
    </section>
  )
}

export default Accordion