import styled from "styled-components";

export const CartItem = styled.div`
  display: flex;
  gap: 1.5rem;

  justify-content: space-between;

  h3 {
    font-family: 'Baloo 2', sans-serif;
    color: ${porps => porps.theme['base-text']};
    font-weight: bold;
    margin-left: 3rem;
    }

  h2 {
    font-size: 1rem;
    color: ${porps => porps.theme['base-subtitle']};
  }

  img {
    width: 4.5rem;
  }

  
`

export const DetailsSimple = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
`

export const CartContainer = styled.div`
  padding: 2rem 0;
  border-bottom: 1px solid ${porps => porps.theme['base-button']};

  &:first-child {
    padding-top: 0;
  }
`