import React from 'react';
import './Product.css';
import leanstartup from '../Images/leanstartup.jpg';

function Product() {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>lean startup</p>
        <p className='product__price'>
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className='product__rating'>
          <p>⭐</p>
        </div>
        <img className='img' src={leanstartup} alt='' />
        <button>Add to Basket</button>
      </div>
    </div>
  );
}

export default Product;
