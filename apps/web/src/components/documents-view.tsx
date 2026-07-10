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

import type { PublicationRecord } from "@/domain/publication";

interface DocumentsViewProps {
  documents: PublicationRecord[];
}

export function DocumentsView({ documents }: DocumentsViewProps) {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
          Document tracker
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-950">
          Metadata tracking for official publications
        </h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tracked metadata</CardTitle>
          <CardDescription>
            Publication metadata only, with no document file storage.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Document</TableHead>
                <TableHead>Country</TableHead>
                <TableHead>AIRAC Cycle</TableHead>
                <TableHead>Effective Date</TableHead>
                <TableHead>Publication Date</TableHead>
                <TableHead>Source URL</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Checked</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documents.map((document) => (
                <TableRow key={document.id}>
                  <TableCell className="font-medium">{document.documentType}</TableCell>
                  <TableCell>{document.title}</TableCell>
                  <TableCell>{document.country}</TableCell>
                  <TableCell>{document.airacCycle}</TableCell>
                  <TableCell>{document.effectiveDate}</TableCell>
                  <TableCell>{document.publicationDate}</TableCell>
                  <TableCell className="max-w-[220px] truncate">{document.sourceUrl}</TableCell>
                  <TableCell>
                    <Badge variant={document.status === "ACTIVE" ? "default" : "secondary"}>
                      {document.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{document.discoveredAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
