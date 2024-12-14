import React, { useState } from 'react';
import './Price.css';
import Input from '../../components/Input';

function Price({handleChange}) {
  const [price, setPrice] = useState("");
  const handlePriceSelection = (e)=>{
    const selectedPrice = e.target.value;
    setPrice(selectedPrice);
    handleChange(e);
  }
  return (
    <div className='ml'>
      <h2 className="sidebar-title price-title">Price</h2>
      <label className="sidebar-label-container">
        <input type="radio" onChange={handlePriceSelection} value="" name='test2' />
        <span className="checkmark"></span>All
      </label>

      <Input
      handleChange={handlePriceSelection}
      value={50}
      title="$0 - $50"
      name="test2"
      />
      <Input
      handleChange={handlePriceSelection}
      value={100}
      title="$50 - $100"
      name="test2"
      />
      <Input
      handleChange={handlePriceSelection}
      value={150}
      title="$100 - $150"
      name="test2"
      />
      <Input
      handleChange={handlePriceSelection}
      value={200}
      title="Over $150"
      name="test2"
      />
    </div>
  )
}

export default Price;