// src/spotifyClient.ts
import { ITopArtist } from "@/core/models/server/TopArtist.interface";
import axios, { AxiosInstance } from "axios";
import { SpotifyMapper } from "./spotify.mapper";
import { Entity } from "@/core/models/client/Entity";
import { IPlaylist } from "@/core/models/server/Playlist.interface";

export class SpotifyClient {
  private client: AxiosInstance;
  private mapper: SpotifyMapper;

  constructor(accessToken: string) {
    this.client = axios.create({
      baseURL: "https://api.spotify.com/v1",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    this.mapper = new SpotifyMapper();
  }

  getUserProfile = async () => {
    const response = await this.client.get("/me");
    return response.data;
  };

  getTopArtists = async (): Promise<Entity[]> => {
    const response = await this.client.get("/me/top/artists?limit=8");
    return response.data.items.map((item: ITopArtist) =>
      this.mapper.fromServerTopArtistToClientEntity(item)
    );
  };

  getUserPlaylists = async (): Promise<Entity[]> => {
    const response = await this.client.get("/me/playlists?limit=8");
    return response.data.items.map((item: IPlaylist) =>
      this.mapper.fromServerPlaylistToClientEntity(item)
    );
  };

  // Add more methods to interact with the Spotify API as needed
}

export default SpotifyClient;
