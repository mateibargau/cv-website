"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 500);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div
          className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="text-3xl font-bold tracking-tight mb-2">
            Matei Bărgău
          </div>
          <div className="text-base text-accent font-medium mb-8">
            Full-stack Web Developer
          </div>
          <div className="w-32 h-[2px] bg-border rounded-full overflow-hidden">
            <div className="h-full bg-accent rounded-full animate-loading-bar" />
          </div>
        </div>
      )}
      <div
        className={`transition-opacity duration-300 ${loading ? "opacity-0" : "opacity-100"}`}
      >
        {children}
      </div>
    </>
  );
}
