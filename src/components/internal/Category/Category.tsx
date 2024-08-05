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
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2">
        {category.playlists.map((playlist, index) => (
          <PlaylistCard key={`${playlist.id}_${index}`} playlist={playlist} />
        ))}
      </div>
    </div>
  );
};
