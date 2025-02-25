import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import WineNotStart from "./SipHappensLayout.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import BrowsingPage from "./pages/BrowsingPage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RandomDrinkPage from "./pages/RandomDrinkPage.tsx";
import ByIngredientPage from "./pages/ByIngredientPage.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WineNotStart />}>
            <Route index element={<LandingPage />}></Route>
            <Route path="/sparkles" element={<ByIngredientPage />}></Route>
            <Route path="/random-drink" element={<RandomDrinkPage />}></Route>
            <Route path="/browse" element={<BrowsingPage />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
