import { Navbar } from "@/components/internal/Navbar/Navbar";
import { PlaylistHeader } from "@/components/internal/PlaylistHeader/PlaylistHeader";
import { Skeleton } from "@/components/ui/skeleton";
import { usePlaylistDetail } from "@/services/hooks/use-playlist-detail";
import { useParams } from "react-router-dom";

export const Playlist = () => {
  const { id } = useParams();

  const { data, isLoading: isLoadingPlaylistDetail } = usePlaylistDetail(id);

  if (isLoadingPlaylistDetail || !data) {
    return <Skeleton className="h-full w-full" />;
  }

  return (
    <div
      className={`flex h-full flex-col rounded-lg ${
        !data?.image
          ? "bg-gradient-to-b via-10% to-15% from-indigo-400"
          : "bg-gradient-to-b from-0% to-60% from-indigo-400"
      }`}
    >
      <Navbar />
      <PlaylistHeader
        name={data.name}
        description={data.description}
        type={data.type}
        totalDuration={data.totalDuration}
        total={data.total}
        image={data.image.url}
      />
      <div className="h-full rounded-b-lg p-4 overflow-y-auto">
        <div>testing</div>
        <div>testing</div>
        <div>testing</div>
        <div>testing</div>
        <div>testing</div>
        <div>testing</div>
        <div>testing</div>
        <div>testing</div>
        <div>testing</div>
        <div>testing</div>
        <div>testing</div>
        <div>testing</div>
        <div>testing</div>
        <div>testing</div>
        <div>testing</div>
        <div>testing</div>
        <div>testing</div>
        <div>testing</div>
        <div>testing</div>
        <div>testing</div>
        <div>testing</div>
        <div>testing</div>
        <div>testing</div>
        <div>testing</div>
        <div>testing</div>
        <div>testing</div>
        <div>testing</div>
        <div>testing</div>
        <div>testing</div>
        <div>testing</div>
        <div>testing</div>
        <div>testing</div>
        <div>testing</div>
        <div>testing</div>
        <div>testing</div>
        <div>testing</div>
      </div>
    </div>
  );
};
