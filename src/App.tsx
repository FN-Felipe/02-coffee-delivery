import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./pages/Router"

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}
