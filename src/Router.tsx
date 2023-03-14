import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";

import Navigator from "./components/Navigator";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Zim from "./pages/Zim";
import Zims from "./pages/Zims";
import { UserRole } from "./store/data/interface.d";
import { userStore } from "./store/state";

function Router() {
  const user = userStore();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigator />,
      loader: () => user.role === UserRole.GUEST && redirect("/login"),
      children: [
        {
          index: true,
          element: <Main />,
        },
        {
          path: "/zims/*",
          children: [
            { index: true, element: <Zims /> },
            { path: ":zimNumber", element: <Zim /> },
          ],
        },
        {
          path: "/mypage",
          element: <Mypage />,
        },
      ],
    },
    // login을 root 자식에 포함되지 않게 하여, 접근 권한 제어.
    {
      path: "/login",
      element: <Login />,
      loader: () => user.role !== UserRole.GUEST && redirect("/"),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
