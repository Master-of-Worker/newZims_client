import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";

import Navigator from "./components/Navigator";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import { UserRole } from "./store/data/interface.d";
import { userStore } from "./store/state";

function Router() {
  const user = userStore();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigator />,
      children: [
        {
          index: true,
          element: <Main />,
        },
        {
          path: "/mypage",
          element: <Mypage />,
          loader: () => user.role === UserRole.GUEST && redirect("/"),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
