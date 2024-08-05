import { Badge } from "@/components/ui/badge";
import { LibraryIcon } from "lucide-react";
import { useState } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { useUserPlaylists } from "@/services/hooks/use-user-playlists";
import { PlaylistCard } from "../PlaylistCard/PlaylistCard";

export const Library = () => {
  const [filter, setFilter] = useState<"playlists" | "albums" | "artists">(
    "playlists"
  );
  const { data: userPlaylists } = useUserPlaylists();

  return (
    <div className="flex flex-col bg-muted rounded-lg w-full h-full p-4 max-sm:py-4 max-sm:px-0 max-sm:-ml-1">
      <div className="flex flex-row justify-start items-center gap-2 ml-1 w-full max-sm:justify-center">
        <LibraryIcon className="text-muted-foreground" />
        <div className="text-lg text-muted-foreground font-bold max-sm:hidden">
          Your Library
        </div>
      </div>
      <div className="flex flex-row gap-2 py-4 max-sm:hidden">
        <Badge
          variant={filter === "playlists" ? "default" : "secondary"}
          className="h-8 cursor-pointer"
          onClick={() => setFilter("playlists")}
        >
          Playlists
        </Badge>
        <Badge
          variant={filter === "artists" ? "default" : "secondary"}
          className="h-8 cursor-pointer"
          onClick={() => setFilter("artists")}
        >
          Artists
        </Badge>
        <Badge
          variant={filter === "albums" ? "default" : "secondary"}
          className="h-8 cursor-pointer"
          onClick={() => setFilter("albums")}
        >
          Albums
        </Badge>
      </div>
      <SearchBar />
      <div className="pt-2 mt-2 pr-2 w-full flex flex-col items-center overflow-y-auto max-h-[80%] max-sm:justify-center max-sm:ml-2 max-sm:gap-4">
        {userPlaylists?.map((playlist) => (
          <PlaylistCard key={playlist.id} variant="list" playlist={playlist} />
        ))}
      </div>
    </div>
  );
};
