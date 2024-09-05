import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store/store";
import { Home } from "./views/Home/Home";
import { Information } from "./views/Information/Information";
import { Register } from "./views/Register/Register";
import { Login } from "./views/Login/Login";
import { Appointments } from "./views/Appointments/Appointments";
import { MainLayout } from "./components/layouts/MainLayout";
import { AddAppointment } from "./views/AddAppointment/AddAppointment";
import { ProtectedRoute } from "./components/layouts/ProtectedRoute/ProtectedRoute";

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
        element: <ProtectedRoute />,
        children: [
          {
            path: "appointments",
            element: <Appointments />,
          },
          {
            path: "appointments/add",
            element: <AddAppointment />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
