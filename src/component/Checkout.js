import React from 'react';
import './Checkout.css';
import amazongift from '../Images/amazongift.jpg';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='amazongift__img'
          src={amazongift}
          alt='amazon gift card'
        />
        <div>
          <h2 className='chekout__title'>Your shopping Basket</h2>
          <CheckoutProduct />
        </div>
      </div>
      <div className='checkout__right'>
        <h2>
          <Subtotal />
        </h2>
      </div>
    </div>
  );
}

export default Checkout;
