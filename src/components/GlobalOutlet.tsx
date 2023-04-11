import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigator from './Navigator';

function GlobalOutlet() {
  return (
    <div className="container w-full md:w-3/6 h-screen px-4 bg-bg select-none">
      <Navigator />
      <Outlet />
    </div>
  );
}

export default GlobalOutlet;
