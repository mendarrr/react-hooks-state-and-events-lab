import React from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = React.useState(false);

  const handleAddToCart = () => {
    setIsInCart(true);
  };

  return (
    <li className={isInCart ? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </li>
  );
}

export default Item;