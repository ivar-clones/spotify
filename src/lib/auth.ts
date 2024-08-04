// src/spotifyAuth.ts
import { generateCodeChallenge, generateRandomString } from "./pkce";
import axios from "axios";
import queryString from "query-string";
import { SCOPES } from "./const";

const clientId = import.meta.env.VITE_CLIENT_ID;
const redirectUri = import.meta.env.VITE_REDIRECT_URI;
const authEndpoint = "https://accounts.spotify.com/authorize";
const tokenEndpoint = "https://accounts.spotify.com/api/token";

interface TokenResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: string;
}

export async function getAuthorizationUrl(): Promise<string> {
  const codeVerifier = generateRandomString(128);
  localStorage.setItem("spotify_code_verifier", codeVerifier);

  const codeChallenge = await generateCodeChallenge(codeVerifier);
  const state = generateRandomString(16);

  const params = {
    client_id: clientId,
    response_type: "code",
    redirect_uri: redirectUri,
    code_challenge_method: "S256",
    code_challenge: codeChallenge,
    state: state,
    scope: SCOPES,
  };

  return `${authEndpoint}?${queryString.stringify(params)}`;
}

export async function getToken(code: string): Promise<TokenResponse> {
  const codeVerifier = localStorage.getItem("spotify_code_verifier")!;

  const response = await axios.post(
    tokenEndpoint,
    queryString.stringify({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: redirectUri,
      client_id: clientId,
      code_verifier: codeVerifier,
    }),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  const tokenData = response.data;
  localStorage.setItem("spotify_access_token", tokenData.access_token);
  localStorage.setItem("spotify_refresh_token", tokenData.refresh_token);
  localStorage.setItem(
    "spotify_expires_at",
    (Date.now() + tokenData.expires_in * 1000).toString()
  );

  return tokenData;
}

export async function refreshToken(): Promise<TokenResponse | null> {
  const refreshToken = localStorage.getItem("spotify_refresh_token");
  if (!refreshToken) {
    return null;
  }

  const response = await axios.post(
    tokenEndpoint,
    queryString.stringify({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
      client_id: clientId,
    }),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  const tokenData = response.data;
  localStorage.setItem("spotify_access_token", tokenData.access_token);
  localStorage.setItem(
    "spotify_refresh_token",
    tokenData.refresh_token || refreshToken
  );
  localStorage.setItem(
    "spotify_expires_at",
    (Date.now() + tokenData.expires_in * 1000).toString()
  );

  return tokenData;
}
