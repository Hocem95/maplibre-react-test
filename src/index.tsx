import * as React from "react";
import { createRoot } from 'react-dom/client';
import Map from "./components/map";
import App from "./App";

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <div>
    <App />
    <Map />
  </div>
);