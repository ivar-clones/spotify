import { Image } from "../shared/Image.interface";

export interface ITopArtist {
  readonly id: string;
  readonly images: Image[];
  readonly name: string;
}
