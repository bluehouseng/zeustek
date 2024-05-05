"use client";

import { Suspense, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 500,
      easing: "ease-out-cubic",
    });
  });

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <>
        <Header />

        <main className="grow ">{children}</main>

        <Footer />
      </>
    </Suspense>
  );
}
