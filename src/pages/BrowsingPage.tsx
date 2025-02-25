import { useForm } from "react-hook-form";
import { StyledBrowsingPage } from "../components/styles/BrowsingPage.styled";
import { useQuery } from "@tanstack/react-query";
import { fetchDrinksByLetter } from "../api";
import { useState } from "react";

interface SearchForm {
  searchPhrase: string;
  isAlcoholic: boolean;
}

export default function BrowsingPage() {
  const { register, handleSubmit } = useForm<SearchForm>();

  const [searchLetter, setSearchLetter] = useState<string>();
  const [isAlcoholic, setIsAlcoholic] = useState<boolean>();

  const { data, isLoading, error } = useQuery({
    queryKey: ["drinks", searchLetter, isAlcoholic],
    queryFn: () => fetchDrinksByLetter(searchLetter!),
    enabled: !!searchLetter,
  });

  const executeSearch = (inputData: SearchForm) => {
    if (!inputData.searchPhrase || inputData.searchPhrase.length !== 1) {
      alert(
        "Please only enter the first letter of the drink you're looking for, we'll get you the list!"
      );
      return;
    }
    setSearchLetter(inputData.searchPhrase);
    setIsAlcoholic(inputData.isAlcoholic);
  };

  return (
    <StyledBrowsingPage>
      <form onSubmit={handleSubmit(executeSearch)}>
        <input
          type="text"
          placeholder="The letter your drink starts with is..."
          {...register("searchPhrase")}
        />
        <div>
          <input type="checkbox" id="alcoholic" {...register("isAlcoholic")} />{" "}
          <label for="alcoholic">Alcoholic</label>
        </div>
        <button type="submit">Search</button>
      </form>

      {isLoading && <p>Loading your drinks...</p>}
      {error && <p>There was an error fetching your drinks, sorry!</p>}

      <div>
        {data?.drinks
          ?.filter((drink) =>
            isAlcoholic
              ? drink.strAlcoholic === "Alcoholic"
              : drink.strAlcoholic === "Non alcoholic"
          )
          .map((drink) => (
            <h1>{drink.strDrink}</h1>
          ))}
      </div>
    </StyledBrowsingPage>
  );
}
