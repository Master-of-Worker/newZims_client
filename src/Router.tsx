import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navigator from "./components/Navigator";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";

function Router() {
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
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
