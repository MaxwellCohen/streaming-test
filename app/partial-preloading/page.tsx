import { Suspense } from "react";
import { ComponentUsingUse } from "../ComponentUsingUse";
import { ComponentUsingAsync } from "../ComponentUsingAsync";

export const dynamic = "force-dynamic";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  console.log(params);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <ComponentUsingAsync time={20} />
        <ComponentUsingAsync time={350} />
        <Suspense fallback={<div className="h-[50vh]"> </div>}>
          <ComponentUsingUse time={500} />
        </Suspense>
        <Suspense fallback={<div className="h-[50vh]"> </div>}>
          <ComponentUsingUse time={1000} />
        </Suspense>
        <Suspense fallback={<div className="h-[50vh]"> </div>}>
          <ComponentUsingUse time={2000} />
        </Suspense>
        <Suspense fallback={<div className="h-[50vh]" > </div>}>
          <ComponentUsingUse time={3000} />
        </Suspense>
        <Suspense fallback={<div className="h-[50vh]" > </div>}>
          <ComponentUsingUse time={4000} />
        </Suspense>
        <Suspense fallback={<div className="h-[50vh]" > </div>}>
          <ComponentUsingUse time={5000} />
        </Suspense>
        <Suspense fallback={<div className="h-[50vh]" > </div>}>
          <ComponentUsingUse time={300} />
        </Suspense>
      </main>
    </div>
  );
}
