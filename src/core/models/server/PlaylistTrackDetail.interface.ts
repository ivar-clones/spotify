import { IPlaylistTrackAlbum } from "./PlaylistTrackAlbum.interface";
import { IPlaylistTrackArtist } from "./PlaylistTrackArtist.interface";

export interface IPlaylistTrackDetail {
  readonly id: string;
  readonly album: IPlaylistTrackAlbum;
  readonly uri: string;
  readonly name: string;
  readonly duration_ms: number;
  readonly artists: IPlaylistTrackArtist[];
}
