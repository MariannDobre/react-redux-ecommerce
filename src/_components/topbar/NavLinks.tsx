import { Link, useLocation } from 'react-router-dom';
import './NavLinks.css';

export default function Links() {
  const { pathname } = useLocation();

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

      <li className='nav-list-item'>
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
