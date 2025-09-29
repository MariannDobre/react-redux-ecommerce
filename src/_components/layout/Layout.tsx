import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import type { RootState } from '../../_context/store';

import TopBarWrapper from '../topbar/TopBarWrapper';

import './Layout.css';
import { useEffect } from 'react';

export default function Layout() {
  const currentTheme = useSelector((state: RootState) => state.theme.value);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  return (
    <main className='layout'>
      <TopBarWrapper />

      <div className='layout-content'>
        <Outlet />
      </div>
    </main>
  );
}
