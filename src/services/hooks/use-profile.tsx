import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { SpotifyContext } from "@/providers/SpotifyProvider";

export const useProfile = () => {
  const { client } = useContext(SpotifyContext);

  return useQuery({
    queryKey: ["profile"],
    queryFn: () => client?.getUserProfile(),
  });
};
