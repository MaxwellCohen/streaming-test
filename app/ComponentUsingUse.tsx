import { use, ViewTransition } from "react";    


const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export const fiveSecondsWait = wait(300);


export function ComponentUsingUse({time = 300}: {time: number}) {
    use(wait(time));
    console.log("waiting");
  return (
    <ViewTransition>
    <div className="h-[50vh]">
      <div className="text-2xl font-bold">Streamed Component {time} ms</div>
    </div>
    </ViewTransition>
  );
}
