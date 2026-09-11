import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RadialRevealPreview from "./components/originkit/RadialRevealPreview";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RadialRevealPreview />
  </StrictMode>
);
