import styled from "styled-components";

export const SuccessRoot = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 5rem;

  p {
    font-size: 1rem;
    color: ${props => props.theme['base-text']};
  }

  span {
    font-size: 1.25rem;
    color: ${props => props.theme['base-subtitle']};
  }

  h1 {
    font-size: 2rem;
    color: ${props => props.theme['yellow-dark']};
    font-family: 'Baloo 2', sans-serif;
  }
`

export const SuccessFrame = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 2.5rem;
  padding: 2.5rem;
  gap: 2rem;

  align-items: flex-start;
  
  border: 1px solid transparent;
  border-image: linear-gradient(to right, ${props => props.theme['yellow']}, ${props => props.theme['purple-dark']});
  border-radius: 6px 36px 6px 36px;
  border-image-slice: 1;
`
