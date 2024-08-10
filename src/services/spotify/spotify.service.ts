// src/spotifyClient.ts
import { ITopArtist } from "@/core/models/server/TopArtist.interface";
import axios, { AxiosInstance } from "axios";
import { SpotifyMapper } from "./spotify.mapper";
import { Entity } from "@/core/models/client/Entity";
import { IPlaylist } from "@/core/models/server/Playlist.interface";
import { CategoryPlaylist } from "@/core/models/client/CategoryPlaylist.interface";
import { ICategories } from "@/core/models/server/Categories.interface";
import { IPlaylists } from "@/core/models/server/Playlists.interface";
import { IPlaylistDetailResponse } from "@/core/models/server/PlaylistDetailResponse.interface";
import { PlaylistDetail } from "@/core/models/client/PlaylistDetail.interface";

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

  getUserPlaylists = async (limit?: number): Promise<Entity[]> => {
    const endpointWithLimit = !limit
      ? "/me/playlists"
      : `/me/playlists?limit=${limit}`;
    const response = await this.client.get(endpointWithLimit);
    return response.data.items.map((item: IPlaylist) =>
      this.mapper.fromServerPlaylistToClientEntity(item)
    );
  };

  getCategories = async (): Promise<CategoryPlaylist[]> => {
    const categories = await this.client.get<ICategories>(
      "/browse/categories?limit=10"
    );
    const playlistRequests = categories.data.categories.items.map((category) =>
      this.client.get<IPlaylists>(
        `/browse/categories/${category.id}/playlists?limit=8`
      )
    );
    const playlistResponses = await Promise.all(playlistRequests);

    return playlistResponses.map((playlistResponse, index) => {
      return {
        id: categories.data.categories.items[index].id,
        name: categories.data.categories.items[index].name,
        playlists: playlistResponse.data.playlists.items.map((playlist) =>
          this.mapper.fromServerPlaylistToClientEntity(playlist)
        ),
      };
    });
  };

  getPlaylist = async (playlistId?: string): Promise<PlaylistDetail> => {
    const response = await this.client.get<IPlaylistDetailResponse>(
      `/playlists/${playlistId}`
    );

    return this.mapper.fromServerPlaylistDetailResponseToClientPlaylistDetail(
      response.data
    );
  };

  // Add more methods to interact with the Spotify API as needed
}

export default SpotifyClient;
