import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./pages/Router"
import { useState } from "react"
import { AppContext } from "./context/AppContext"
import { ShoppingCartType } from "./@types/ShoppingCart"

export function App() {
  const [cart, setCart] = useState<ShoppingCartType[]>([])

  function addCart(product: ShoppingCartType) {
    const oldProducts = cart.filter(item => item.key !== product.key)
    setCart([...oldProducts, product])
  }

  function remove(product: ShoppingCartType) {
    const items = cart.filter(item => item.key !== product.key)
    setCart(items)
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <AppContext.Provider value={{ addCart, cart, remove }}>
        <BrowserRouter>
          <GlobalStyle />
          <Header />
          <Router />
        </BrowserRouter>
      </AppContext.Provider>
    </ThemeProvider>
  )
}
