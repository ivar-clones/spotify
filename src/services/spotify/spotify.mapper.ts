import { Entity } from "@/core/models/client/Entity";
import { PlaylistDetail } from "@/core/models/client/PlaylistDetail.interface";
import { IPlaylist } from "@/core/models/server/Playlist.interface";
import { IPlaylistDetailResponse } from "@/core/models/server/PlaylistDetailResponse.interface";
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

  fromServerPlaylistDetailResponseToClientPlaylistDetail(
    server: IPlaylistDetailResponse
  ): PlaylistDetail {
    return {
      id: server.id,
      name: server.name,
      description: server.description,
      type: server.type,
      total: server.tracks.total,
      totalDuration: server.tracks.items.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.track.duration_ms,
        0
      ),
      tracks: server.tracks.items.map((item) => {
        return {
          id: item.track.id,
          image: item.track.album.images[0],
          uri: item.track.uri,
          duration: item.track.duration_ms,
        };
      }),
    };
  }
}
