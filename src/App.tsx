import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { SpotifyProvider } from "@/providers/SpotifyProvider";
import { ThemeProvider } from "./providers/ThemeProvider";
import Main from "@/pages/Main";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
      refetchOnWindowFocus: false,
    },
  },
});

const App: React.FC = () => (
  <Router>
    <QueryClientProvider client={queryClient}>
      <SpotifyProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Main />
        </ThemeProvider>
      </SpotifyProvider>
    </QueryClientProvider>
  </Router>
);

export default App;
