import { useForm } from "react-hook-form";
import { Criteria } from "../api";
import { StyledBrowsingPage } from "../components/styles/BrowsingPage.styled";
StyledBrowsingPage;

export default function BrowsingPage() {
  const { register, handleSubmit } = useForm<Criteria>();

  const executeSearch = (criteria: Criteria) => {
    console.log(criteria);
  };

  return (
    <StyledBrowsingPage>
      <form onSubmit={handleSubmit(executeSearch)}>
        <input
          type="text"
          placeholder="The letter your drink starts with..."
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
