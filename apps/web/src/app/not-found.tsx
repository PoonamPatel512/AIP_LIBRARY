import Link from "next/link";
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@aip-library/ui";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 py-16 text-foreground">
      <Card className="w-full max-w-xl border-border/60 bg-card/80 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.55)] backdrop-blur">
        <CardHeader>
          <p className="text-sm font-medium uppercase tracking-[0.32em] text-muted-foreground">
            Not found
          </p>
          <CardTitle className="text-3xl">The requested page does not exist.</CardTitle>
          <CardDescription>
            The requested route is not available in the current foundation build.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild>
            <Link href="/">Return home</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
