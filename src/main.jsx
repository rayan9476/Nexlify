import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import LenisProvider from "./components/providers/LenisProvider.jsx";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalUI from "./components/layout/GlobalUI.jsx";
import RouteChangeStairs from "./components/ui/RouteChangeStairs.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LenisProvider>
      <BrowserRouter>
        <GlobalUI>
          <RouteChangeStairs>
            <App />
          </RouteChangeStairs>
        </GlobalUI>
      </BrowserRouter>
    </LenisProvider>
  </StrictMode>,
);
