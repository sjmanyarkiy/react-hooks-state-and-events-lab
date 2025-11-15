import React, { useState } from "react";
import items from '../data/items'

function Item({ name, category }) {

  const [ isInCart, setisInCart ] = useState(false)

  function addToCart(){

    setisInCart((isInCart) => !isInCart)

  }

  const addInCartClass = isInCart ? "in-cart" : ""

  console.log(addInCartClass)



  return (
    <li className={addInCartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="cart" onClick={addToCart}>{isInCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
