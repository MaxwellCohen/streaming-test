"use client"
import { use } from "react";
import { jokes } from "./jokes";
import { wait } from "./wait";

export function ComponentUsingUse({
  promise,
  time,
}: {
  promise?: Promise<unknown>;
  time: number;
}) {
  use(promise ?? wait(time));
  if (!jokes[time]) {
   return null;
  }
  return (
    <div className="h-[50vh] text-white">
      <div className="text-lg font-medium">
        {jokes[time] || "No joke found"}
      </div>
      <div className="text-sm text-white/80">
        Streamed Component that took {time} ms
      </div>
    </div>
  );
}
