import { Navbar } from "@/components/internal/Navbar/Navbar";
import { PlaylistBody } from "@/components/internal/PlaylistBody/PlaylistBody";
import { PlaylistBodyLoader } from "@/components/internal/PlaylistBody/PlaylistBodyLoader";
import { PlaylistHeader } from "@/components/internal/PlaylistHeader/PlaylistHeader";
import { PlaylistHeaderLoading } from "@/components/internal/PlaylistHeader/PlaylistHeaderLoading";
import { usePlaylistDetail } from "@/services/hooks/use-playlist-detail";
import { useParams } from "react-router-dom";

export const Playlist = () => {
  const { id } = useParams();
  const { data, isLoading: isLoadingPlaylistDetail } = usePlaylistDetail(id);

  return (
    <div
      className={`flex h-full flex-col rounded-lg ${
        !data?.image
          ? "bg-gradient-to-b via-10% to-15% from-indigo-400"
          : "bg-gradient-to-b from-0% to-60% from-indigo-400"
      }`}
    >
      <Navbar />
      {isLoadingPlaylistDetail || !data ? (
        <PlaylistHeaderLoading />
      ) : (
        <PlaylistHeader
          name={data.name}
          description={data.description}
          type={data.type}
          totalDuration={data.totalDuration}
          total={data.total}
          image={data.image.url}
        />
      )}

      {isLoadingPlaylistDetail || !data ? (
        <PlaylistBodyLoader />
      ) : (
        <PlaylistBody tracks={data.tracks} />
      )}
    </div>
  );
};
