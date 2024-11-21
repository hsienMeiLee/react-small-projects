import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import '../style1.css';

const Calculator1 = () => {
    const [inputValue, setInputValue] = useState("");
    const display = (val) => setInputValue(inputValue + val);
    const calculate = () => setInputValue(eval(inputValue));
    const clear = () => setInputValue("");

  return (
    <div className="container">
      <form className='calculator'>
        <input type="text" className='value' value={inputValue} />
        <span className="num clear" onClick={()=>clear()}>
          C
        </span>
        <span onClick={()=>display('*')}>*</span>
        <span onClick={()=>display('/')}>/</span>
        <span onClick={()=>display('7')}>7</span>
        <span onClick={()=>display('8')}>8</span>
        <span onClick={()=>display('9')}>9</span>
        <span onClick={()=>display('-')}>-</span>
        <span onClick={()=>display('4')}>4</span>
        <span onClick={()=>display('5')}>5</span>
        <span onClick={()=>display('6')}>6</span>
        <span className="plus" onClick={() => display('+')}>+</span>
        <span onClick={()=>display('1')}>1</span>
        <span onClick={()=>display('2')}>2</span>
        <span onClick={()=>display('3')}>3</span>
        <span onClick={()=>display('0')}>0</span>
        <span onClick={()=>display('0')}>00</span>
        <span onClick={()=>display('.')}>.</span>
        <span className="num equal" onClick={()=>calculate()}>=</span>
      </form>
    </div>
  )
}

export default Calculator1