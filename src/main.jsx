import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import "./scss/index.scss";
import Matrix from "./pages/Cubes.jsx";
import Navbar from "./pages/Navbar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },{
    path: "/developingPortfolio3D/",
    element: <App />,
  },
  {
    path: "/developingPortfolio3D/matrix",
    element: <Matrix />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Navbar /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
