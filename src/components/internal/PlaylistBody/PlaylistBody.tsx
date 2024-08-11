import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";
import { timeFormatterInMinSeconds } from "@/lib/utils";
import {
  PlayIcon,
  PlusCircleIcon,
  MoreHorizontalIcon,
  ListIcon,
  Clock3Icon,
  AlignJustifyIcon,
} from "lucide-react";
import { useState } from "react";
import { PlaylistBodyProps } from "./PlaylistBodyProps.interface";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const PlaylistBody = (props: PlaylistBodyProps) => {
  const { tracks } = props;
  const [isSticky, setIsSticky] = useState(false);
  const [listView, setListView] = useState(true);

  const handleScroll = (e: any) => {
    if (e.target.scrollTop === 0) {
      setIsSticky(false);
    } else {
      setIsSticky(true);
    }
  };

  return (
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="text-muted-foreground hover:bg-transparent hover:text-primary p-0"
              >
                List
                <ListIcon className="ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40">
              <DropdownMenuLabel>View as</DropdownMenuLabel>
              <DropdownMenuCheckboxItem
                checked={!listView}
                onCheckedChange={() => {
                  setListView(false);
                }}
              >
                <Button
                  variant="ghost"
                  className="hover:text-primary p-0 h-fit"
                >
                  <AlignJustifyIcon className="mr-2" />
                  Compact
                </Button>
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={listView}
                onCheckedChange={() => {
                  setListView(true);
                }}
              >
                <Button
                  variant="ghost"
                  className="hover:text-primary p-0 h-fit"
                >
                  <ListIcon className="mr-2" />
                  List
                </Button>
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="mt-4">
        <Table>
          <TableHeader
            className={`sticky z-50 ${isSticky ? "bg-muted -top-5" : ""}`}
          >
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-[5%] text-right">#</TableHead>
              <TableHead className={`${listView ? "w-[40%]" : "w-[30%]"}`}>
                Title
              </TableHead>
              {!listView ? (
                <TableHead className="w-[40%]">Artist</TableHead>
              ) : undefined}
              <TableHead className="w-[40%]">Album</TableHead>
              <TableHead className="w-[5%]">
                <Clock3Icon size={16} />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tracks.map((track, index) => (
              <TableRow key={track.id} className="hover:bg-muted border-none">
                <TableCell className="text-right text-muted-foreground rounded-tl-lg rounded-bl-lg">
                  {index + 1}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  <div className="flex flex-row gap-3 items-center">
                    {listView ? (
                      <Avatar className="rounded-lg h-10 w-10">
                        <AvatarImage src={track.image.url} />
                      </Avatar>
                    ) : undefined}
                    <div className="flex flex-col">
                      <div className="line-clamp-1 overflow-ellipsis text-primary">
                        {track.name}
                      </div>
                      {listView ? (
                        <div className="line-clamp-1 overflow-ellipsis">
                          {track.artists}
                        </div>
                      ) : undefined}
                    </div>
                  </div>
                </TableCell>
                {!listView ? (
                  <TableCell className="text-muted-foreground line-clamp-1 overflow-ellipsis">
                    {track.artists}
                  </TableCell>
                ) : undefined}
                <TableCell className="text-muted-foreground">
                  {track.albumName}
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
  );
};
