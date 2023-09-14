import { HeaderContainer } from "./Header.styles";
import LogoCoffee from '../../assets/Logo.png'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={LogoCoffee} />
      </div>
      <div>
        <button>io</button>
      </div>
    </HeaderContainer>
  )
}