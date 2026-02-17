import RootLayout from "../../_layout";
import { ComponentUsingUse } from "../../ComponentUsingUse";
import { wait } from "../../wait";

export const dynamic = "force-dynamic";

const DYNAMIC_DELAY_MS = 3000;


export default function IframeUsePage() {
  const promise = wait(DYNAMIC_DELAY_MS);
  return (
    <RootLayout>
      <div className="min-h-screen bg-black p-6 font-sans">
        <main className="mx-auto max-w-2xl space-y-6">
          {/* Dynamic content: takes 3 seconds to load */}
          <section className="rounded-lg border border-zinc-600 bg-zinc-900 p-4 shadow-sm">
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-white">
              3) use() — no Suspense (loads in {DYNAMIC_DELAY_MS / 1000}s)
            </h2>
            <ComponentUsingUse promise={promise} time={DYNAMIC_DELAY_MS} />
          </section>

          {/* Static content: visible immediately */}
          <section className="rounded-lg border border-zinc-600 bg-zinc-900 p-4 shadow-sm">
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-white">
              Static content
            </h2>
            <p className="text-white">
              This section is static and does not take time to load. It appears
              as soon as the page is rendered.
            </p>
            <ul className="mt-2 list-inside list-disc text-white">
              <li>No async data fetching</li>
              <li>No delay or suspense</li>
              <li>Rendered immediately with the initial HTML</li>
            </ul>
          </section>
        </main>
      </div>
    </RootLayout>
  );
}
