import { Navbar } from "@/components/internal/Navbar/Navbar";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import Callback from "./Callback";

export const Root = () => {
  return (
    <ResizablePanelGroup direction="horizontal" className="rounded-lg">
      <ResizablePanel
        defaultSize={20}
        maxSize={80}
        minSize={5}
        className="rounded-lg my-2 mx-1"
      >
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25} className="mb-1">
            <div className="flex h-full items-center justify-center p-6 rounded-lg bg-muted">
              <span className="font-semibold">Top Left</span>
            </div>
          </ResizablePanel>
          <ResizablePanel defaultSize={75} className="mt-1">
            <div className="flex h-full items-center justify-center p-6 rounded-lg bg-muted">
              <span className="font-semibold">Bottom Left</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle className="bg-background hover:bg-secondary-foreground my-2 w-[1px]" />
      <ResizablePanel
        defaultSize={80}
        maxSize={95}
        minSize={20}
        className="my-2 rounded-lg mx-1"
      >
        <div className="flex h-full flex-col rounded-lg rounded-t-none bg-gradient-to-b via-10% to-15% from-indigo-400">
          <Navbar />
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/callback" element={<Callback />} />
          </Routes>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
