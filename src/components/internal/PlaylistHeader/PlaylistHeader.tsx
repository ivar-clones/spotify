import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { PlaylistHeaderProps } from "./PlaylistHeaderProps.interface";
import { timeFormatterInHrsMins } from "@/lib/utils";

export const PlaylistHeader = (props: PlaylistHeaderProps) => {
  const { name, description, type, total, totalDuration, image } = props;
  return (
    <div className="h-64 flex flex-col justify-end p-4">
      <div className="flex flex-row gap-2 items-end">
        <Avatar className="h-40 w-40 rounded-lg">
          <AvatarImage src={image} />
        </Avatar>
        <div className="flex flex-col">
          <div className="text-sm capitalize">{type}</div>
          <div className="text-xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold">
            {name}
          </div>
          <div className="text-sm md:text-md mt-2">{description}</div>
          <div className="flex flex-row gap-2">
            <div className="text-sm">{total} songs</div>
            <div className="text-sm">•</div>
            <div className="text-sm text-muted-foreground">
              about {timeFormatterInHrsMins(totalDuration)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
