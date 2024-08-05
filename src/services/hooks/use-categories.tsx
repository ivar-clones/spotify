import { SpotifyContext } from "@/providers/SpotifyProvider";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

export const useCategories = () => {
  const { client } = useContext(SpotifyContext);

  return useQuery({
    queryKey: ["categories"],
    queryFn: () => client?.getCategories(),
  });
};
