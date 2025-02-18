import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WineNotStart from "./WineNotStart.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WineNotStart />
  </StrictMode>
);
