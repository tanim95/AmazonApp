import React from 'react';
import './Home.css';
import amazon from '../Images/amazon.jpg';
import leanstartup from '../Images/leanstartup.jpg';
import alexa from '../Images/alexa.jpg';
import watch from '../Images/watch.jpg';
import whey from '../Images/whey.jpg';
import backpack from '../Images/travelbackpack.jpg';
import keds from '../Images/7brooks.jpg';
import iphone from '../Images/iphone.jpg';
import keds3 from '../Images/keds3.jpg';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <img className='imge' src={amazon} alt='' />
      <div className='home-container'>
        <div className='home__row'>
          {/* Product are hard coded not dynamic,in reality product details will come from api*/}
          <Product
            id={0}
            title='Smart Watch'
            price={40.5}
            rating={4}
            image={watch}
          />
          <Product
            id={1}
            title='Goole Alexa'
            price={79.99}
            rating={5}
            image={alexa}
          />
          <Product
            id={2}
            title='Apple iphone 11'
            price={800}
            rating={4}
            image={iphone}
          />
        </div>
        <div className='home__row'>
          <Product
            id={3}
            title='Kids Shoes Toddlers Canvas Sneakers'
            price={20}
            rating={5}
            image={keds3}
          />
          <Product
            id={4}
            title='The lean startup'
            price={29.99}
            rating={5}
            image={leanstartup}
          />
          <Product
            id={5}
            title='7 Brooks Adrenalin'
            price={200}
            rating={5}
            image={keds}
          />

          <Product
            id={6}
            title='Travel Backpack'
            price={39.99}
            rating={5}
            image={backpack}
          />
        </div>
        <div className='home__row '>
          <Product
            id={7}
            title='Whey protain'
            price={29.99}
            rating={5}
            image={whey}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
