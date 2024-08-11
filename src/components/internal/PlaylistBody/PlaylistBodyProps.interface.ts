import { PlaylistTrack } from "@/core/models/client/PlaylistTrack.interface";

export interface PlaylistBodyProps {
  readonly tracks: PlaylistTrack[];
}
