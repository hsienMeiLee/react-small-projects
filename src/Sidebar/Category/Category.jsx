import React, { useState } from 'react';
import './Category.css';
import Input from '../../components/Input';

function Category({handleChange}) {
  const [category, setCategory] = useState("");
  const handleCategorySelection = (e)=>{
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    handleChange(e);
  }
  return (
    <div> 
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input type="radio" onChange={handleCategorySelection} value="" name='test' />
          <span className="checkmark"></span>All
        </label>

        <Input 
        handleChange={handleCategorySelection}
        value="sneakers"
        title="sneakers"
        name="test"/>
        <Input 
        handleChange={handleCategorySelection}
        value="flats"
        title="flats"
        name="test"/>
        <Input 
        handleChange={handleCategorySelection}
        value="sandles"
        title="sandles"
        name="test"/>
        <Input 
        handleChange={handleCategorySelection}
        value="heels"
        title="heels"
        name="test"/>
      </div>
    </div>
  )
}

export default Category;