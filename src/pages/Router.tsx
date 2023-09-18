import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Checkout } from "./checkout";
import { Success } from "./success";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  )
}