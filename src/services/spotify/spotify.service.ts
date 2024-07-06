// src/spotifyClient.ts
import axios, { AxiosInstance } from "axios";

export class SpotifyClient {
  private client: AxiosInstance;

  constructor(accessToken: string) {
    this.client = axios.create({
      baseURL: "https://api.spotify.com/v1",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  async getUserProfile() {
    const response = await this.client.get("/me");
    return response.data;
  }

  // Add more methods to interact with the Spotify API as needed
}

export default SpotifyClient;
