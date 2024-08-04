import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { SpotifyContext } from "@/providers/SpotifyProvider";

export const useUserPlaylists = () => {
  const { client } = useContext(SpotifyContext);

  return useQuery({
    queryKey: ["playlists"],
    queryFn: () => client?.getUserPlaylists(),
  });
};
