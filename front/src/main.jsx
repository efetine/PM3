import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./views/Home/Home";
import { Information } from "./views/Information/Information";
import { Register } from "./views/Register/Register";
import { Login } from "./views/Login/Login";
import { Appointments } from "./views/Appoitments/Appointments";
import { MainLayout } from "./components/layouts/MainLayout";
import { NewAppoitment } from "./components/Appointments/NewAppoitment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "information",
        element: <Information />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "appointments",
        element: <Appointments />,
      },
      {
        path: "appointments/new",
        element: <NewAppoitment />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
