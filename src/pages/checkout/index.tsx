import { CheckoutRootContainer } from "./Checkout.styles";
import { Address } from "./components/Address";
import { Cart } from "./components/Cart";
import { PaymentMethod } from "./components/PaymentMethod";

export function Checkout() {
  return (
    <CheckoutRootContainer>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Address />
        <PaymentMethod />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Cart />
      </div>
    </CheckoutRootContainer>
  )
}