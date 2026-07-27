import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.jsx"));
const TermsOfService = lazy(() => import("./pages/TermsOfService.jsx"));
import HomePage from "./pages/HomePage.jsx";

function App() {
  return (
    <>
      <div className="bg-black relative min-h-screen">
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-[200px] -left-[200px] w-[600px] h-[600px] rounded-full bg-[#4CAF4F]/8 blur-[140px]" />
          <div className="absolute -top-[100px] -right-[200px] w-[500px] h-[500px] rounded-full bg-[#4CAF4F]/6 blur-[120px]" />
          <div className="absolute top-[45%] -left-[150px] w-[400px] h-[400px] rounded-full bg-[#4CAF4F]/5 blur-[100px]" />
          <div className="absolute bottom-[10%] -right-[150px] w-[450px] h-[450px] rounded-full bg-[#4CAF4F]/7 blur-[120px]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#4CAF4F]/5 blur-[100px]" />
        </div>

        <div className="relative z-10">
          <main>
            <Suspense fallback={null}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
