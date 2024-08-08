import { PlaylistCard } from "../PlaylistCard/PlaylistCard";
import { CategoryProps } from "./CategoryProps.interface";

export const Category = (props: CategoryProps) => {
  const { category } = props;
  return (
    <div className="flex flex-col mt-8">
      <div className="flex flex-row justify-between">
        <span className="text-2xl">{category.name}</span>
        <span className="text-sm text-muted-foreground hover:underline">
          Show all
        </span>
      </div>
      <div className="grid grid-rows-[repeat(1,minmax(0,1fr))] grid-cols-[repeat(auto-fill,minmax(160px,1fr))] auto-rows-[0px] overflow-hidden">
        {category.playlists.map((playlist, index) => (
          <PlaylistCard key={`${playlist.id}_${index}`} playlist={playlist} />
        ))}
      </div>
    </div>
  );
};
