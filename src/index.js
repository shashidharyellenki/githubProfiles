import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { Test } from "./Test";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App title="Welcome to github profiles!!" />
  </StrictMode>
);
