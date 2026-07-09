"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, ShieldCheck, TimerReset, Waves } from "lucide-react";
import {
  Button,
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@aip-library/ui";

const stackRows = [
  ["Framework", "Next.js 15"],
  ["Rendering", "App Router, Server Components, Metadata API"],
  ["Language", "TypeScript"],
  ["UI", "Tailwind CSS v4 and shadcn/ui"],
  ["Data", "Prisma and PostgreSQL"],
  ["Validation", "Zod"],
  ["Client Data", "TanStack Query and TanStack Table"],
  ["Visuals", "Recharts and Framer Motion"],
];

const principles = [
  {
    title: "Metadata first",
    description:
      "The system records official publication data and links only. No hosted documents.",
    icon: TimerReset,
  },
  {
    title: "Provenance preserved",
    description: "Every record must remain traceable to an official AIS source and capture moment.",
    icon: ShieldCheck,
  },
  {
    title: "Built for scale",
    description:
      "The foundation is structured for future ingestion, reconciliation, and expansion.",
    icon: Waves,
  },
];

export function LandingPage() {
  return (
    <main className="min-h-screen px-6 py-8 text-foreground sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <header className="flex flex-col gap-4 border-b border-border/60 pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <Badge
              variant="secondary"
              className="w-fit border border-border/60 bg-background/70 text-xs uppercase tracking-[0.28em]"
            >
              Phase 1 foundation
            </Badge>
            <div className="max-w-3xl space-y-3">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                A trusted aviation metadata platform for official publication history.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                AIP Library tracks AIRAC cycles, AIP amendments, supplements, AICs, and publication
                metadata from official AIS sources worldwide. This build establishes the production
                foundation only.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  Review operating model
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-xl border-border/60 bg-card/95 backdrop-blur">
                <DialogHeader>
                  <DialogTitle>Production foundation</DialogTitle>
                  <DialogDescription>
                    This repository is constrained to documentation, foundation scaffolding, and
                    future-ready architecture. No feature logic has been introduced.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-3 text-sm leading-6 text-muted-foreground">
                  <p>Phase 1 tracks metadata and official links only.</p>
                  <p>Domain logic will live outside the Next.js route surface.</p>
                  <p>Prisma is configured for future models but no schema models exist yet.</p>
                </div>
              </DialogContent>
            </Dialog>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  System snapshot
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="border-border/60 bg-card/95 backdrop-blur"
              >
                <DropdownMenuItem>Next.js 15</DropdownMenuItem>
                <DropdownMenuItem>React 19</DropdownMenuItem>
                <DropdownMenuItem>TypeScript</DropdownMenuItem>
                <DropdownMenuItem>Prisma + PostgreSQL</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Card className="h-full border-border/60 bg-card/85 shadow-[0_24px_90px_-52px_rgba(15,23,42,0.45)] backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl">Foundation commitments</CardTitle>
                <CardDescription>
                  Everything in this build is designed to support clean separation of concerns and
                  future implementation discipline.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 sm:grid-cols-3">
                {principles.map((item) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="rounded-2xl border border-border/60 bg-background/70 p-4"
                  >
                    <item.icon className="h-5 w-5 text-slate-900" />
                    <h2 className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-slate-950">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
          >
            <Card className="h-full border-border/60 bg-slate-950 text-slate-50 shadow-[0_24px_90px_-52px_rgba(15,23,42,0.7)]">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-50">Current build posture</CardTitle>
                <CardDescription className="text-slate-300">
                  Production-ready scaffold with no domain features or data models yet.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-medium uppercase tracking-[0.26em] text-slate-300">
                    Delivery target
                  </p>
                  <p className="mt-2 text-lg font-semibold">Render</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-medium uppercase tracking-[0.26em] text-slate-300">
                    Database foundation
                  </p>
                  <p className="mt-2 text-lg font-semibold">PostgreSQL via Prisma</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-medium uppercase tracking-[0.26em] text-slate-300">
                    Scope
                  </p>
                  <p className="mt-2 text-lg font-semibold">Metadata and official links only</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <Card className="border-border/60 bg-card/85 backdrop-blur">
            <CardHeader>
              <CardTitle>Configured stack</CardTitle>
              <CardDescription>
                The repository is pre-wired for the exact foundation stack requested for the
                project.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Area</TableHead>
                    <TableHead>Choice</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {stackRows.map(([area, choice]) => (
                    <TableRow key={area}>
                      <TableCell className="font-medium">{area}</TableCell>
                      <TableCell>{choice}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-card/85 backdrop-blur">
            <CardHeader>
              <CardTitle>Implementation boundary</CardTitle>
              <CardDescription>
                The initial application surface is intentionally minimal and ready for future domain
                work.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-7 text-muted-foreground">
              <p>No business logic exists in this foundation.</p>
              <p>No scraper, AIRAC engine, or database models have been introduced.</p>
              <p>App Router, loading UI, error UI, and not-found handling are all configured.</p>
              <p>Absolute imports, ESLint, Prettier, Vitest, and Playwright are ready.</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
