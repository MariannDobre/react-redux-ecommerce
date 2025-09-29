import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  setToLight,
  setToDark,
  setToSystem,
} from '../../_context/theme/themeSlice';
import type { RootState } from '../../_context/store';

import { LuSun, LuMoon, LuMonitor } from 'react-icons/lu';
import './ThemeSwitcher.css';

export default function ThemeSwitcher() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentTheme = useSelector((state: RootState) => state.theme.value);
  const dispatch = useDispatch();

  return (
    <div className='theme-switcher-wrapper'>
      <button
        type='button'
        aria-label='Opens theme switch menu'
        onClick={() => setIsMenuOpen((state) => !state)}
        className='theme-switcher-btn'
      >
        {currentTheme === 'light' ? <LuSun /> : <LuMoon />}
      </button>

      <div className={`theme-menu-wrapper ${isMenuOpen ? 'active' : 'hidden'}`}>
        <button
          type='button'
          aria-label='Set the application theme to light'
          onClick={() => dispatch(setToLight())}
          className='theme-menu-btn'
        >
          <span className='theme-menu-icon'>
            <LuSun />
          </span>
          &nbsp;Light Theme
        </button>

        <button
          type='button'
          aria-label='Set the application theme to dark'
          onClick={() => dispatch(setToDark())}
          className='theme-menu-btn'
        >
          <span className='theme-menu-icon'>
            <LuMoon />
          </span>
          &nbsp;Dark Theme
        </button>

        <button
          type='button'
          aria-label='Set the application theme to the system preferred theme'
          onClick={() => dispatch(setToSystem())}
          className='theme-menu-btn'
        >
          <span className='theme-menu-icon'>
            <LuMonitor />
          </span>
          &nbsp;System Theme
        </button>
      </div>
    </div>
  );
}
