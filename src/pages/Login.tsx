import React from "react";
import { useNavigate } from "react-router-dom";
import { UserRole } from "../store/data/interface.d";
import { userStore } from "../store/state";

function Login() {
  const user = userStore();
  const navigator = useNavigate();

  const setLogin = (): void => {
    user.setRole(UserRole.USER);
    navigator("/");
  };

  return (
    <>
      Login Page
      <br />
      <button onClick={setLogin}>DO LOGIN</button>
    </>
  );
}

export default Login;
