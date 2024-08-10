import { Image } from "../shared/Image.interface";
import { PlaylistTrack } from "./PlaylistTrack.interface";

export interface PlaylistDetail {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly type: string;
  readonly total: number;
  readonly totalDuration: number;
  readonly image: Image;
  readonly tracks: PlaylistTrack[];
}
