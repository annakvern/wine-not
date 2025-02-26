import { useQuery } from "@tanstack/react-query";
import { fetchDrinksByIngredient } from "../api";
import DrinkCard from "../components/DrinkCard";
import { StyledByIngredientPage } from "../components/styles/ByIngredientPage.styled";
import Button from "../components/Button";

export default function ByIngredientPage() {
  const { data } = useQuery({
    queryKey: ["drinks"],
    queryFn: fetchDrinksByIngredient,
  });

  return (
    <>
      <h2>When in need of sparkles (always)...!</h2>
      <StyledByIngredientPage>
        {data?.drinks.map((drink) => (
          <DrinkCard key={drink.idDrink} drink={drink} />
        ))}
      </StyledByIngredientPage>
      <div>
        <Button>Back to home</Button>
      </div>
    </>
  );
}
