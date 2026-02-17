import RootLayout from "../_layout";
import { ComparisonClient } from "./ComparisonClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comparison",
  description:
    "Compare iframe loading: dynamic content (3s) and static content below.",
};

export default function ComparisonPage() {
  return (
    <RootLayout>
      <div className="flex min-h-screen items-start justify-center bg-black font-sans">
        <main className="w-full flex-col px-6 py-12 sm:px-8">
          <h1 className="mb-4 text-3xl font-bold text-white">
            Comparison
          </h1>
          <ComparisonClient />
        </main>
      </div>
    </RootLayout>
  );
}
