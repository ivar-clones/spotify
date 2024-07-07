import { Navbar } from "@/components/internal/Navbar/Navbar";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";

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
        <Navbar />
        <div className="flex h-full items-center justify-center p-6 bg-muted rounded-lg rounded-t-none">
          <span className="font-semibold">Right</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
