import { use, ViewTransition } from "react";    


const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export const fiveSecondsWait = wait(300);


export function StreamComponent({time = 300}: {time: number}) {
    use(wait(time));
    console.log("waiting");
  return (
    <ViewTransition>
    <div>
      <div className="text-2xl font-bold">Stream Component {time}</div>
    </div>
    </ViewTransition>
  );
}
