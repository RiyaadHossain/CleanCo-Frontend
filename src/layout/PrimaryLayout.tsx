"use client";

import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
const inter = Inter({ subsets: ["latin"] });

export default function PrimaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const noNav = [
    "/signup",
    "/signin",
    "/super_admin",
    "/super_admin/manage_admin",
    "/super_admin/manage_admin/create",
    "/super_admin/manage_service",
    "/super_admin/manage_service/create",
    "/super_admin/manage_content",
    "/admin",
    "/admin/manage_service",
    "/admin/manage_content",
    "/user",
    "/user/my_services",
    "/user/booking_history",
  ];

  if (noNav.includes(pathname)) {
    return (
      <Provider store={store}>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </Provider>
    );
  }

  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </Provider>
  );
}
