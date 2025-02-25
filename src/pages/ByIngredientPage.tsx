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
      <StyledByIngredientPage>
        <section>
          {data?.drinks.map((drink) => (
            <DrinkCard key={drink.idDrink} drink={drink} />
          ))}
        </section>
      </StyledByIngredientPage>
      <div>
        <Button>Back to home</Button>
      </div>
    </>
  );
}
