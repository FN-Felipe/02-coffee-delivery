import styled from "styled-components";

export const ContainerIntrodution = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;

  height: 34rem;
`

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 1rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 4rem;
    color: ${props => props.theme['base-title']};
    line-height: 4.5rem;
  }

  h4 {
    font-weight: normal;
    color: ${props => props.theme['base-subtitle']};
    font-size: 1.25rem;
  }
`

export const ContainerDetails = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
`

export const ContainerItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  color: ${props => props.theme['base-text']};
`

export type ContainerIconVariant = 'cart' | 'timer' | 'coffee' | 'package'

interface ContainerIconProps {
  variant: ContainerIconVariant
}

const containerIconVariant = {
  cart: 'yellow-dark',
  timer: 'yellow',
  coffee: 'purple',
  package: 'base-text'
}

export const ContainerIcon = styled.div<ContainerIconProps>`
  display: flex;
  border-radius: 9999999%;
  width: 2rem;
  height: 2rem;
  color: ${props => props.theme['white']};
  justify-content: center;
  align-items: center;

  ${props => {
    return `background-color: ${props.theme[containerIconVariant[props.variant]]}`
  }}
`

export const ContainerMenu = styled.div`
  width: 100%;
  gap: 3.375rem;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    color: ${props => props.theme['base-subtitle']};
  }
`

export const CoffeeContainer = styled.div`
   width: 100%;
    gap: 3rem 2rem;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 9.8125rem;
`
