export interface Drink {
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

export async function fetchDrinksByLetter(
  letter: string
): Promise<{ drinks: Drink[] }> {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`,
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

export async function fetchDrinksByIngredient(): Promise<{ drinks: Drink[] }> {
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Champagne",
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

export async function fetchDrinkDetails(drinkId: string) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
  );
  if (!response.ok) {
    throw new Error("No drink details for you! Try again later.");
  }
  const data = await response.json();
  return data.drinks[0];
}
