import { useQuery } from "@tanstack/react-query";
import { fetchRandomDrink } from "../api";

export default function BrowsingPage() {
  const { data } = useQuery({
    queryKey: ["drinks"],
    queryFn: fetchRandomDrink,
  });

  return (
    <div>
      {data?.drinks.map((drink) => (
        <div>
          <h2>{drink.strDrink}</h2>
          <p>{drink.strCategory}</p>
          <p>{drink.strAlcoholic}</p>
          <p>{drink.strInstructions}</p>
          <img
            src={drink.strDrinkThumb}
            alt={drink.strDrinkThumb}
            width="300"
          />
        </div>
      ))}
    </div>
  );
}
