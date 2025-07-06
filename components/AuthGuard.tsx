"use client";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "@/components/auth/loading";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/login");
    }
  }, [isLoaded, isSignedIn, router]);

  // Show loading on server-side and initial client render
  if (!isClient || !isLoaded) {
    return <Loading />;
  }

  // If not signed in, show loading while redirecting
  if (!isSignedIn) {
    return <Loading />;
  }

  return <>{children}</>;
}