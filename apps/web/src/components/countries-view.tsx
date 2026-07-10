import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@aip-library/ui";

import type { CountryMetadata } from "@/lib/metadata-data";

interface CountriesViewProps {
  countries: CountryMetadata[];
}

export function CountriesView({ countries }: CountriesViewProps) {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
          Countries
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-950">Coverage by rollout source</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Country metadata</CardTitle>
          <CardDescription>
            Each country profile opens with the official source and current AIRAC context.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Country</TableHead>
                <TableHead>ICAO Prefix</TableHead>
                <TableHead>AIS Authority</TableHead>
                <TableHead>Official AIP URL</TableHead>
                <TableHead>Shared Source</TableHead>
                <TableHead>Current AIRAC</TableHead>
                <TableHead>Tracking Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {countries.map((country) => (
                <TableRow key={country.country}>
                  <TableCell className="font-medium">{country.country}</TableCell>
                  <TableCell>{country.icaoPrefix}</TableCell>
                  <TableCell>{country.aisAuthority}</TableCell>
                  <TableCell className="max-w-[220px] truncate">{country.officialAipUrl}</TableCell>
                  <TableCell>{country.sharedSource}</TableCell>
                  <TableCell>{country.currentAirac}</TableCell>
                  <TableCell>
                    <Badge variant={country.trackingStatus === "ACTIVE" ? "default" : "secondary"}>
                      {country.trackingStatus}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
