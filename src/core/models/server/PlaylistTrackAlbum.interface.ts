import { Image } from "../shared/Image.interface";

export interface IPlaylistTrackAlbum {
  readonly images: Image[];
  readonly name: string;
}
