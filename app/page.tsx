import RootLayout from "./_layout";
export default async function Home() {
  return (
    <RootLayout>
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <div>
            <h1 className="text-4xl font-bold mb-6">Streaming Test Scenarios</h1>
            <ul className="space-y-6">
              <li>
                <a
                  className="block text-xl font-semibold text-blue-600 hover:underline dark:text-blue-400"
                  href="/full-streaming"
                >
                  Full Streaming
                </a>
                <p className="text-gray-600 dark:text-gray-400">
                  Streams the HTML response progressively as components render on the server. The browser receives the page in chunks.
                </p>
              </li>
              <li>
                <a
                  className="block text-xl font-semibold text-blue-600 hover:underline dark:text-blue-400"
                  href="/full-streaming-with-image"
                >
                  Full Streaming with Image
                </a>
                <p className="text-gray-600 dark:text-gray-400">
                  Same as Full Streaming, but includes a large image to demonstrate how streaming handles media resources.
                </p>
              </li>
              <li>
                <a
                  className="block text-xl font-semibold text-blue-600 hover:underline dark:text-blue-400"
                  href="/partial-preloading"
                >
                  Partial SSR Preloading
                </a>
                <p className="text-gray-600 dark:text-gray-400">
                  Sends an immediate initial HTML shell, then streams the remaining dynamic content as it becomes available.
                </p>
              </li>
              <li>
                <a
                  className="block text-xl font-semibold text-blue-600 hover:underline dark:text-blue-400"
                  href="/partial-preloading-with-image"
                >
                  Partial SSR Preloading with Image
                </a>
                <p className="text-gray-600 dark:text-gray-400">
                  Similar to Partial SSR, but includes a large image to test loading behavior with mixed content types.
                </p>
              </li>
              <li>
                <a
                  className="block text-xl font-semibold text-blue-600 hover:underline dark:text-blue-400"
                  href="/full-preloading"
                >
                  Full SSR (Blocking)
                </a>
                <p className="text-gray-600 dark:text-gray-400">
                  Waits for all data fetching and rendering to complete on the server before sending any HTML to the browser.
                </p>
              </li>
              <li>
                <a
                  className="block text-xl font-semibold text-blue-600 hover:underline dark:text-blue-400"
                  href="/full-preloading-with-image"
                >
                  Full SSR with Image
                </a>
                <p className="text-gray-600 dark:text-gray-400">
                  Standard server-side rendering where the entire page (including image references) is prepared before response.
                </p>
              </li>
              <li>
                <a className="block text-xl font-semibold text-blue-600 hover:underline dark:text-blue-400" href="/SSG">
                  Static Site Generation (SSG)
                </a>
                <p className="text-gray-600 dark:text-gray-400">
                  The page is built once at build time. Extremely fast delivery but content is static until the next build.
                </p>
              </li>
              <li>
                <a className="block text-xl font-semibold text-blue-600 hover:underline dark:text-blue-400" href="/SSG-with-image">
                  SSG with Image
                </a>
                <p className="text-gray-600 dark:text-gray-400">
                  Statically generated page including a large image. Useful for testing static asset delivery performance.
                </p>
              </li>
              <li>
                <a className="block text-xl font-semibold text-blue-600 hover:underline dark:text-blue-400" href="/toplevel-preloading">
                  Top Level Preloading
                </a>
                <p className="text-gray-600 dark:text-gray-400">
                  Simulates fetching data at the route root level before rendering children, ensuring data is ready early.
                </p>
              </li>
              <li>
                <a className="block text-xl font-semibold text-blue-600 hover:underline dark:text-blue-400" href="/toplevel-preloading-with-image">
                  Top Level Preloading with Image
                </a>
                <p className="text-gray-600 dark:text-gray-400">
                  Route-level preloading pattern including image content considerations.
                </p>
              </li>
            </ul>
          </div>
      </main>
    </div>
    </RootLayout>
  );
}
