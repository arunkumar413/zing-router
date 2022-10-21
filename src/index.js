import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { About } from "./About";

import App from "./App";
import { Contact } from "./Contact";
import { NumericTest } from "./NumericPath";
import { Router } from "./Router";
import { Test } from "./Test";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const routerConfig = {
  "/about": <About />,
  "/contact": <Contact />,
  "/test": <Test />,
  "/:id(\\d+)": <NumericTest />,
};

root.render(
  <StrictMode>
    <Router routerConfig={routerConfig}>
      <App />
    </Router>
  </StrictMode>
);
