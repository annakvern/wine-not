import { useQuery } from "@tanstack/react-query";
import { fetchDrinksByLetter } from "../api";
import { useState } from "react";

export interface SearchForm {
  searchPhrase: string;
  isAlcoholic: boolean;
}

export default function useDrink() {
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

  return {
    registerFields: { searchLetter, isAlcoholic },
    executeSearch,
    data,
    isLoading,
    error,
  };
}
