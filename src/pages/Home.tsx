import { Category } from "@/components/internal/Category/Category";
import { CategoryLoading } from "@/components/internal/Category/CategoryLoading";
import { InfoTile } from "@/components/internal/InfoTile/InfoTile";
import { InfoTileLoading } from "@/components/internal/InfoTile/InfoTileLoading";
import { Navbar } from "@/components/internal/Navbar/Navbar";
import { useCategories } from "@/services/hooks/use-categories";
import { useUserPlaylists } from "@/services/hooks/use-user-playlists";

export const Home = () => {
  const { data: userPlaylists, isLoading: isUserPlaylistsLoading } =
    useUserPlaylists(8);
  const { data: categories, isLoading: isCategoriesLoading } = useCategories();

  return (
    <div className="flex h-full flex-col rounded-lg bg-gradient-to-b from-0% via-10% to-60% from-indigo-400">
      <Navbar />
      <div className="flex flex-col py-2 px-4 overflow-y-auto">
        <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
          {isUserPlaylistsLoading ? (
            <InfoTileLoading />
          ) : (
            userPlaylists?.map((item) => <InfoTile key={item.id} info={item} />)
          )}
        </div>
        {isCategoriesLoading ? (
          <CategoryLoading />
        ) : (
          categories?.map((category) => (
            <Category key={category.id} category={category} />
          ))
        )}
      </div>
    </div>
  );
};
