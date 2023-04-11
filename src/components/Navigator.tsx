import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navigator() {
  const navigete = useNavigate();
  return (
    <div className="text-3xl py-3 flex justify-between items-center">
      <div
        role="button"
        className="cursor-pointer"
        onClick={() => navigete('/')}
      >
        New
        <br />
        Zims 🧳
      </div>
      <div
        role="button"
        className="p-3 bg-white w-14 text-center rounded-full cursor-pointer text-2xl"
        onClick={() => navigete('/mypage')}
      >
        🍅
      </div>
    </div>
  );
}

export default Navigator;
