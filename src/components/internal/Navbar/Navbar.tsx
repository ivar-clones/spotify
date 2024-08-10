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
import { useProfile } from "@/services/hooks/use-profile";

export const Navbar = () => {
  const [filter, setFilter] = useState<"all" | "music" | "podcasts">("all");
  const { logout } = useContext(SpotifyContext);
  const [userProfile, setUserProfile] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const { data: userProfileData } = useProfile();

  useEffect(() => {
    if (userProfileData) {
      setUserProfile(userProfileData);
    }
  }, [userProfileData]);

  const isBackDisabled = location.pathname === "/";
  const isForwardDisabled =
    location.key === "default" || location.state?.from === "/";

  return (
    <div className="flex flex-col w-full px-4 py-2 rounded-lg rounded-b-none sticky top-0 right-0 left-0 gap-2">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2">
          <Avatar
            className={`h-8 w-8 bg-background items-center justify-center pr-0.5 ${
              isBackDisabled ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={() => {
              if (!isBackDisabled) {
                navigate(location.state?.from, {
                  state: { from: location.pathname },
                });
              }
            }}
          >
            <ChevronLeft
              className={isBackDisabled ? "text-muted-foreground" : ""}
            />
          </Avatar>
          <Avatar
            className={`h-8 w-8 bg-background items-center justify-center pl-0.5 ${
              isForwardDisabled ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={() =>
              !isForwardDisabled &&
              navigate(location.state?.from, {
                state: { from: location.pathname },
              })
            }
          >
            <ChevronRight
              className={isForwardDisabled ? "text-muted-foreground" : ""}
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
      {isBackDisabled ? (
        <div className="flex flex-row gap-2">
          <Badge
            variant={filter === "all" ? "default" : "secondary"}
            className="h-8 cursor-pointer"
            onClick={() => setFilter("all")}
          >
            All
          </Badge>
          <Badge
            variant={filter === "music" ? "default" : "secondary"}
            className="h-8 cursor-pointer"
            onClick={() => setFilter("music")}
          >
            Music
          </Badge>
          <Badge
            variant={filter === "podcasts" ? "default" : "secondary"}
            className="h-8 cursor-pointer"
            onClick={() => setFilter("podcasts")}
          >
            Podcasts
          </Badge>
        </div>
      ) : undefined}
    </div>
  );
};
