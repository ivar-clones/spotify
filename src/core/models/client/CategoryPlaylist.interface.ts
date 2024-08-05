import { Entity } from "./Entity";

export interface CategoryPlaylist {
  readonly id: string;
  readonly name: string;
  readonly playlists: Entity[];
}
