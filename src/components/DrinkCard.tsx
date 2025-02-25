import { StyledDrinkCard } from "./styles/DrinkCard.styled";
import { Drink } from "../api";

export default function DrinkCard({ drink }: { drink: Drink }) {
  return (
    <StyledDrinkCard>
      <div>
        <h2>{drink.strDrink}</h2>
        <p>{drink.strCategory}</p>
        <p>{drink.strAlcoholic}</p>
        <p>{drink.strInstructions}</p>
        <img src={drink.strDrinkThumb} alt={drink.strDrink} />
      </div>
    </StyledDrinkCard>
  );
}
