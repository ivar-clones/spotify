import { Skeleton } from "@/components/ui/skeleton";

export const PlaylistHeaderLoading = () => {
  return (
    <div className="h-64 flex flex-col justify-end p-4">
      <div className="flex flex-row gap-2 items-end">
        <Skeleton className="h-40 w-40 rounded-lg" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-20 w-60" />
          <Skeleton className="h-20 w-96" />
          <div className="flex flex-row gap-2">
            <Skeleton className="h-10 w-20" />
            <Skeleton className="h-10 w-20" />
          </div>
        </div>
      </div>
    </div>
  );
};
