import React, { useState } from "react";
import items from '../data/items'

function Item({ name, category }) {

  const [ isInCart, setisInCart ] = useState(false)

  function addToCart(){

    setisInCart(!isInCart)

  }



  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>{isInCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
