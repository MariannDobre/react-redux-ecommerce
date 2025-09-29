import Logo from './Logo';
import SearchWrapper from '../search/SearchWrapper';
import RightSide from './RightSide';
import NavLinks from './NavLinks';
import ThemeSwitcher from '../theme/ThemeSwitcher';

import './TopBarWrapper.css';

export default function TopBarWrapper() {
  return (
    <nav className='topbar-wrapper'>
      <Logo />

      <SearchWrapper />

      <RightSide>
        <NavLinks />

        <ThemeSwitcher />
      </RightSide>
    </nav>
  );
}
