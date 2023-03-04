import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { UserRole, UserState } from "./data/interface.d";

export const userStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        username: "",
        role: UserRole.GUEST,
        setRole: (role_) => set(() => ({ role: role_ })),
      }),
      {
        name: "user-storage",
      }
    )
  )
);
