import type { CustomLayout } from "next";
import { Header } from "src/layout/Header";
import { Footer } from "src/layout/Footer";
import { LayoutErrorBoundary } from "src/layout/LayoutErrorBoundary";

export const FluidLayout: CustomLayout = (page) => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] min-h-screen">
      <Header />
      <main className="bg-red-300">
        <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
      </main>
      <Footer />
    </div>
  );
};
