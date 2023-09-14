import { ContainerDescription, ContainerDetails, ContainerRoot } from "./Home.styled";
import ImgModel from '../../assets/Imagem.png'

export function Home() {
  return (
    <ContainerRoot>
      <ContainerDescription>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h4>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h4>
        <ContainerDetails>
          <p>Compra simples e segura</p>
          <p>Compra simples e segura</p>
          <p>Compra simples e segura</p>
          <p>Compra simples e segura</p>
        </ContainerDetails>
      </ContainerDescription>
      <div>
        <img src={ImgModel} />
      </div>
    </ContainerRoot>
  )
}