import { IPlaylistTrackAlbum } from "./PlaylistTrackAlbum.interface";

export interface IPlaylistTrackDetail {
  readonly id: string;
  readonly album: IPlaylistTrackAlbum;
  readonly uri: string;
  readonly duration_ms: number;
}
