import { use } from "react";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export const fiveSecondsWait = wait(300);

export function ComponentUsingUse({ time = 300 }: { time: number }) {
  use(wait(time));
  return (
    <div className="h-[50vh]">
      <div className="text-2xl font-bold">Streamed Component that took {time} ms</div>
    </div>
  );
}
