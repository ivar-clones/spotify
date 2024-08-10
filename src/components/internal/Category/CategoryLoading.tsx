import { Skeleton } from "@/components/ui/skeleton";

export const CategoryLoading = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between items-center mt-10">
          <Skeleton className="w-32 h-12" />
          <Skeleton className="w-20 h-12" />
        </div>
      </div>
      <div className="grid grid-rows-[repeat(1,minmax(0,1fr))] grid-cols-[repeat(auto-fill,minmax(160px,1fr))] auto-rows-[0px] overflow-hidden">
        <Skeleton className="w-40 h-52 min-h-fit rounded-lg p-2 flex flex-col gap-1" />
        <Skeleton className="w-40 h-52 min-h-fit rounded-lg p-2 flex flex-col gap-1" />
        <Skeleton className="w-40 h-52 min-h-fit rounded-lg p-2 flex flex-col gap-1" />
        <Skeleton className="w-40 h-52 min-h-fit rounded-lg p-2 flex flex-col gap-1" />
        <Skeleton className="w-40 h-52 min-h-fit rounded-lg p-2 flex flex-col gap-1" />
        <Skeleton className="w-40 h-52 min-h-fit rounded-lg p-2 flex flex-col gap-1" />
        <Skeleton className="w-40 h-52 min-h-fit rounded-lg p-2 flex flex-col gap-1" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between items-center mt-10">
          <Skeleton className="w-32 h-12" />
          <Skeleton className="w-20 h-12" />
        </div>
      </div>
      <div className="grid grid-rows-[repeat(1,minmax(0,1fr))] grid-cols-[repeat(auto-fill,minmax(160px,1fr))] auto-rows-[0px] overflow-hidden">
        <Skeleton className="w-40 h-52 min-h-fit rounded-lg p-2 flex flex-col gap-1" />
        <Skeleton className="w-40 h-52 min-h-fit rounded-lg p-2 flex flex-col gap-1" />
        <Skeleton className="w-40 h-52 min-h-fit rounded-lg p-2 flex flex-col gap-1" />
        <Skeleton className="w-40 h-52 min-h-fit rounded-lg p-2 flex flex-col gap-1" />
        <Skeleton className="w-40 h-52 min-h-fit rounded-lg p-2 flex flex-col gap-1" />
        <Skeleton className="w-40 h-52 min-h-fit rounded-lg p-2 flex flex-col gap-1" />
        <Skeleton className="w-40 h-52 min-h-fit rounded-lg p-2 flex flex-col gap-1" />
      </div>
    </div>
  );
};
