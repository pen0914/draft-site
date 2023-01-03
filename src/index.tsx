import { StrictMode } from "react";
import ReactDom from "react-dom";

import App from "./App";
import { ItemProvider } from "./provider/ItemProvider";

ReactDom.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
