import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { SpotifyContext } from "@/providers/SpotifyProvider";

export const useUserPlaylists = (limit?: number) => {
  const { client } = useContext(SpotifyContext);

  return useQuery({
    queryKey: ["playlists", limit],
    queryFn: () => client?.getUserPlaylists(limit),
  });
};
