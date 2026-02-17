import RootLayout from "../../_layout";
import { ComponentUsingAsync } from "../../ComponentUsingAsync";
import { wait } from "../../wait";

export const dynamic = "force-dynamic";

const DYNAMIC_DELAY_MS = 3000;

export default async function IframeAsyncPage() {
  await wait(DYNAMIC_DELAY_MS);
  return (
    <RootLayout>
      <div className="min-h-screen bg-black p-6 font-sans">
        <main className="mx-auto max-w-2xl space-y-6">
          <section className="rounded-lg border border-zinc-600 bg-zinc-900 p-4 shadow-sm">
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-white">
              1) Async function (loads in {DYNAMIC_DELAY_MS / 1000}s)
            </h2>
            <ComponentUsingAsync time={DYNAMIC_DELAY_MS} preResolved />
          </section>

          <section className="rounded-lg border border-zinc-600 bg-zinc-900 p-4 shadow-sm">
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-white">
              Static content
            </h2>
            <p className="text-white">
              This section is static and does not take time to load.
            </p>
          </section>
        </main>
      </div>
    </RootLayout>
  );
}
