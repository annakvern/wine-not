import { useQuery } from "@tanstack/react-query";
import { fetchDrinks } from "../api";

export default function BrowsingPage() {
  const { data } = useQuery({
    queryKey: ["drinks"],
    queryFn: fetchDrinks,
  });

  return (
    <div>
      {data?.drinks.map((drink) => (
        <div>{drink.strDrink}</div>
      ))}
    </div>
  );
}
