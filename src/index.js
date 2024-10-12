import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRoutes from "router";
import { FavoritesProvider } from "context/FavoritesContext";
import { VideosProvider } from "context/VideosContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <VideosProvider>
      <FavoritesProvider>
        <AppRoutes />
      </FavoritesProvider>
    </VideosProvider>
  </React.StrictMode>
);
