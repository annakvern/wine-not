import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import WineNotStart from "./WineNotLayout.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import MyFavouritesPage from "./pages/MyFavouritesPage.tsx";
import TastingPage from "./pages/TastingPage.tsx";
import BrowsingPage from "./pages/BrowsingPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WineNotStart />}>
          <Route index element={<LandingPage />}></Route>
          <Route path="/my-favourites" element={<MyFavouritesPage />}></Route>
          <Route path="/tasting" element={<TastingPage />}></Route>
          <Route path="/browsing" element={<BrowsingPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
