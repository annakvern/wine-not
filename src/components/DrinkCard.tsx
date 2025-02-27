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
        <h3>{drink.strDrink}</h3>
        <p>{drink.strCategory}</p>
        <p>{drink.strAlcoholic}</p>
        <img src={drink.strDrinkThumb} alt={drink.strDrink} />
      </div>
    </StyledDrinkCard>
  );
}
