import RootLayout from "../_layout";
import { ComponentUsingAsync } from "../ComponentUsingAsync";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Full Preloading",
  description: "All of this page is preloaded on sever side before rendering",
};

export default async function Home({searchParams}: {searchParams: Promise<{ [key: string]: string | string[] | undefined }>;}) {
  const params = await searchParams;

  return (
    <RootLayout>
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black" data-params={JSON.stringify(params)}>
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div>
          <h1>
            Full Preloading of page on server last updated {new Date().toLocaleString()}
          </h1>x

        </div>
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
    </RootLayout>
  );
}


