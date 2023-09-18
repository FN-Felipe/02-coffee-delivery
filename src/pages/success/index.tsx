import Deliveryman from '../../assets/deliveryman.png'
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react"
import { ContainerItem, ContainerIcon } from "../Home/Home.styled"
import { SuccessFrame, SuccessRoot } from "./Success.styles"

export function Success() {
  return (
    <SuccessRoot>
      <h1>Uhu! Pedido confirmado</h1>
      <span>Agora é só aguardar que logo o café chegará até você</span>

      <div style={{ display: 'flex', gap: '5rem' }}>
        <SuccessFrame>
          <ContainerItem>
            <ContainerIcon variant="coffee">
              <MapPin size={20} weight="fill" />
            </ContainerIcon>
            <p>Entrega em <strong>Rua João Daniel Martinelli, 102</strong>, Farrapos - Porto Alegre, RS</p>
          </ContainerItem>

          <ContainerItem>
            <ContainerIcon variant="timer">
              <Timer size={20} weight="fill" />
            </ContainerIcon>
            <div>
              <p>Previsão de entrega</p>
              <p><strong>20 min - 30 min</strong></p>
            </div>
          </ContainerItem>

          <ContainerItem>
            <ContainerIcon variant="cart">
              <CurrencyDollar size={20} />
            </ContainerIcon>
            <div>
              <p>Pagamento na entrega</p>
              <p><strong>Cartão de Crédito</strong></p>
            </div>
          </ContainerItem>
        </SuccessFrame>
        <img src={Deliveryman} />
      </div>

    </SuccessRoot>
  )
}