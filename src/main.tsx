import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "@primer/primitives/dist/css/functional/themes/light.css";
import { BaseStyles, ThemeProvider } from "@primer/react";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider colorMode="auto">
    <BaseStyles>
      <App />
    </BaseStyles>
  </ThemeProvider>
);
