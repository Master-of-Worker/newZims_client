import { Outlet } from "react-router-dom";
import { UserRole } from "../store/data/interface.d";
import { userStore } from "../store/state";

function Navigator() {
  const user = userStore();

  return (
    <>
      [임시 네비게이션]
      <span> </span>
      <button
        onClick={(): void =>
          user.setRole(
            user.role === UserRole.GUEST ? UserRole.USER : UserRole.GUEST
          )
        }
      >
        {user.role === UserRole.GUEST ? "login" : "logout"}
      </button>
      <span> </span>
      <a href="/">메인</a>
      <span> | </span>
      <a href="/zims">메인(리스트)페이지</a>
      <span> | </span>
      <a href="/zims/1">메인(상세)페이지</a>
      <span> | </span>
      <a href="/mypage">마이페이지</a>
      <br />
      <br />
      <Outlet />
    </>
  );
}

export default Navigator;
