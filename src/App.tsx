import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { SpotifyProvider } from "@/providers/SpotifyProvider";
import Callback from "@/pages/Callback";
import { ThemeProvider } from "./providers/ThemeProvider";
import Main from "@/pages/Main";

const App: React.FC = () => (
  <Router>
    <SpotifyProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/callback" element={<Callback />} />
        </Routes>
      </ThemeProvider>
    </SpotifyProvider>
  </Router>
);

export default App;
