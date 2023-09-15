import { CurrencyDollar, CreditCard } from "@phosphor-icons/react";
import { DescriptionPaymentMethod, PaymentMethod as PaymentMethodRoot } from "../Checkout.styles";
import { useState } from "react";
import { Method } from "../../../components/Button/Button.styles";

export function PaymentMethod() {
  const [check, setCheck] = useState<string>()

  return (
    <PaymentMethodRoot>
      <DescriptionPaymentMethod>
        <CurrencyDollar size={24} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h3>Pagamento</h3>
          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        </div>
      </DescriptionPaymentMethod>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Method checked={check === 'Cartão de crédito'} onClick={(value) => setCheck(value.target?.innerText)}>
          <input type="radio" name="method" />
          <CreditCard size={16} />
          <p>Cartão de crédito</p>
        </Method>

        <Method checked={check === 'Cartão de débito'} onClick={(value) => setCheck(value.target?.innerText)}>
          <input type="radio" name="method" />
          <CreditCard size={16} />
          <p>Cartão de débito</p>
        </Method>

        <Method checked={check === 'Dinheiro'} onClick={(value) => setCheck(value.target?.innerText)}>
          <input type="radio" name="method" />
          <CreditCard size={16} />
          <p>Dinheiro</p>
        </Method>
      </div>
    </PaymentMethodRoot>
  )
}