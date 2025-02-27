import { useState, useEffect } from "react";
import { fetchDrinkDetails } from "../api";

export interface SearchForm {
  searchPhrase: string;
  isAlcoholic: boolean;
}

export default function useDrinkDetail(drinkId?: string) {
  const [detailedDrink, setDetailedDrink] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    if (!drinkId) {
      setIsLoading(false);
      return;
    }

    const getDrinkDetails = async () => {
      setIsLoading(true);
      try {
        const drinkInView = await fetchDrinkDetails(drinkId);
        setDetailedDrink(drinkInView);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError(
            "Oh noes, something wen't wrong. We'll get you your drink later!"
          );
        }
      } finally {
        setIsLoading(false);
      }
    };

    getDrinkDetails();
  }, [drinkId]);

  return {
    detailedDrink,
    isLoading,
    error,
  };
}
