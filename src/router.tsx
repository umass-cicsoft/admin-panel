import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Administration, Dashboard, Members } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/members",
        element: <Members />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/administration",
        element: <Administration />,
      },
    ],
  },
]);

export default router;
