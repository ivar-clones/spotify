import { Entity } from "@/core/models/client/Entity";
import { PlaylistDetail } from "@/core/models/client/PlaylistDetail.interface";
import { PlaylistTrack } from "@/core/models/client/PlaylistTrack.interface";
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
    const tracks: PlaylistTrack[] = [];
    server.tracks.items.forEach((item) => {
      if (item.track) {
        tracks.push({
          id: item.track.id,
          image: item.track.album?.images[0],
          uri: item.track.uri,
          duration: item.track.duration_ms,
        });
      }
    });
    return {
      id: server.id,
      name: server.name,
      description: server.description,
      type: server.type,
      total: server.tracks.total,
      totalDuration: server.tracks.items.reduce(
        (accumulator, currentValue) =>
          currentValue.track ? accumulator + currentValue.track.duration_ms : 0,
        0
      ),
      image: server.images[0],
      tracks: tracks,
    };
  }
}
