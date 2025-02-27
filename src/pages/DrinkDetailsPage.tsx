import { useParams } from "react-router";
import useDrinkDetail from "../hooks/useDrinkDetail";
import { StyledDrinkDetailsPage } from "../components/styles/DrinkDetailsPage.styled";
import Button from "../components/Button";

export default function DrinkDetailsPage() {
  const { id } = useParams();
  const { detailedDrink, isLoading, error } = useDrinkDetail(id);

  if (isLoading) return <p>Loading drink details...</p>;
  if (error) return <p>{error}</p>;
  if (!detailedDrink) return <p>No drink found.</p>;

  return (
    <>
      <h2
        style={{
          padding: "0",
          marginTop: "2rem",
        }}
      >
        Ooooh the drink of your choice!
      </h2>

      <StyledDrinkDetailsPage>
        <h3>
          <i class="fa-regular fa-star"></i> {detailedDrink?.strDrink}{" "}
          <i class="fa-regular fa-star"></i>
        </h3>
        <div className="detail-container">
          <img
            src={detailedDrink?.strDrinkThumb}
            alt={detailedDrink?.strDrink}
          />
          <div className="drink-details">
            <p>
              <strong>{detailedDrink?.strCategory}</strong>
            </p>
            <p>
              <i class="fa-solid fa-spray-can-sparkles"></i> Type:{" "}
              {detailedDrink?.strAlcoholic}
            </p>
            <p>
              <i class="fa-solid fa-martini-glass-empty"></i> Glass:{" "}
              {detailedDrink?.strGlass}
            </p>
            <h4>Ingredients:</h4>
            <ul>
              {Array.from({ length: 15 }).map((_, index) => {
                const ingredient = detailedDrink[`strIngredient${index + 1}`];
                const measure = detailedDrink[`strMeasure${index + 1}`];
                return ingredient ? (
                  <li key={index}>
                    {measure ? `${measure} ` : ""}
                    {ingredient}
                  </li>
                ) : null;
              })}
            </ul>
            <h4>Instructions:</h4>
            <p>{detailedDrink?.strInstructions}</p>
          </div>
        </div>
      </StyledDrinkDetailsPage>
      <div>
        <Button>Back to home</Button>
      </div>
    </>
  );
}
