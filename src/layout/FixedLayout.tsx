import type { CustomLayout } from "next";
import { Header } from "src/layout/Header";
import { Footer } from "src/layout/Footer";
import { LayoutErrorBoundary } from "src/layout/LayoutErrorBoundary";

export const FixedLayout: CustomLayout = (page) => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] mx-auto max-w-screen-md min-h-screen">
      <Header />
      <main className="bg-blue-300">
        <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
      </main>
      <Footer />
    </div>
  );
};
