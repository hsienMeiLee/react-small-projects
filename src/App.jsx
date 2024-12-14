import Recommended from './Recommended/Recommended';
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from 'react';
import products from './db/data';
import Card from './components/Card';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [query, setQuery] = useState("");
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  const filteredItems = products.filter((product) => 
  product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase())!== 
  -1);

  // ---------------- Radio Filter ----------------
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
  }
  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  }

  // ----------------- Button Filter -----------------
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  }

  function filteredData(products, selectedCategory, selectedPrice, selectedColor, query){
    let filteredProducts = products;
    //Filtering input items
    if(query){
      filteredProducts = filteredItems;
    }
    //filtering selected items
    // if(selected){
    //   filteredProducts = filteredProducts.filter(({category, color, company, newPrice, title}) =>
    //   category === selected || color === selected || company === selected || newPrice === selected || title === selected);
    // }

    if(selectedCategory){
      filteredProducts = filteredProducts.filter((product)=>
        product.category === selectedCategory
      );
    }

    if(selectedPrice){
      filteredProducts = filteredProducts.filter((product)=>
        product.newPrice === selectedPrice
      );
    }

    if(selectedColor){
      filteredProducts = filteredProducts.filter((product)=>
        product.color === selectedColor
      );
    }
    return filteredProducts.map(({img, title, star, reviews, prevPrice, newPrice}) => (
      <Card 
      key={Math.random()}
      img = {img}
      title = {title}
      star = {star}
      reviews = {reviews}
      prevPrice = {prevPrice}
      newPrice = {newPrice}
      />
      
    ))
  }

  const result = filteredData(products, selectedCategory, selectedPrice, selectedColor, query);
  
  return(
    <>
    <Sidebar handleCategoryChange={handleCategoryChange} handlePriceChange={handlePriceChange} handleColorChange={handleColorChange}/>
    <Navigation query={query} handleInputChange={handleInputChange} />
    <Recommended handleClick={handleClick} />
    <Products result={result} />
    </>
  )
    
}



export default App;