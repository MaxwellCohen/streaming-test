import RootLayout from "../_layout";
import { ComponentUsingAsync } from "../ComponentUsingAsync";
import { Metadata } from "next";
import Image from "next/image";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "SSG",
  description: "SSG Loading of page",
};

export const revalidate = 10;

export default async function Home({searchParams}: {searchParams: Promise<{ [key: string]: string | string[] | undefined }>;}) {
  const params = await searchParams;

  return (
    <RootLayout>
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black" data-params={JSON.stringify(params)}>
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div>
          <h1>
            SSG Loading of page last updated {new Date().toLocaleString()}
          </h1>
            <Image
              src="https://placehold.co/600x400.webp?text=Hello+World"
              alt="image"
              width={600}
              height={400}
              priority
              className="p-4 pt-8 rounded-md m-auto"
            />
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
