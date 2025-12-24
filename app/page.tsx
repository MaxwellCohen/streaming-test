export const dynamic = "force-dynamic";

export default async function Home({searchParams}: {searchParams: Promise<{ [key: string]: string | string[] | undefined }>;}) {
  const params = await searchParams;
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black" data-params={JSON.stringify(params)}>
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div>
         <a className="block underline text-blue-400" href="/partial-preloading">Partial Preloading</a>
         <a className="block underline text-blue-400" href="/full-preloading">Full Preloading</a>
        </div>
      </main>
    </div>
  );
}


