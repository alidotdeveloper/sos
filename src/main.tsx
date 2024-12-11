import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { PathProvider } from "./context/Path-context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PathProvider>
      <App />
    </PathProvider>
  </StrictMode>
);
