import PrimaryLayout from "@/layout/PrimaryLayout";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CleanCo Org",
  description: "CleanCo is a cleaning service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <PrimaryLayout>{children}</PrimaryLayout>
  );
}
