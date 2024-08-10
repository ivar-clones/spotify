import { SpotifyContext } from "@/providers/SpotifyProvider";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

export const usePlaylistDetail = (playlistId?: string) => {
  const { client } = useContext(SpotifyContext);

  return useQuery({
    queryKey: ["playlist", playlistId],
    queryFn: () => client?.getPlaylist(playlistId),
    enabled: !!playlistId,
  });
};
