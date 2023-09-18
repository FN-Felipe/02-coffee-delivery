import styled from 'styled-components'

export const ButtonContainer = styled.button`
  width: 100px;
  height: 60px;
`

export const ButtonOperation = styled.button`
  border: 0;
  background-color: transparent;
  color: ${props => props.theme['purple']};
  cursor: pointer;

  &:hover {
    color: ${props => props.theme['purple-dark']};
  }
`

export const Count = styled.div`
  display: flex;
  border-radius: 6px;
  width: 4.5rem;
  height: 2.375rem;
  gap: 0.5rem;

  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme['base-button']};
  color: ${props => props.theme['base-title']};
`

export const CartCard = styled.button`
  border: 0;
  border-radius: 6px;
  display: flex;
  cursor: pointer;

  align-items: center;
  justify-content: center;

  width: 2.375rem;
  height: 2.375rem;

  background-color: ${props => props.theme['purple-dark']};
  color: ${props => props.theme['white']};

  &:hover {
    background-color: ${props => props.theme['purple']};
  }
`

export const CartHeader = styled.button`
  border: 0;
  border-radius: 6px;
  display: flex;
  cursor: pointer;
  position: relative;

  align-items: center;
  justify-content: center;

  width: 2.375rem;
  height: 2.375rem;

  background-color: ${props => props.theme['yellow-light']};
  color: ${props => props.theme['yellow-dark']};
`

export const CartCountHeader = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 100%;
  position: absolute;
  display: flex;

  margin-top: -2.2rem;
  margin-left: 2rem;

  font-size: 0.75rem;
  font-family: 'Baloo 2', sans-serif;
  font-weight: bold;

  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme['yellow-dark']};
  color: ${props => props.theme['white']};
`

export type MethodCheckType = true | false

interface MethodCheck {
  checked: MethodCheckType
}

export const Method = styled.div<MethodCheck>`
  width: 11.166rem;
  padding: 1rem;
  gap: 0.5rem;
  display: flex;
  border-radius: 6px;
  margin: 0;

  justify-content: center;
  align-items: center;

  background-color: ${props => props.checked ? props.theme['purple-light'] : props.theme['base-button']};
  color: ${props => props.theme['purple']};
  border: 1px solid ${props => props.checked ? props.theme['purple'] : props.theme['base-button']};
  
  p {
    color: ${props => props.theme['base-text']};
    font-size: 0.75rem;
    margin: 0;
  }

  &:hover {
    background-color: ${props => props.theme['base-hover']};
  }

  &:checked {
    border: 1px solid ${props => props.theme['purple']};
    background-color: ${props => props.theme['purple-light']};
  }

  input {
    appearance: none;
    inset: 0;
  }
`

export const ButtonRemove = styled.button`
  width: fit-content;
  padding: 0.5rem;
  border: 0;
  display: flex;
  gap: 0.5rem;
  border-radius: 6px;

  justify-content: center;
  align-items: center;

  color: ${props => props.theme['purple']};
  background-color: ${props => props.theme['base-button']};

  span {
    color: ${props => props.theme['base-text']};
    font-size: 0.875rem;
  }

  &:hover {
    background-color: ${props => props.theme['base-hover']};
  }
`

export const Confirmation = styled.button`
  color: ${props => props.theme['white']};
  background-color: ${props => props.theme['yellow']};
  border: 0;
  border-radius: 6px;
  padding: 0.875rem;
  cursor: pointer;

  margin-top: 1rem;

  font-size: 0.875rem;
  font-weight: bold;
  text-transform: uppercase;

  &:hover {
    background-color: ${props => props.theme['yellow-dark']};
  }

  &:disabled {
    background-color: rgb(0, 0, 0, 0.3);
    cursor: not-allowed;
  }
`