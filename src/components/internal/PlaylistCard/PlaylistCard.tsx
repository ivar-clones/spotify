import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaylistCardProps } from "./PlaylistCardProps.interface";

export const PlaylistCard = (props: PlaylistCardProps) => {
  const { playlist, variant = "grid" } = props;

  if (variant === "grid") {
    return (
      <div className="min-h-fit w-40 rounded-lg p-2 hover:bg-muted flex flex-col gap-1 overflow-hidden">
        <Avatar className="rounded-sm h-36 w-full">
          <AvatarImage src={playlist.images?.[0].url} className="object-fill" />
        </Avatar>
        <div className="text-ellipsis line-clamp-2">{playlist.name}</div>
        <div className="text-ellipsis line-clamp-2 text-muted-foreground text-sm">
          {playlist.description}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-row justify-start items-center w-full gap-2 rounded-lg p-2 hover:cursor-pointer hover:bg-background max-sm:justify-center max-sm:p-0">
      <Avatar className="rounded-sm">
        <AvatarImage src={playlist.images?.[0].url} className="object-fill" />
        <AvatarFallback>MP</AvatarFallback>
      </Avatar>
      <div className="flex flex-col justify-between max-sm:hidden">
        <div className="text-ellipsis line-clamp-1">{playlist.name}</div>
        <div className="text-muted-foreground">Playlist</div>
      </div>
    </div>
  );
};
