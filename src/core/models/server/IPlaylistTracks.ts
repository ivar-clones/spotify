import { IPlaylistTrackItem } from "./PlaylistTrackItem.interface";

export interface IPlaylistTracks {
  readonly items: IPlaylistTrackItem[];
  readonly total: number;
}
