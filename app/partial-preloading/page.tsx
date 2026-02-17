import { Suspense } from "react";
import { ComponentUsingUse } from "../ComponentUsingUse";
import { ComponentUsingAsync } from "../ComponentUsingAsync";
import { Metadata } from "next";
import RootLayout from "../_layout";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Partial Preloading",
  description: "Some of this page is preloaded, while other parts are loaded on-demand.",
};

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  return (
    <RootLayout>
    <div className="flex min-h-screen items-center justify-center bg-black font-sans" data-params={JSON.stringify(params)}>
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-black sm:items-start">
        <div>
          <h1>
            Partial Preloading of page last updated {new Date().toLocaleString()}
          </h1>
        </div>
        
        <ComponentUsingAsync time={20} />
        <ComponentUsingUse   time={350} />
        <Suspense fallback={<LoadingFallback time={500} />}>
          <ComponentUsingUse time={500} />
        </Suspense>
        <Suspense fallback={<LoadingFallback time={1000} />}>
          <ComponentUsingAsync time={1000} />
        </Suspense>
        <Suspense fallback={<LoadingFallback time={2000} />}>
          <ComponentUsingUse time={2000} />
        </Suspense>
        <Suspense fallback={<LoadingFallback time={3000} />}>
          <ComponentUsingUse time={3000} />
        </Suspense>
        <Suspense fallback={<LoadingFallback time={4000} />}>
          <ComponentUsingUse time={4000} />
        </Suspense>
        <Suspense fallback={<LoadingFallback time={5000} />}>
          <ComponentUsingUse time={5000} />
        </Suspense>
        <Suspense fallback={<LoadingFallback time={300} />}>
          <ComponentUsingUse time={300} />
        </Suspense>
      </main>
    </div>
    </RootLayout>
  );
}


function LoadingFallback({time}: {time: number}) {
  return (
    <div className="h-[50vh]">
      <div className="text-2xl font-bold">Loading Component that will take {time} ms</div>
    </div>
  );
}