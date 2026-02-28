import { type ReactNode } from "react";

export default function OwnerDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="min-h-screen p-8">{children}</div>;
}
