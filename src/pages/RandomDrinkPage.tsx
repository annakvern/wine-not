import { StyledRandomDrinkPage } from "../components/styles/RandomDrinkPage.styled";
import { useQuery } from "@tanstack/react-query";
import { fetchRandomDrink } from "../api";
import Button from "../components/Button";
import DrinkCard from "../components/DrinkCard";

export default function RandomDrinkPage() {
  const { data } = useQuery({
    queryKey: ["drinks"],
    queryFn: fetchRandomDrink,
  });

  return (
    <>
      <h2
        style={{
          padding: "0",
          marginTop: "2rem",
        }}
      >
        I think you should sip on this one!
      </h2>

      <StyledRandomDrinkPage>
        <div>
          {data?.drinks.map((drink) => (
            <DrinkCard key={drink.idDrink} drink={drink} />
          ))}
        </div>
      </StyledRandomDrinkPage>
      <div>
        <Button>Back to home</Button>
        <Button>Try another one!</Button>
      </div>
    </>
  );
}
