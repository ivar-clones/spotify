import { Navbar } from "@/components/internal/Navbar/Navbar";
import { PlaylistHeader } from "@/components/internal/PlaylistHeader/PlaylistHeader";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { timeFormatterInMinSeconds } from "@/lib/utils";
import { usePlaylistDetail } from "@/services/hooks/use-playlist-detail";
import {
  PlayIcon,
  PlusCircleIcon,
  MoreHorizontalIcon,
  ListIcon,
  Clock3Icon,
} from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const Playlist = () => {
  const { id } = useParams();
  const [isSticky, setIsSticky] = useState(false);

  const { data, isLoading: isLoadingPlaylistDetail } = usePlaylistDetail(id);

  // ts-ignore
  const handleScroll = (e: any) => {
    if (e.target.scrollTop === 0) {
      setIsSticky(false);
    } else {
      setIsSticky(true);
    }
  };

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
      <div
        className="h-full rounded-b-lg p-4 overflow-y-auto"
        onScroll={handleScroll}
      >
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-4 items-center">
            <Button
              size="icon"
              className="rounded-full h-14 w-14 bg-green-500 border-none hover:bg-green-400 hover:scale-110"
            >
              <PlayIcon fill="bg-black" size={24} />
            </Button>
            <Button
              size="icon"
              className="rounded-full bg-transparent hover:bg-transparent"
            >
              <PlusCircleIcon
                className="text-muted-foreground hover:text-primary"
                size={32}
              />
            </Button>
            <Button
              size="icon"
              className="rounded-full bg-transparent hover:bg-transparent"
            >
              <MoreHorizontalIcon
                className="text-muted-foreground hover:text-primary"
                size={28}
              />
            </Button>
          </div>
          <div className="flex flex-row items-center">
            <Button
              variant="ghost"
              className="text-muted-foreground hover:bg-transparent hover:text-primary p-0"
            >
              List
              <ListIcon className="ml-2" />
            </Button>
          </div>
        </div>
        <div className="mt-4">
          <Table>
            <TableHeader
              className={`sticky z-50 ${isSticky ? "bg-muted -top-5" : ""}`}
            >
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-[5%] text-right">#</TableHead>
                <TableHead className="w-[40%]">Title</TableHead>
                <TableHead className="w-[40%]">Album</TableHead>
                <TableHead className="w-[5%]">
                  <Clock3Icon size={16} />
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.tracks.map((track, index) => (
                <TableRow key={track.id} className="hover:bg-muted border-none">
                  <TableCell className="text-right text-muted-foreground rounded-tl-lg rounded-bl-lg">
                    {index + 1}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    <div className="flex flex-row gap-3 items-center">
                      <Avatar className="rounded-lg h-10 w-10">
                        <AvatarImage src={track.image.url} />
                      </Avatar>
                      <div className="flex flex-col">
                        <div className="line-clamp-1 overflow-ellipsis text-primary">
                          {track.name}
                        </div>
                        <div className="line-clamp-1 overflow-ellipsis">
                          {track.artists}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    <div>{track.albumName}</div>
                  </TableCell>
                  <TableCell className="text-muted-foreground rounded-tr-lg rounded-br-lg">
                    <div>{timeFormatterInMinSeconds(track.duration)}</div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};
