//importeren React
import React from "react";
//Importeren react DOM
import ReactDOM from "react-dom/client";
//Importeren App
import App from "./App/App";
//Variabelen die we koppelen aan de root
const root = ReactDOM.createRoot(document.getElementById("root"));
//renderen variabelen
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);