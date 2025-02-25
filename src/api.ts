// Lookup a random cocktail
// www.thecocktaildb.com/api/json/v1/1/random.php
//Search cocktail by name
// www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
//
export interface Criteria {
  searchPhrase: string;
  isAlcoholic: boolean;
}

interface Drink {
  idDrink: string;
  strDrink: string;
  strCategory?: string;
  strAlcoholic?: string;
  strInstructions?: string;
  strDrinkThumb?: string;
}

export async function fetchRandomDrink(): Promise<{ drinks: Drink[] }> {
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

export async function fetchDrinksForSearch(): Promise<{ drinks: Drink[] }> {
  const response = await fetch(
    "www.thecocktaildb.com/api/json/v1/1/search.php?f=a",
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
