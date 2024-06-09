export function HomeLoading() {
  return (
    <div className="flex size-full flex-col items-center justify-center lg:flex-row lg:justify-between">
      <div className="flex h-max min-h-12 w-full min-w-max flex-col items-center justify-center gap-2 border py-2 sm:h-1/3 sm:flex-row  md:size-full">
        loading...
      </div>
      <div className="flex h-max w-full min-w-12 flex-col items-center justify-center gap-2 py-2 sm:h-1/3 sm:flex-row md:size-full ">
        loading...
      </div>
      <div className="bg-green flex h-max w-full min-w-12 flex-col items-center justify-center gap-2 py-2 sm:h-1/3 sm:flex-row md:size-full">
        loading...
      </div>
    </div>
  );
}
