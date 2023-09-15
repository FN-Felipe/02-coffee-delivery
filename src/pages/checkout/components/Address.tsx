import { MapPinLine } from "@phosphor-icons/react";
import { CheckoutAddress, DescriptionAddress } from "../Checkout.styles";

export function Address() {
  return (
    <>
      <h2>Complete seu pedido</h2>
      <CheckoutAddress>
        <DescriptionAddress>
          <MapPinLine size={24} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </DescriptionAddress>
        <input placeholder="CEP" style={{ width: '20%' }} />
        <input placeholder="Rua" />
        <div style={{ display: 'flex', gap: '1rem' }}>
          <input placeholder="Número" style={{ width: '20%' }} />
          <input placeholder="Complemento" style={{ width: '80%' }} />
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <input placeholder="Bairro" style={{ width: '20%' }} />
          <input placeholder="Cidade" style={{ width: '70%' }} />
          <input placeholder="UF" style={{ width: '10%' }} />
        </div>
      </CheckoutAddress>
    </>
  )
}