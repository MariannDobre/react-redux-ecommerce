import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../_context/store';

import './NavLinks.css';

export default function Links() {
  const { pathname } = useLocation();

  const totalItems = useSelector((state: RootState) => state.cart.totalItems);

  return (
    <ul className='nav-list'>
      <li className='nav-list-item'>
        <Link
          to='/'
          title='Navigate to the home page'
          className={pathname === '/' ? 'nav-link-active' : 'nav-link'}
        >
          Home
        </Link>
      </li>

      <li className='nav-list-item'>
        <Link
          to='/products'
          title='Navigate to the products page'
          className={pathname === '/products' ? 'nav-link-active' : 'nav-link'}
        >
          Products
        </Link>
      </li>

      <li className='nav-list-item nav-link-cart'>
        <span className='cart-count'>{totalItems}</span>

        <Link
          to='/cart'
          title='Navigate to the edit page'
          className={pathname === '/cart' ? 'nav-link-active' : 'nav-link'}
        >
          Cart
        </Link>
      </li>
    </ul>
  );
}
