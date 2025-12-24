import { jokes } from "./jokes";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export const fiveSecondsWait = wait(300);

export async function ComponentUsingAsync({ time = 300 }: { time: number }) {
  await wait(time);
  return (
    <div className="h-[50vh]">
      <div className="text-2xl font-bold">
        Server Loaded Component that took {time} ms
      </div>
      <div className="text-lg font-medium">
        {jokes[time] || "No joke found"}
      </div>
    </div>
  );
}
