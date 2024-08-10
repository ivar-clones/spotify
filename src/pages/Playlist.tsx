import { usePlaylistDetail } from "@/services/hooks/use-playlist-detail";
import { useParams } from "react-router-dom";

export const Playlist = () => {
  const { id } = useParams();

  const { data } = usePlaylistDetail(id);

  console.log("data: ", data);

  return (
    <div className="w-full flex flex-col p-4">playlist goes here: {id}</div>
  );
};
