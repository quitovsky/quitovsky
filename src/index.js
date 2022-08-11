import {createRoot} from "react-dom/client";
import React from "react";
import App from "./src/App";

createRoot(document.querySelector("#root")).render(<React.StrictMode><App/></React.StrictMode>)