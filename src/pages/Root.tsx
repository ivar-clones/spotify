import { Navbar } from "@/components/internal/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import Callback from "./Callback";
import { Button } from "@/components/ui/button";
import { House, Search } from "lucide-react";

export const Root = () => {
  return (
    <div className="rounded-lg flex w-full h-full">
      <div className="rounded-lg flex flex-col my-2 mx-1 w-16 md:w-64 lg:w-96">
        <div className="mb-1 flex flex-col p-2 gap-2 rounded-lg bg-muted">
          <Button
            className="flex justify-start gap-4 hover:font-bold"
            variant="secondary"
          >
            <House className="w-full md:w-fit" />
            <div className="hidden md:block text-lg">Home</div>
          </Button>
          <Button
            className="flex justify-start gap-4 hover:font-bold"
            variant="secondary"
          >
            <Search className="w-full md:w-fit" />
            <div className="hidden md:block text-lg">Search</div>
          </Button>
        </div>
        <div className="mt-1 flex-grow flex-row overflow-y-auto bg-muted rounded-lg p-2">
          <div className="font-semibold">Bottom Left Items</div>
          <div className="font-semibold">Bottom Left Items</div>
          <div className="font-semibold">Bottom Left Items</div>
          <div className="font-semibold">Bottom Left Items</div>
          <div className="font-semibold">Bottom Left Items</div>
          <div className="font-semibold">Bottom Left Items</div>
          <div className="font-semibold">Bottom Left Items</div>
          <div className="font-semibold">Bottom Left Items</div>
          <div className="font-semibold">Bottom Left Items</div>
          <div className="font-semibold">Bottom Left Items</div>
          <div className="font-semibold">Bottom Left Items</div>
          <div className="font-semibold">Bottom Left Items</div>
          <div className="font-semibold">Bottom Left Items</div>
          <div className="font-semibold">Bottom Left Items</div>
          <div className="font-semibold">Bottom Left Items</div>
          <div className="font-semibold">Bottom Left Items</div>
          <div className="font-semibold">Bottom Left Items</div>
          <div className="font-semibold">Bottom Left Items</div>
          <div className="font-semibold">Bottom Left Items</div>
          <div className="font-semibold">Bottom Left Items</div>
          <div className="font-semibold">Bottom Left Items</div>
          <div className="font-semibold">Bottom Left Items</div>
          <div className="font-semibold">Bottom Left Items</div>
          <div className="font-semibold">Bottom Left Items</div>
          <div className="font-semibold">Bottom Left Items</div>
          <div className="font-semibold">Bottom Left Items</div>
          <div className="font-semibold">Bottom Left Items</div>
          <div className="font-semibold">Bottom Left Items</div>
          <div className="font-semibold">Bottom Left Items</div>
          <div className="font-semibold">Bottom Left Items</div>
          <div className="font-semibold">Bottom Left Items</div>
          <div className="font-semibold">Bottom Left Items</div>
          <div className="font-semibold">Bottom Left Items</div>
          <div className="font-semibold">Bottom Left Items</div>
          <div className="font-semibold">Bottom Left Items</div>
          <div className="font-semibold">Bottom Left Items</div>
          <div className="font-semibold">Bottom Left Items</div>
          <div className="font-semibold">Bottom Left Items</div>
          <div className="font-semibold">Bottom Left Items</div>
          <div className="font-semibold">Bottom Left Items</div>
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
