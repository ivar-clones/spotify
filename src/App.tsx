import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { SpotifyProvider } from "@/providers/SpotifyProvider";
import HomePage from "@/pages/HomePage";
import CallbackPage from "@/pages/CallbackPage";
import { ThemeProvider } from "./providers/ThemeProvider";

const App: React.FC = () => (
  <Router>
    <SpotifyProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/callback" element={<CallbackPage />} />
        </Routes>
      </ThemeProvider>
    </SpotifyProvider>
  </Router>
);

export default App;
