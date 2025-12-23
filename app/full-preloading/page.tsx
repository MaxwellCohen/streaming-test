
import { Suspense } from "react";
import { ComponentUsingUse } from "../ComponentUsingUse";
import { ComponentUsingAsync } from "../ComponentUsingAsync";

export const dynamic = "force-dynamic";

export default async function Home({searchParams}: {searchParams: Promise<{ [key: string]: string | string[] | undefined }>;}) {
  const params = await searchParams;
  console.log(params);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <ComponentUsingAsync time={20} />
        <ComponentUsingAsync time={350} />
        <ComponentUsingAsync time={500} />
        <ComponentUsingAsync time={1000} />
        <ComponentUsingAsync time={2000} />
        <ComponentUsingAsync time={3000} />
        <ComponentUsingAsync time={4000} />
        <ComponentUsingAsync time={5000} />
        <ComponentUsingAsync time={300} />
      </main>
    </div>
  );
}


