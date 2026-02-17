import RootLayout from "./_layout";

export const metadata = {
  title: "Streaming Test Scenarios",
  description: "Demonstrates different streaming test scenarios for Next.js",
};

export default async function Home() {
  return (
    <RootLayout>
      <div className="flex min-h-screen items-center justify-center bg-black font-sans">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-black sm:items-start">
          <div>
            <h1 className="text-4xl font-bold mb-6 text-white">Streaming Test Scenarios</h1>
            <ul className="space-y-6">
              <li>
                <a
                  className="block text-xl font-semibold text-blue-400 hover:underline"
                  href="/full-streaming"
                >
                  Full Streaming
                </a>
                <p className="text-white">
                  Streams the HTML response progressively as components render on the server. The browser receives the page in chunks.
                </p>
              </li>
              <li>
                <a
                  className="block text-xl font-semibold text-blue-400 hover:underline"
                  href="/full-streaming-with-image"
                >
                  Full Streaming with Image
                </a>
                <p className="text-white">
                  Same as Full Streaming, but includes a large image to demonstrate how streaming handles media resources.
                </p>
              </li>
              <li>
                <a
                  className="block text-xl font-semibold text-blue-400 hover:underline"
                  href="/partial-preloading"
                >
                  Partial SSR Preloading
                </a>
                <p className="text-white">
                  Sends an immediate initial HTML shell, then streams the remaining dynamic content as it becomes available.
                </p>
              </li>
              <li>
                <a
                  className="block text-xl font-semibold text-blue-400 hover:underline"
                  href="/partial-preloading-with-image"
                >
                  Partial SSR Preloading with Image
                </a>
                <p className="text-white">
                  Similar to Partial SSR, but includes a large image to test loading behavior with mixed content types.
                </p>
              </li>
              <li>
                <a
                  className="block text-xl font-semibold text-blue-400 hover:underline"
                  href="/comparison"
                >
                  Comparison (iframes)
                </a>
                <p className="text-white">
                  Buttons reveal iframes; each iframe loads a page with 3s dynamic content and static content below.
                </p>
              </li>
              <li>
                <a
                  className="block text-xl font-semibold text-blue-400 hover:underline"
                  href="/full-preloading"
                >
                  Full SSR (Blocking)
                </a>
                <p className="text-white">
                  Waits for all data fetching and rendering to complete on the server before sending any HTML to the browser.
                </p>
              </li>
              <li>
                <a
                  className="block text-xl font-semibold text-blue-400 hover:underline"
                  href="/full-preloading-with-image"
                >
                  Full SSR with Image
                </a>
                <p className="text-white">
                  Standard server-side rendering where the entire page (including image references) is prepared before response.
                </p>
              </li>
              <li>
                <a className="block text-xl font-semibold text-blue-400 hover:underline" href="/SSG">
                  Static Site Generation (SSG)
                </a>
                <p className="text-white">
                  The page is built once at build time. Extremely fast delivery but content is static until the next build.
                </p>
              </li>
              <li>
                <a className="block text-xl font-semibold text-blue-400 hover:underline" href="/SSG-with-image">
                  SSG with Image
                </a>
                <p className="text-white">
                  Statically generated page including a large image. Useful for testing static asset delivery performance.
                </p>
              </li>
              <li>
                <a className="block text-xl font-semibold text-blue-400 hover:underline" href="/toplevel-preloading">
                  Top Level Preloading
                </a>
                <p className="text-white">
                  Simulates fetching data at the route root level before rendering children, ensuring data is ready early.
                </p>
              </li>
              <li>
                <a className="block text-xl font-semibold text-blue-400 hover:underline" href="/toplevel-preloading-with-image">
                  Top Level Preloading with Image
                </a>
                <p className="text-white">
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
