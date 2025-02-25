import { StyledRandomDrinkPage } from "../components/styles/RandomDrinkPage.styled";
import { useQuery } from "@tanstack/react-query";
import { fetchRandomDrink } from "../api";
import Button from "../components/Button";

export default function RandomDrinkPage() {
  const { data } = useQuery({
    queryKey: ["drinks"],
    queryFn: fetchRandomDrink,
  });

  return (
    <>
      <StyledRandomDrinkPage>
        <div>
          {data?.drinks.map((drink) => (
            <div>
              <h2>{drink.strDrink}</h2>
              <p>{drink.strCategory}</p>
              <p>{drink.strAlcoholic}</p>
              <p>{drink.strInstructions}</p>
              <img src={drink.strDrinkThumb} alt={drink.strDrink} />
            </div>
          ))}
        </div>
      </StyledRandomDrinkPage>
      <div>
        <Button>Back to home</Button>
      </div>
    </>
  );
}
