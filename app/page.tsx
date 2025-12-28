export default async function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div>
          <h1 className="text-4xl font-bold">Streaming Test</h1>
          <ul>
            <li>
              <a
                className="block underline text-blue-400"
                href="/full-streaming"
              >
                Full Streaming of page
              </a>
              will stream the page as it is rendered
            </li> 
            <li>
              <a
                className="block underline text-blue-400"
                href="/partial-preloading"
              >
                Partial SSR Preloading with streaming.
              </a>
              will provide first response as soon as possible, and then stream
              the rest of the page
            </li>
            <li>
              <a
                className="block underline text-blue-400"
                href="/full-preloading"
              >
                Full SSR will{" "}
              </a>
              load all of the page before rendering
            </li>
            <li>
              <a className="block underline text-blue-400" href="/SSG">
                SSG Loading of page
              </a>
              will load all of the page during build
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
