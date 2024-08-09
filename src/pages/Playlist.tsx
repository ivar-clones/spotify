import { useParams } from "react-router-dom";

export const Playlist = () => {
  const { id } = useParams();
  return <div>playlist goes here: {id}</div>;
};
