import { ViewTransition } from "react";    


const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export const fiveSecondsWait = wait(300);


export async function ComponentUsingAsync({time = 300}: {time: number}) {
    await wait(time);
    console.log("waiting 1");
  return (
    <ViewTransition>
    <div className="h-[50vh]">
      <div className="text-2xl font-bold">Server Loaded Component {time} ms</div>
    </div>
    </ViewTransition>
  );
}
