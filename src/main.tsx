import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as Element).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// TODO list:
// 1. package.json metadata
// 2. stylelint
// 3. stylelint-config-prettier
// 4. npx eslint-config-prettier
// 5. self made stuff
