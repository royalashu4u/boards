"use client";
import AuthGuard from "@/components/AuthGuard";
import { usePathname } from "next/navigation";

export default function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const publicRoutes = ["/login", "/sign-in"];
  const isPublic = publicRoutes.some(route => pathname.startsWith(route));
  return isPublic ? children : <AuthGuard>{children}</AuthGuard>;
}