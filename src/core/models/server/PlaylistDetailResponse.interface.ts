import { Image } from "../shared/Image.interface";
import { IPlaylistTracks } from "./IPlaylistTracks";

export interface IPlaylistDetailResponse {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly images: Image[];
  readonly type: string;
  readonly tracks: IPlaylistTracks;
}
