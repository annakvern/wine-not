import { StyledRandomDrinkPage } from "../components/styles/RandomDrinkPage.styled";
import { useQuery } from "@tanstack/react-query";
import { fetchRandomDrink } from "../api";
import Button from "../components/Button";
import DrinkCard from "../components/DrinkCard";

export default function RandomDrinkPage() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["randomDrink"],
    queryFn: fetchRandomDrink,
    staleTime: 0,
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
          {isLoading && <p>Loading a random drink...</p>}
          {error && <p>There was an error fetching your drink.</p>}
          {data?.drinks.map((drink) => (
            <DrinkCard key={drink.idDrink} drink={drink} />
          ))}
        </div>
      </StyledRandomDrinkPage>
      <div>
        <Button>Back to home</Button>
        <Button onClick={() => refetch()}>Try another one!</Button>
      </div>
    </>
  );
}
