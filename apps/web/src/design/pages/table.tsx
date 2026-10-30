// design-system-kit 0.37.3 · profile shadcn · design entry: the Table page
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const TablePreview = () => {
  return (
    <Table>
      <TableCaption className="sr-only">Invoices</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Client</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[
          ["INV-001", "Northwind", "Paid", "$1,200.00"],
          ["INV-002", "Contoso", "Overdue", "$860.00"],
          ["INV-003", "Fabrikam", "Draft", "$2,450.00"],
        ].map((r, i) => (
          <TableRow key={r[0]} data-state={i === 0 ? "selected" : undefined}>
            <TableCell>{r[0]}</TableCell>
            <TableCell>{r[1]}</TableCell>
            <TableCell>
              <Badge
                variant={
                  r[2] === "Overdue"
                    ? "destructive"
                    : r[2] === "Paid"
                      ? "secondary"
                      : "outline"
                }
              >
                {r[2]}
              </Badge>
            </TableCell>
            <TableCell className="text-right">{r[3]}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$4,510.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};
