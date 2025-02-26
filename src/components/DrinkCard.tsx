import { StyledDrinkCard } from "./styles/DrinkCard.styled";
import { Drink } from "../api";
import { useNavigate } from "react-router";

export default function DrinkCard({ drink }: { drink: Drink }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/drink/${drink.idDrink}`);
  };
  return (
    <StyledDrinkCard onClick={handleClick}>
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
