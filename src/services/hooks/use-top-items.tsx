import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { SpotifyContext } from "@/providers/SpotifyProvider";

export const useTopArtists = () => {
  const { client } = useContext(SpotifyContext);

  return useQuery({
    queryKey: ["top-artists"],
    queryFn: () => client?.getTopArtists(),
  });
};
