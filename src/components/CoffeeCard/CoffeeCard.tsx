import { Badge, BadgeRoot, CoffeeContainer, ContainerContent, Description, Price, TItle } from "./CoffeeCard.styles";
import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { ButtonOperation, CartCard, Count } from "../Button/Button.styles";
import { Coffees } from "../../@types/coffees";
import { useState } from "react";
import { useContextApp } from "../../context/AppContext";

export function CoffeeCard({ coffees }: { coffees: Coffees }) {
  const [count, setCount] = useState<number>(0)
  const { addCart } = useContextApp()

  function changeSetCountPlus() {
    setCount(count + 1)
  }

  function changeSetCountMinus() {
    if (count === 0) return
    setCount(count - 1)
  }

  function handleIncludeCart({ badge, description, image, key, price, title }: Coffees, quantity: number) {
    if (quantity >= 1) addCart({ badge, description, image, key, price, title, quantity })
  }

  return (
    <CoffeeContainer key={coffees.key}>
      <div>
        <img src={coffees.image} />
        <ContainerContent>
          <BadgeRoot>
            {coffees.badge.map(item => {
              return (
                <Badge key={item}>{item}</Badge>
              )
            })}
          </BadgeRoot>
          <TItle>{coffees.title}</TItle>
          <Description>{coffees.description}</Description>

          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '2.0625rem' }}>
            <Price>
              <p>R$</p>
              <h2>{coffees.price}</h2>
            </Price>

            <Count>
              <ButtonOperation onClick={() => changeSetCountMinus()}>
                <Minus size={10} />
              </ButtonOperation>
              <p>{count}</p>
              <ButtonOperation onClick={() => changeSetCountPlus()}>
                <Plus size={10} />
              </ButtonOperation>
            </Count>

            <CartCard onClick={() => handleIncludeCart(coffees , count)}>
              <ShoppingCart size={20} weight="fill" />
            </CartCard>
          </div>
        </ContainerContent>
      </div>
    </CoffeeContainer>
  )
}
