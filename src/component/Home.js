import React from 'react';
import './Home.css';
import amazon from '../Images/amazon.jpg';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <img className='imge' src={amazon} alt='' />
      <div className='home-container'>
        <div className='home__row'>
          <Product />
          <Product />
        </div>
        <div className='home__row'>
          <Product />
          <Product />
          <Product />
        </div>
        <div className='home__row'>
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
