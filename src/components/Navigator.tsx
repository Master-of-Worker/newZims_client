import { Outlet } from "react-router-dom";

function Navigator() {
  return (
    <>
      [임시 네비게이션]
      <br />
      <a href="/">메인</a>
      <br />
      <a href="/mypage">마이페이지</a>
      <Outlet />
    </>
  );
}

export default Navigator;
