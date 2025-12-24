import { use } from "react";
import { jokes } from "./jokes";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export const fiveSecondsWait = wait(300);

export function ComponentUsingUse({ time = 300 }: { time: number }) {
  use(wait(time));
  if (!jokes[time]) {
   return null;
  }
  return (
    <div className="h-[50vh]">
      <div className="text-2xl font-bold">
        Streamed Component that took {time} ms
      </div>

      <div className="text-lg font-medium">
        {jokes[time] || "No joke found"}
      </div>
    </div>
  );
}
