import { Outlet } from "react-router-dom";
import { UserRole } from "../store/data/interface.d";
import { userStore } from "../store/state";

function Navigator() {
  const user = userStore();

  return (
    <>
      [임시 네비게이션]
      <button
        onClick={() =>
          user.setRole(
            user.role === UserRole.GUEST ? UserRole.USER : UserRole.GUEST
          )
        }
      >
        {user.role === UserRole.GUEST ? "login" : "logout"}
      </button>
      <br />
      <a href="/">메인</a>
      <br />
      <a href="/mypage">마이페이지</a>
      <br />
      <br />
      <Outlet />
    </>
  );
}

export default Navigator;
