import { Confirmation } from "../../../components/Button/Button.styles";
import { CoffeeSimple } from "../../../components/CoffeeCard/CoffeeSimple";
import { useContextApp } from "../../../context/AppContext";
import { CartDetais, CartRoot } from "../Checkout.styles";

export function Cart() {
  const { cart } = useContextApp()
  console.log(cart)

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + Number(item.price.replace(',', '.')), 0);
  };

  const total = calculateTotal()
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
        <Confirmation>
          confirmar pedido
        </Confirmation>
      </CartRoot>
    </>
  )
}