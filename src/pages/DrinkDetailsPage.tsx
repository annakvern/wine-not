import { useParams } from "react-router";
import useDrinkDetail from "../hooks/useDrinkDetail";

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

      <div>
        <h2>{detailedDrink?.strDrink}</h2>
        <img src={detailedDrink?.strDrinkThumb} alt={detailedDrink?.strDrink} />
        <p>Category: {detailedDrink?.strCategory}</p>
        <p>Type: {detailedDrink?.strAlcoholic}</p>
        <p>Glass: {detailedDrink?.strGlass}</p>
        <h3>Ingredients:</h3>
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
        <h3>Instructions:</h3>
        <p>{detailedDrink?.strInstructions}</p>
      </div>
    </>
  );
}
