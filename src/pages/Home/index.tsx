import { ContainerDescription, ContainerDetails, ContainerIcon, ContainerItem, ContainerIntrodution, ContainerMenu, CoffeeContainer } from "./Home.styled";
import ImgModel from '../../assets/Imagem.png'
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { CoffeeCard } from "../../components/CoffeeCard";
import * as CoffeesImage from '../../assets/CoffeesImages'
import { Coffees } from "../../@types/coffees";

export function Home() {
  const coffees: Coffees[] = [
    { image: CoffeesImage.Expresso, badge: ['Tradicional'], title: 'Expresso Tradicional', description: 'O tradicional café feito com água quente e grãos moídos', price: '9,90' },
    { image: CoffeesImage.Americano, badge: ['Tradicional'], title: 'Expresso Americano', description: 'Expresso diluído, menos intenso que o tradicional', price: '9,90' },
    { image: CoffeesImage.ExpressoCremoso, badge: ['Tradicional'], title: 'Expresso Cremoso', description: 'Café expresso tradicional com espuma cremosa', price: '9,90' },
    { image: CoffeesImage.CaféGelado, badge: ['Tradicional', 'Gelado'], title: 'Expresso Gelado', description: 'Bebida preparada com café expresso e cubos de gelo', price: '9,90' },
    { image: CoffeesImage.CafécomLeite, badge: ['Tradicional', 'com leite'], title: 'Café com Leite', description: 'Meio a meio de expresso tradicional com leite vaporizado', price: '9,90' },
    { image: CoffeesImage.Latte, badge: ['Tradicional', 'com leite'], title: 'Latte', description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa', price: '9,90' },
    { image: CoffeesImage.Capuccino, badge: ['Tradicional', 'com leite'], title: 'Capuccino', description: 'Bebida com canela feita de doses iguais de café, leite e espuma', price: '9,90' },
    { image: CoffeesImage.Macchiato, badge: ['Tradicional', 'com leite'], title: 'Macchiato', description: 'Café expresso misturado com um pouco de leite quente e espuma', price: '9,90' },
    { image: CoffeesImage.Mochaccino, badge: ['Tradicional', 'com leite'], title: 'Mocaccino', description: 'Café expresso com calda de chocolate, pouco leite e espuma', price: '9,90' },
    { image: CoffeesImage.ChocolateQuente, badge: ['especial', 'com leite'], title: 'Chocolate Quente', description: 'Bebida feita com chocolate dissolvido no leite quente e café', price: '9,90' },
    { image: CoffeesImage.Cubano, badge: ['especial', 'alcoólico', 'gelado'], title: 'Cubano', description: 'Drink gelado de café expresso com rum, creme de leite e hortelã', price: '9,90' },
    { image: CoffeesImage.Havaiano, badge: ['especial'], title: 'Havaiano', description: 'Bebida adocicada preparada com café e leite de coco', price: '9,90' },
    { image: CoffeesImage.Árabe, badge: ['especial'], title: 'Árabe', description: 'Bebida preparada com grãos de café árabe e especiarias', price: '9,90' },
    { image: CoffeesImage.Irlandês, badge: ['especial', 'alcoólico'], title: 'Irlandês', description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly', price: '9,90' },
  ]

  return (
    <>
      <ContainerIntrodution>
        <ContainerDescription>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h4>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h4>
          <ContainerDetails style={{ marginTop: '4.125rem' }}>
            <ContainerItem>
              <ContainerIcon variant="cart">
                <ShoppingCart size={20} weight="fill" />
              </ContainerIcon>
              <p>Compra simples e segura</p>
            </ContainerItem>

            <ContainerItem>
              <ContainerIcon variant="package">
                <Package size={20} weight="fill" />
              </ContainerIcon>
              <p>Compra simples e segura</p>
            </ContainerItem>
          </ContainerDetails>


          <ContainerDetails>
            <ContainerItem>
              <ContainerIcon variant="timer">
                <Timer size={20} weight="fill" />
              </ContainerIcon>
              <p>Compra simples e segura</p>
            </ContainerItem>

            <ContainerItem>
              <ContainerIcon variant="coffee">
                <Coffee size={20} weight="fill" />
              </ContainerIcon>
              <p>Compra simples e segura</p>
            </ContainerItem>
          </ContainerDetails>
        </ContainerDescription>
        <div>
          <img src={ImgModel} />
        </div>
      </ContainerIntrodution >
      <ContainerMenu>
        <h2>Nossos cafés</h2>
        <CoffeeContainer>
          {coffees.map(coffee => {
            return (
              <CoffeeCard coffees={coffee} />
            )
          })}
        </CoffeeContainer>
      </ContainerMenu>
    </>
  )
}