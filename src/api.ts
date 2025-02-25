// Lookup a random cocktail
// www.thecocktaildb.com/api/json/v1/1/random.php
//Search cocktail by name
// www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
//

interface Drink {
  idDrink: string;
  strDrink: string;
  strCategory?: string;
  strAlcoholic?: string;
  strInstructions?: string;
  strDrinkThumb?: string;
}

export async function fetchDrinks(): Promise<{ drinks: Drink[] }> {
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/random.php",
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}
