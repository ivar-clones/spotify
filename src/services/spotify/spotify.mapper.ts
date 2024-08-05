import { Entity } from "@/core/models/client/Entity";
import { IPlaylist } from "@/core/models/server/Playlist.interface";
import { ITopArtist } from "@/core/models/server/TopArtist.interface";

export class SpotifyMapper {
  fromServerTopArtistToClientEntity(server: ITopArtist): Entity {
    return {
      id: server.id,
      images: server.images,
      name: server.name,
    };
  }

  fromServerPlaylistToClientEntity(server: IPlaylist): Entity {
    return {
      id: server.id,
      images: server.images,
      name: server.name,
      description: server.description,
    };
  }
}
