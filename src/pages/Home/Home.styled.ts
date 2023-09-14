import styled from "styled-components";

export const ContainerRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;

  height: 34rem;
`

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
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
  }
`

export const ContainerDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr; 
  margin-top: 4.125rem;
`

export const ContainerItem = styled.div``