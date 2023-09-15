import { HeaderContainer, HeaderLocation } from "./Header.styles";
import LogoCoffee from '../../assets/Logo.png'
import { CartCountHeader, CartHeader } from "../Button/Button.styles";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { useContextApp } from "../../context/AppContext";
import { useNavigate } from 'react-router-dom'

export function Header() {
  const { cart } = useContextApp()
  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <div>
        <img src={LogoCoffee} onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <HeaderLocation>
          <MapPin size={20} weight="fill" />
          <span>Rio do Sul, RS</span>
        </HeaderLocation>
        <CartHeader onClick={() => navigate('/checkout')} disabled={cart.length === 0}>
          {cart.length > 0 && (
            <CartCountHeader>{cart.length}</CartCountHeader>
          )}
          <ShoppingCart size={20} weight="fill" />
        </CartHeader>
      </div>
    </HeaderContainer>
  )
}