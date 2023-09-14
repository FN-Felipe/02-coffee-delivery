import styled from "styled-components";

export const CoffeeContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  border-radius: 6px 36px 6px 36px;
  padding: 1rem;

  display: flex;
  flex-direction: column;

  background-color: ${props => props.theme['base-card']};

  align-items: center;

  img {
    width: 7.5rem;
    margin-top: -3rem;
    margin-left: 2.75rem;
  }
`

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const BadgeRoot = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: fit-content;
  justify-content: center;
`

export const Badge = styled.div`
  display: flex;
  padding: 0.5rem;
  height: 1.3125rem;
  border-radius: 20px;

  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme['yellow-light']};
  color: ${props => props.theme['yellow-dark']};

  font-size: 0.625rem;
  font-weight: bold;
  text-transform: uppercase;
`

export const TItle = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.25rem;
  color: ${props => props.theme['base-subtitle']};
`

export const Description = styled.h3`
  font-size: 0.875rem;
  color: ${props => props.theme['base-label']};
  font-weight: normal;
  text-align: center;
  margin-top: 0.2rem;
  max-width: 30ch;
`

export const Price = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  gap: 0.2rem;

  color: ${props => props.theme['base-text']};

  p {
    font-size: 0.875rem;
  }

  h2 {
    font-size: 1.5rem;
    font-family: 'Baloo 2', sans-serif;
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