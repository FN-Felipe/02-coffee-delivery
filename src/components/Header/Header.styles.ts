import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 6.5rem;
  display: flex;
  padding-top: 2rem;
  justify-content: space-between;
  align-items: center;
`

export const HeaderLocation = styled.div`
  padding: 0.5rem;
  height: 2.375rem;
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme['purple-light']};
  color: ${props => props.theme['purple']};
`