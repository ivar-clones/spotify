import { Navbar } from "@/components/internal/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import Callback from "./Callback";

export const Root = () => {
  return (
    <div className="rounded-lg flex w-full h-full">
      <div className="rounded-lg flex flex-col my-2 mx-1 w-16 md:w-64 lg:w-96">
        <div className="mb-1 h-32">
          <div className="flex h-full items-center justify-center p-6 rounded-lg bg-muted">
            <span className="font-semibold">Top Left</span>
          </div>
        </div>
        <div className="mt-1 flex-grow">
          <div className="flex h-full items-center justify-center p-6 rounded-lg bg-muted">
            <span className="font-semibold">Bottom Left</span>
          </div>
        </div>
      </div>
      <div className="my-2 rounded-lg mx-1 flex-grow">
        <div className="flex h-full flex-col rounded-lg rounded-t-none bg-gradient-to-b via-10% to-15% from-indigo-400">
          <Navbar />
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/callback" element={<Callback />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
