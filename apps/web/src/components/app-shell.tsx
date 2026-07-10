"use client";

import type { ChangeEvent } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BarChart3, Compass, FileText, Globe2, Layers3 } from "lucide-react";

import { Badge } from "@aip-library/ui";
import { createAiracLabel } from "@/lib/metadata-data";
import { generateCycles } from "@aip-library/airac";

const navigation = [
  { href: "/dashboard", label: "Dashboard", icon: BarChart3 },
  { href: "/countries", label: "Countries", icon: Globe2 },
  { href: "/documents", label: "Documents", icon: FileText },
  { href: "/airac", label: "AIRAC", icon: Layers3 },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const airacOptions = generateCycles(13, 0).map(createAiracLabel);
  const selectedAirac = searchParams.get("airac") ?? airacOptions[0];

  const handleAiracChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    const nextValue = event.target.value;

    if (nextValue) {
      params.set("airac", nextValue);
    } else {
      params.delete("airac");
    }

    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-slate-50">
                <Compass className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  AIP Library
                </p>
                <p className="text-lg font-semibold text-slate-950">
                  Official publication metadata
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <label className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">AIRAC</span>
              <select
                className="bg-transparent font-medium text-slate-950 outline-none"
                value={selectedAirac}
                onChange={handleAiracChange}
              >
                {airacOptions.map((option: string) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <Badge variant="secondary">M4 Document Tracking MVP</Badge>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl gap-6 px-6 py-6 lg:px-8">
        <aside className="hidden w-64 shrink-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:block">
          <nav className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href || pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition ${
                    active ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
