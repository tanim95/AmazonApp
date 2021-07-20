import React from 'react';
import './Checkout.css';
import amazongift from '../Images/amazongift.jpg';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout({ id }) {
  const [{ basket }, dispatch] = useStateValue();
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
          {basket.map((item, i) => {
            return (
              <CheckoutProduct
                key={i}
                id={i}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            );
          })}
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
