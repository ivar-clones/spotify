import { Navbar } from "@/components/internal/Navbar/Navbar";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Home } from "./Home";
import Callback from "./Callback";
import { HomeIcon, SearchIcon } from "lucide-react";
import { Library } from "@/components/internal/Library/Library";
import { Playlist } from "./Playlist";

export const Root = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="rounded-lg flex w-full h-full">
      <div className="rounded-lg flex px-1 flex-col my-2 mx-1 w-16 md:min-w-64 lg:min-w-[350px] xl:max-w-[650px] 2xl:max-w-[900px]">
        <div className="mb-1 flex flex-col p-2 gap-2 rounded-lg bg-muted w-full">
          <div
            className="flex flex-row justify-start items-center py-2 px-4 gap-4 w-full h-full max-sm:justify-center max-sm:px-0 max-sm:py-2 cursor-pointer"
            onClick={() =>
              location.pathname !== "/" &&
              navigate("/", { state: { from: location.pathname } })
            }
          >
            <HomeIcon className="hover:stroke-[3px]" />
            <div className="text-md max-sm:hidden hover:font-bold">Home</div>
          </div>
          <div
            className="flex flex-row justify-start items-center py-2 px-4 gap-4 w-full max-sm:justify-center max-sm:px-0 max-sm:py-2 cursor-pointer"
            onClick={() =>
              location.pathname !== "/search" &&
              navigate("/search", { state: { from: location.pathname } })
            }
          >
            <SearchIcon className="hover:stroke-[3px]" />
            <div className="text-md max-sm:hidden hover:font-bold">Search</div>
          </div>
        </div>
        <div className="mt-1 flex-grow flex-row bg-muted rounded-lg p-2 overflow-y-hidden">
          <Library />
        </div>
      </div>
      <div className="my-2 rounded-lg ml-1 mr-2 flex-grow">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/playlist/:id" element={<Playlist />} />
          <Route path="/callback" element={<Callback />} />
        </Routes>
      </div>
    </div>
  );
};
