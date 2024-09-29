import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRoutes from "router";
import { FavoritesProvider } from "context/FavoritesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FavoritesProvider>
      <AppRoutes />
    </FavoritesProvider>
  </React.StrictMode>
);
