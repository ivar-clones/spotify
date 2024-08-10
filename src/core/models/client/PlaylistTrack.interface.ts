import { Image } from "../shared/Image.interface";

export interface PlaylistTrack {
  readonly id: string;
  readonly image: Image;
  readonly uri: string;
  readonly duration: number;
}
