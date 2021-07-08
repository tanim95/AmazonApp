import React from 'react';
import './Home.css';
import amazon from '../Images/amazon.jpg';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home-container'>
        <img className='imge' src={amazon} alt='' />

        <div className='home__row'>
          <Product />
        </div>
        <div className='home__row'></div>
        <div className='home__row'></div>
      </div>
    </div>
  );
}

export default Home;
