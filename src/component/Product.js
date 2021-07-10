import React from 'react';
import './Product.css';

function Product({ title, image, price, rating }) {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <p key={i}>⭐</p>;
            })}
        </div>
        <img className='img' src={image} alt='' />
        <button>Add to Basket</button>
      </div>
    </div>
  );
}

export default Product;
