import { Image } from "../shared/Image.interface";

export interface PlaylistTrack {
  readonly id: string;
  readonly name: string;
  readonly image: Image;
  readonly uri: string;
  readonly albumName: string;
  readonly duration: number;
  readonly artists: string;
}
