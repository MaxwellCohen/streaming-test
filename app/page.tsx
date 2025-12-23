
import { Suspense } from "react";
import { StreamComponent } from "./StreamComponent";

export const dynamic = "force-dynamic";

export default async function Home({searchParams}: {searchParams: Promise<{ [key: string]: string | string[] | undefined }>;}) {
  const params = await searchParams;
  console.log(params);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
          <Suspense fallback={<div> </div>}>
            <StreamComponent time={20} />
          </Suspense>
        <Suspense fallback={<div> </div>}>
          <StreamComponent time={500} />
        </Suspense>
        <Suspense fallback={<div> </div>}>
          <StreamComponent time={1000} />
        </Suspense>
        <Suspense fallback={<div> </div>}>
          <StreamComponent time={2000} />
        </Suspense>
        <Suspense fallback={<div> </div>}>
          <StreamComponent time={3000} />
        </Suspense>
        <Suspense fallback={<div> </div>}>
          <StreamComponent time={4000} />
        </Suspense>
        <Suspense fallback={<div> </div>}>
          <StreamComponent time={5000} />
        </Suspense>
  <Suspense fallback={<div> </div>}>
            <StreamComponent time={300} />
          </Suspense>
      </main>
    </div>
  );
}


