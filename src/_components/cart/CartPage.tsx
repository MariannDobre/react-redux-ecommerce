import CartSummary from './CartSummary';

import './CartPage.css';
import CartBody from './CartBody';

export default function CartPage() {
  return (
    <div className='cart-page-container'>
      <CartBody />

      <CartSummary />
    </div>
  );
}
