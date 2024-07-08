import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { SpotifyProvider } from "@/providers/SpotifyProvider";
import { ThemeProvider } from "./providers/ThemeProvider";
import Main from "@/pages/Main";

const App: React.FC = () => (
  <Router>
    <SpotifyProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Main />
      </ThemeProvider>
    </SpotifyProvider>
  </Router>
);

export default App;
