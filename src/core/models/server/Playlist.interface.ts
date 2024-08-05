import { Image } from "../shared/Image.interface";

export interface IPlaylist {
  readonly id: string;
  readonly images: Image[];
  readonly name: string;
  readonly description: string;
}
