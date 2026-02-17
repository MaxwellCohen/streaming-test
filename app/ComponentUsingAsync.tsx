import { jokes } from "./jokes";
import { wait } from "./wait";

export async function ComponentUsingAsync({
  time = 300,
  preResolved = false,
}: {
  time: number;
  preResolved?: boolean;
}) {
  if (!preResolved) {
    await wait(time);
  }
  return (
    <div className="h-[50vh] text-white">
      <div className="text-lg font-medium">
        {jokes[time] || "No joke found"}
      </div>
      <div className="text-sm text-white/80">
        Async component that took {time} ms
      </div>
    </div>
  );
}
