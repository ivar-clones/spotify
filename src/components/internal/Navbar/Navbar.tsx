import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useContext, useEffect, useState } from "react";
import { SpotifyContext } from "@/providers/SpotifyProvider";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

export const Navbar = () => {
  const { logout, client } = useContext(SpotifyContext);
  const [userProfile, setUserProfile] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (client) {
      client.getUserProfile().then((profile) => setUserProfile(profile));
    }
  }, [client]);

  return (
    <div className="flex flex-col w-full px-4 pt-2 rounded-lg rounded-b-none sticky top-0 right-0 left-0 gap-2">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2">
          <Avatar
            className={`h-8 w-8 bg-background items-center justify-center pr-0.5 ${
              location.key !== "default"
                ? "cursor-pointer"
                : "cursor-not-allowed"
            }`}
            onClick={() => location.key !== "default" && navigate(-1)}
          >
            <ChevronLeft
              className={
                location.key === "default" ? "text-muted-foreground" : ""
              }
            />
          </Avatar>
          <Avatar
            className={`h-8 w-8 bg-background items-center justify-center pl-0.5 ${
              location.key !== "default"
                ? "cursor-pointer"
                : "cursor-not-allowed"
            }`}
            onClick={() => location.key !== "default" && navigate(1)}
          >
            <ChevronRight
              className={
                location.key === "default" ? "text-muted-foreground" : ""
              }
            />
          </Avatar>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                <AvatarFallback className="bg-background">SC</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">
                  {userProfile?.["display_name"]}
                </p>
                <p className="text-xs leading-none text-muted-foreground">
                  {userProfile?.["email"]}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={logout}>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex flex-row gap-2">
        <Badge className="h-8">All</Badge>
        <Badge className="h-8">Music</Badge>
        <Badge className="h-8">Podcasts</Badge>
      </div>
    </div>
  );
};
