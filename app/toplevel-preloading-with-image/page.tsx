import { Metadata } from "next";
import { SyncComponent } from "../SyncComponent";
import RootLayout from "../_layout";
import Image from "next/image";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Top Level Preloading",
  description: "All of this page is preloaded on sever side before rendering",
};

export default async function Home({searchParams}: {searchParams: Promise<{ [key: string]: string | string[] | undefined }>;}) {
  const params = await searchParams;

  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <RootLayout>
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black" data-params={JSON.stringify(params)}>
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div>
          <h1>
            Top Level Preloading of page on server last updated {new Date().toLocaleString()}
          </h1>
            <Image
              src="https://placehold.co/600x400.webp?text=Hello+World"
              alt="image"
              width={600}
              height={400}
              priority fetchPriority="high"
              className="p-4 pt-8 rounded-md m-auto"
            />
        </div>
        <SyncComponent time={20} />
        <SyncComponent time={350} />
        <SyncComponent time={500} />
        <SyncComponent time={1000} />
        <SyncComponent time={2000} />
        <SyncComponent time={3000} />
        <SyncComponent time={4000} />
        <SyncComponent time={5000} />
        <SyncComponent time={300} />
      </main>
    </div>
    </RootLayout>
  );
}
