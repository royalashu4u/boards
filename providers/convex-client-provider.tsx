"use client";

import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { 
  AuthLoading,
  Authenticated,
  ConvexReactClient } from "convex/react";
import Loading from "@/components/auth/loading";
import { useEffect, useState } from "react";

interface ConvexClientProviderProps{
  children:React.ReactNode
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;

export const ConvexClientProvider = ({
  children,
}:ConvexClientProviderProps) =>{
  const [convex, setConvex] = useState<ConvexReactClient | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const client = new ConvexReactClient(convexUrl);
    setConvex(client);
  }, []);

  if (!isClient || !convex) {
    return <Loading />;
  }

  return(
    <ClerkProvider>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}