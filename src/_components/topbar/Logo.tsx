import { Link } from 'react-router-dom';

import { LuPyramid } from 'react-icons/lu';
import './Logo.css';

export default function Logo() {
  return (
    <Link
      to='/'
      aria-label='BazaarIo logo'
      title='BazaarIo logo'
      className='logo'
    >
      <span className='logo-icon'>
        <LuPyramid />
      </span>
      BazaarIo
    </Link>
  );
}
