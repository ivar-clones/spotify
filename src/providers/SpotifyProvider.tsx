import { getAuthorizationUrl, getToken, refreshToken } from "@/lib/auth";
import SpotifyClient from "@/services/spotify/spotify.service";
import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface SpotifyContextType {
  client: SpotifyClient | null;
  login: () => void;
  logout: () => void;
}

export const SpotifyContext = createContext<SpotifyContextType>({
  client: null,
  login: () => {},
  logout: () => {},
});

export const SpotifyProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [client, setClient] = useState<SpotifyClient | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const initializeClient = useCallback(
    (accessToken: string, expiresIn: number) => {
      const spotifyClient = new SpotifyClient(accessToken);
      setClient(spotifyClient);
      const expiresAt = Date.now() + expiresIn * 1000;
      localStorage.setItem("spotify_expires_at", expiresAt.toString());
    },
    []
  );

  useEffect(() => {
    const storedAccessToken = localStorage.getItem("spotify_access_token");
    const storedExpiresAt = localStorage.getItem("spotify_expires_at");

    if (storedAccessToken && storedExpiresAt) {
      const expiresAt = parseInt(storedExpiresAt, 10);
      if (Date.now() < expiresAt) {
        const expiresIn = (expiresAt - Date.now()) / 1000;
        initializeClient(storedAccessToken, expiresIn);
      } else {
        refreshToken().then((token) => {
          if (token) {
            initializeClient(token.access_token, token.expires_in);
          } else {
            navigate("/", { replace: true });
          }
        });
      }
    }

    const urlParams = new URLSearchParams(location.search);
    const code = urlParams.get("code");
    if (code) {
      getToken(code).then((token) => {
        initializeClient(token.access_token, token.expires_in);
        navigate("/", { replace: true });
      });
    }
  }, [location, navigate, initializeClient]);

  useEffect(() => {
    const storedExpiresAt = localStorage.getItem("spotify_expires_at");
    if (!storedExpiresAt) return;

    const expiresAt = parseInt(storedExpiresAt, 10);
    const timeUntilExpiry = expiresAt - Date.now();
    const refreshTime =
      timeUntilExpiry > 60000 ? timeUntilExpiry - 60000 : 5000;

    const refreshTimeout = setTimeout(() => {
      refreshToken().then((token) => {
        if (token) {
          initializeClient(token.access_token, token.expires_in);
        } else {
          setClient(null);
          localStorage.removeItem("spotify_access_token");
          localStorage.removeItem("spotify_refresh_token");
          localStorage.removeItem("spotify_expires_at");
        }
      });
    }, refreshTime);

    return () => clearTimeout(refreshTimeout);
  }, [client, initializeClient]);

  const login = async () => {
    const authUrl = await getAuthorizationUrl();
    window.location.href = authUrl;
  };

  const logout = () => {
    setClient(null);
    localStorage.removeItem("spotify_access_token");
    localStorage.removeItem("spotify_refresh_token");
    localStorage.removeItem("spotify_expires_at");
  };

  return (
    <SpotifyContext.Provider value={{ client, login, logout }}>
      {children}
    </SpotifyContext.Provider>
  );
};
