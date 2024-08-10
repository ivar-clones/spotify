import { Category } from "@/components/internal/Category/Category";
import { InfoTile } from "@/components/internal/InfoTile/InfoTile";
import { useCategories } from "@/services/hooks/use-categories";
import { useUserPlaylists } from "@/services/hooks/use-user-playlists";

export const Home = () => {
  const { data: userPlaylists } = useUserPlaylists(8);
  const { data: categories } = useCategories();

  return (
    <div className="flex flex-col py-2 px-4 overflow-y-scroll">
      <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
        {userPlaylists?.map((item) => (
          <InfoTile key={item.id} info={item} />
        ))}
      </div>
      {categories?.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};
