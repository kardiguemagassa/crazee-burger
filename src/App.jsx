import LoginPage from "./components/pages/login/LoginPage.jsx"  
import { Route, Routes } from "react-router-dom"
import OrderPage from "./components/pages/order/OrderPage.jsx"
import ErrorPage from "./components/pages/error/ErrorPage.jsx"

function App() {

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/order/:username" element={<OrderPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App
