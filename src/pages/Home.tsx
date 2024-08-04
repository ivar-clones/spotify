import { InfoTile } from "@/components/internal/InfoTile/InfoTile";
import { useUserPlaylists } from "@/services/hooks/use-user-playlists";

export const Home = () => {
  const { data } = useUserPlaylists();

  return (
    <div className="flex flex-col py-2 px-4 overflow-y-scroll">
      <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
        {data?.map((item) => (
          <InfoTile key={item.id} info={item} />
        ))}
      </div>
    </div>
  );
};
