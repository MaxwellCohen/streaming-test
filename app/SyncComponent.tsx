import { jokes } from "./jokes";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export const fiveSecondsWait = wait(300);

export async function SyncComponent({ time = 300 }: { time: number }) {
  
  return (
    <div className="h-[50vh]">
      <div className="text-lg font-medium">
        {jokes[time] || "No joke found"}
      </div>
      <div className="text-sm">
        Sync component that took {time} ms
      </div>
    </div>
  );
}
