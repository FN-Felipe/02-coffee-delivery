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