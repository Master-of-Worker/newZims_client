import React from 'react';
import LogoutButton from './components/LogoutButton';

function Mypage() {
  return (
    <div className="flex flex-col bg-white w-screen h-full absolute left-0 mt-5 px-4 py-5 rounded-t-3xl">
      <div className="flex gap-3 border-b-2 border-slate-200 pb-5">
        <div className="p-3 bg-white w-14 text-center rounded-full cursor-pointer border-2 border-slate-300 text-xl">
          🍅
        </div>
        <div>
          <div className="text-xl">이도경 바보</div>
          <div>email@example.com</div>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-2xl mt-3">
        <div className="p-3 cursor-pointer">회원 정보수정</div>
        <div className="p-3 cursor-pointer">
          <LogoutButton />
        </div>
        <div className="p-3 cursor-pointer">회원 탈퇴</div>
      </div>
    </div>
  );
}

export default Mypage;
