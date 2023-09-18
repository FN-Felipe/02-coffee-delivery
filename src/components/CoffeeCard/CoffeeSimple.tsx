import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { ButtonOperation, ButtonRemove, Count } from "../Button/Button.styles";
import { CartContainer, CartItem, DetailsSimple } from "./CoffeeSimple.styles";
import { useState } from "react";
import { ShoppingCartType } from "../../@types/ShoppingCart";
import { useContextApp } from "../../context/AppContext";
import { Coffees } from "../../@types/coffees";

export function CoffeeSimple({ coffee }: { coffee: ShoppingCartType }) {
  const { remove, addCart } = useContextApp()
  const [count, setCount] = useState<number>(coffee.quantity)

  function changeSetCountPlus() {
    setCount(count + 1)
    handleIncludeCart(coffee, count + 1)
  }

  function changeSetCountMinus() {
    if (count === 1) return
    setCount(count - 1)
    handleIncludeCart(coffee, count - 1)
  }

  function handleIncludeCart({ badge, description, image, key, price, title }: Coffees, quantity: number) {
    addCart({ badge, description, image, key, price, title, quantity })
  }

  return (
    <CartContainer>
      <CartItem>
        <img src={coffee.image} />
        <DetailsSimple>
          <h2>{coffee.title}</h2>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Count>
              <ButtonOperation onClick={() => changeSetCountMinus()}>
                <Minus size={10} />
              </ButtonOperation>
              <p>{count}</p>
              <ButtonOperation onClick={() => changeSetCountPlus()}>
                <Plus size={10} />
              </ButtonOperation>
            </Count>
            <ButtonRemove onClick={() => remove(coffee)}>
              <Trash size={16} />
              <span>REMOVER</span>
            </ButtonRemove>
          </div>
        </DetailsSimple>
        <div>
          <h3>R${coffee.price}</h3>
        </div>
      </CartItem>
    </CartContainer>
  )
}