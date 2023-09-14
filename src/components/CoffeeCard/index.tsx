import { Badge, BadgeRoot, CoffeeContainer, ContainerContent, Count, Description, Price, TItle } from "./CoffeeCard.styles";
import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { ButtonOperation, CartCard } from "../Button/Button.styles";
import { Coffees } from "../../@types/coffees";

export function CoffeeCard({ coffees }: { coffees: Coffees }) {
  return (
    <CoffeeContainer>
      <div>
        <img src={coffees.image} />
        <ContainerContent>
          <BadgeRoot>
            {coffees.badge.map(item => {
              return (
                <Badge>{item}</Badge>
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
              <ButtonOperation>
                <Minus size={10} />
              </ButtonOperation>
              <p>1</p>
              <ButtonOperation>
                <Plus size={10} />
              </ButtonOperation>
            </Count>

            <CartCard>
              <ShoppingCart size={20} weight="fill" />
            </CartCard>
          </div>
        </ContainerContent>
      </div>
    </CoffeeContainer>
  )
}
