import {createRoot} from "react-dom/client";
import React from "react";
import App from "./App";

createRoot(document.querySelector("#root")).render(<React.StrictMode><App/></React.StrictMode>)