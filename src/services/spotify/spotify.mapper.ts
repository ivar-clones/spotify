import { Entity } from "@/core/models/client/Entity";
import { ITopArtist } from "@/core/models/server/TopArtist.interface";

export class SpotifyMapper {
  fromServerTopArtistToClientEntity(server: ITopArtist): Entity {
    return {
      id: server.id,
      images: server.images,
      name: server.name,
    };
  }

  fromServerPlaylistToClientEntity(server: ITopArtist): Entity {
    return {
      id: server.id,
      images: server.images,
      name: server.name,
    };
  }
}
