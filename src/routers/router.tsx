import { createBrowserRouter } from "react-router-dom"
import LoginPage from "@/components/pages/login/LoginPage"
import { OrderPageContextWrapper } from "@/components/pages/order/Navbar/OrderPageContextWrapper"
import ErrorPage from "@/components/pages/error/ErrorPage"


const routes = [
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/order/:username",
    element: <OrderPageContextWrapper />,
  },
  {
    path: "*", // "catch-all" route
    element: <ErrorPage />,
  },
]

export const router = createBrowserRouter(routes)
