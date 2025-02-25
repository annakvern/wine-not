import { useForm } from "react-hook-form";
import { StyledBrowsingPage } from "../components/styles/BrowsingPage.styled";
import { useQuery } from "@tanstack/react-query";
import { fetchDrinksByLetter } from "../api";

interface SearchForm {
  searchPhrase: string;
  isAlcoholic: boolean;
}

export default function BrowsingPage() {
  const { register, handleSubmit } = useForm<SearchForm>();

  const executeSearch = (formInput: SearchForm) => {
    console.log("Form submitted with data:", formInput);
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
    </StyledBrowsingPage>
  );
}
