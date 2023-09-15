import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Checkout } from "./checkout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  )
}