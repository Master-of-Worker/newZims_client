import React from 'react';
import userStore from '../../../store/state';
import { UserRole } from '../../../store/data/interface.d';

function LogoutButton() {
  const user = userStore();
  return (
    <button type="button" onClick={(): void => user.setRole(UserRole.GUEST)}>
      로그아웃
    </button>
  );
}

export default LogoutButton;
