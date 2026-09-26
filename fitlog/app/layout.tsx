import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PlanProvider } from "@/context/PlanContext";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "FitLog — Train with Intent",
  description: "FitLog is a dark, no-nonsense gym companion.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0d0e12] text-neutral-100 min-h-screen flex flex-col justify-between antialiased">
        <PlanProvider>
          <Toaster position="top-right" />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </PlanProvider>
      </body>
    </html>
  );
}