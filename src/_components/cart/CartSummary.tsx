import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../_context/cart/cartSlice';
import type { RootState } from '../../_context/store';

import './CartSummary.css';

export default function CartSummary() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

  const hasUnavailableItems = cartItems.some(
    (item) => item.status !== 'In stock'
  );

  console.log(hasUnavailableItems);

  return (
    <div className='cart-summary-container'>
      <div className='cart-summary-row'>
        <p className='cart-summary-row-label'>Subtotal</p>

        <span className='cart-summary-row-value'>
          $&nbsp;{totalPrice.toFixed(2)}
        </span>
      </div>

      <div className='cart-summary-row'>
        <p className='cart-summary-row-label'>Shipping</p>

        <span className='cart-summary-row-value'>Free</span>
      </div>

      <div className='cart-summary-row'>
        <p className='cart-summary-row-label'>Total</p>

        <span className='cart-summary-row-value'>
          $&nbsp;{totalPrice.toFixed(2)}
        </span>
      </div>

      <div className='cart-summary-row'>
        <div
          style={{
            width: 'auto',
            height: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: '18px',
            marginLeft: 'auto',
          }}
        >
          <button
            type='button'
            disabled={cartItems.length === 0}
            onClick={() => dispatch(clearCart())}
            className='cart-summary-clear'
          >
            Clear Cart
          </button>

          <button
            type='button'
            disabled={cartItems.length === 0}
            onClick={() => {
              if (hasUnavailableItems) {
                alert(
                  'You cannot check out right now because one or more items are not available.'
                );
              } else {
                dispatch(clearCart());
              }
            }}
            className='cart-summary-checkout'
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
