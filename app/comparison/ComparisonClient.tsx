"use client";

import { useState } from "react";

const IFRAMES = [
  {
    src: "/comparison/iframe-async",
    label: "1) Async function",
    title: "Async",
    whereWaits: "Page: the async page component awaits the promise before rendering.",
  },
  {
    src: "/comparison/iframe-content",
    label: "2) Dynamic content",
    title: "Dynamic content",
    whereWaits: "Component: the async component awaits the promise; the page does not await.",
  },
  {
    src: "/comparison/iframe-async-suspense",
    label: "3) Async function + Suspense",
    title: "Async + Suspense",
    whereWaits: "Page: the async page component awaits the promise before rendering (inside Suspense).",
  },
  {
    src: "/comparison/iframe-use",
    label: "4) use()",
    title: "use()",
    whereWaits: "Component: the page creates the promise and passes it to a component that calls use(promise); no Suspense.",
  },
  {
    src: "/comparison/iframe-use-suspense",
    label: "5) use() + Suspense",
    title: "use() + Suspense",
    whereWaits: "Component: the page creates the promise and passes it to a component that calls use(promise) inside Suspense.",
  },
] as const;

export function ComparisonClient() {
  const [showIframes, setShowIframes] = useState(false);

  return (
    <div className="space-y-6">
      <p className="text-white">
        Click the button below to reveal all iframes. Each iframe loads a page
        with dynamic content (3s delay) and static content underneath.
      </p>
      <p className="text-sm text-zinc-400">
        <strong>Where the promise is waited on:</strong> Async-style pages create
        the promise and <strong>await</strong> it in the page component before
        rendering. use()-style pages create the promise in the page and pass it
        to a component that calls <strong>use(promise)</strong> to resolve it.
      </p>

      <div className="flex flex-wrap gap-4">
        <button
          type="button"
          onClick={() => setShowIframes((v) => !v)}
          className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          {showIframes ? "Hide" : "Show"} iframes
        </button>
      </div>

      {showIframes && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {IFRAMES.map(({ src, label, title, whereWaits }) => (
            <div
              key={src}
              className="overflow-hidden rounded-lg border border-zinc-600 bg-zinc-800 shadow"
            >
              <div className="border-b border-zinc-600 bg-zinc-700 px-3 py-2">
                <div className="text-sm font-medium text-white">{label}</div>
                <p className="mt-1 text-xs text-zinc-300">
                  Waits in: {whereWaits}
                </p>
              </div>
              <iframe
                src={src}
                title={`Comparison: ${title}`}
                className="h-105 w-full border-0"
              />
            </div>
          ))}
        </div>
      )}

      {!showIframes && (
        <p className="text-sm text-white">
          No iframes visible. Click the button above to load them.
        </p>
      )}
    </div>
  );
}
