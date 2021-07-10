import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';

function Subtotal() {
  const [state, dispatch] = useStateValue();

  const basketTotal = (el) => {
    const total = el?.reduce((ammount, item) => ammount + item.price, 0);
    return total;
  };

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({state.basket?.length}): <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={basketTotal(state.basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
