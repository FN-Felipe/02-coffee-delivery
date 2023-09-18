import { useNavigate } from "react-router-dom";
import { Confirmation } from "../../../components/Button/Button.styles";
import { CoffeeSimple } from "../../../components/CoffeeCard/CoffeeSimple";
import { useContextApp } from "../../../context/AppContext";
import { CartDetais, CartRoot } from "../Checkout.styles";

export function Cart() {
  const { cart } = useContextApp()

  const navigate = useNavigate()

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + Number(item.price.replace(',', '.')) * item.quantity, 0);
  }

  function reduzirQuantidade(index: number): void {
    if (cart[index].quantity > 0) cart[index].quantity -= 1
  }

  const total = calculateTotalPrice()
  const totalFormatted = String(total.toFixed(2)).replace('.', ',') 

  const totalWithFee = total + 3.5
  const totalWithFeeFormatted = String(totalWithFee.toFixed(2)).replace('.', ',') 

  return (
    <>
      <h2>Cafés selecionados</h2>
      <CartRoot>
        {cart.length > 0 && cart.map(item => (
          <CoffeeSimple key={item.key} coffee={item} />
        ))}
        <CartDetais>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>Total de itens</p>
            <p>R$ {totalFormatted}</p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>Entrega</p>
            <p>R$ 3,50</p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h2>Total</h2>
            <h2>R$ {totalWithFeeFormatted}</h2>
          </div>
        </CartDetais>
        <Confirmation onClick={() => navigate('/')}>
          confirmar pedido
        </Confirmation>
      </CartRoot>
    </>
  )
}