import styled from "styled-components";

export const CheckoutRootContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  margin-top: 2.875rem;
  gap: 2rem;

  h2 {
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    margin-bottom: 0.25rem;
  }
`
export const CheckoutAddress = styled.div`
  width: 100%;
  padding: 2.5rem;
  border-radius: 6px;
  gap: 1rem;
  
  display: flex;
  flex-direction: column;
  
  background-color: ${props => props.theme['base-card']};
  
  input {
    height: 2.625rem;
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid transparent;

    font-size: 0.875rem;

    color: ${props => props.theme['base-text']};
    background-color: ${props => props.theme['base-input']};

    &:focus {
      border: 1px solid ${props => props.theme['yellow-dark']};
    }

    &::placeholder {
      color: ${props => props.theme['base-label']};
    }
  }
`

export const DescriptionAddress = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  color: ${props => props.theme['yellow-dark']};

  h3 {
    color: ${props => props.theme['base-subtitle']};
    font-weight: normal;
  }

  p {
    color: ${props => props.theme['base-text']};
    font-size: 0.875rem;
  }
`

export const DescriptionPaymentMethod = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  color: ${props => props.theme['purple']};

  h3 {
    color: ${props => props.theme['base-subtitle']};
    font-weight: normal;
  }

  p {
    color: ${props => props.theme['base-text']};
    font-size: 0.875rem;
  }
`

export const PaymentMethod = styled.div`
  background-color: ${props => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const CartRoot = styled.div`
  background-color: ${props => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
  gap: 0rem;
  width: 100%;
`

export const CartDetais = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 0.5rem;

  p {
    font-size: 0.875rem;
    color: ${props => props.theme['base-text']};
  }

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    color: ${props => props.theme['base-subtitle']};
  }
`