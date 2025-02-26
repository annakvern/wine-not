import { useForm } from "react-hook-form";
import { StyledBrowsingPage } from "../components/styles/BrowsingPage.styled";
import DrinkCard from "../components/DrinkCard";
import Button from "../components/Button";
import useDrink from "../hooks/useDrink";
import { SearchForm } from "../hooks/useDrink";

export default function BrowsingPage() {
  const { register, handleSubmit } = useForm<SearchForm>();
  const { registerFields, executeSearch, data, isLoading, error } = useDrink();

  return (
    <>
      <StyledBrowsingPage>
        <form onSubmit={handleSubmit(executeSearch)}>
          <input
            type="text"
            placeholder="The letter your drink starts with is..."
            {...register("searchPhrase")}
          />
          <div>
            <input
              type="checkbox"
              id="alcoholic"
              {...register("isAlcoholic")}
            />{" "}
            <label for="alcoholic">Alcoholic</label>
          </div>
          <button type="submit">Search</button>
        </form>

        {isLoading && <p>Loading your drinks...</p>}
        {error && <p>There was an error fetching your drinks, sorry!</p>}

        <div className="drink-list">
          {data?.drinks
            ?.filter((drink) =>
              registerFields.isAlcoholic
                ? drink.strAlcoholic === "Alcoholic"
                : drink.strAlcoholic === "Non alcoholic"
            )
            .map((drink) => (
              <DrinkCard key={drink.idDrink} drink={drink} />
            ))}
        </div>
      </StyledBrowsingPage>
      <div>
        <Button>Back to home</Button>
      </div>
    </>
  );
}
