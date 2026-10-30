// design-system-kit 0.37.3 · profile shadcn · design entry: the DataTable page
import type { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import {
  DataTable,
  DataTableColumnHeader,
  DataTablePagination,
  DataTableViewOptions,
  dataTableSelectColumn,
  useDataTable,
} from "@/components/ui/data-table";
import { Input } from "@/components/ui/input";

type Invoice = { id: string; client: string; status: string; amount: number };

const rows: Invoice[] = [
  { id: "INV-001", client: "Northwind", status: "Paid", amount: 1200 },
  { id: "INV-002", client: "Contoso", status: "Overdue", amount: 860 },
  { id: "INV-003", client: "Fabrikam", status: "Draft", amount: 2450 },
  { id: "INV-004", client: "Tailspin", status: "Paid", amount: 310 },
  { id: "INV-005", client: "Litware", status: "Paid", amount: 1775 },
  { id: "INV-006", client: "Adatum", status: "Overdue", amount: 640 },
  { id: "INV-007", client: "Woodgrove", status: "Draft", amount: 980 },
];

const money = (n: number) =>
  "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2 });

const columns: ColumnDef<Invoice>[] = [
  dataTableSelectColumn<Invoice>(),
  { accessorKey: "id", header: "Invoice", meta: { label: "Invoice" } },
  {
    accessorKey: "client",
    header: (c) => (
      <DataTableColumnHeader column={c.column}>Client</DataTableColumnHeader>
    ),
    meta: { label: "Client" },
  },
  {
    accessorKey: "status",
    header: "Status",
    meta: { label: "Status" },
    cell: (c) => {
      const s = c.getValue<string>();
      return (
        <Badge
          variant={
            s === "Overdue"
              ? "destructive"
              : s === "Paid"
                ? "secondary"
                : "outline"
          }
        >
          {s}
        </Badge>
      );
    },
  },
  {
    accessorKey: "amount",
    meta: { label: "Amount" },
    header: (c) => (
      <div style={{ textAlign: "right" }}>
        <DataTableColumnHeader column={c.column}>Amount</DataTableColumnHeader>
      </div>
    ),
    cell: (c) => (
      <div style={{ textAlign: "right" }}>{money(c.getValue<number>())}</div>
    ),
  },
];

export const DataTablePreview = () => {
  const table = useDataTable({
    data: rows,
    columns: columns,
    pageSize: 5,
    getRowId: (r) => r.id,
  });
  const client = table.getColumn("client");
  const filter = (client?.getFilterValue() as string | undefined) ?? "";
  return (
    <div className="col" style={{ maxWidth: 640, gap: 12 }}>
      <div className="row" style={{ flexWrap: "nowrap" }}>
        <Input
          aria-label="Filter clients"
          placeholder="Filter clients…"
          value={filter}
          style={{ maxWidth: 240 }}
          onChange={(e) => {
            client?.setFilterValue(e.target.value);
          }}
        />
        <div style={{ marginLeft: "auto" }}>
          <DataTableViewOptions table={table} />
        </div>
      </div>
      <DataTable table={table} />
      <DataTablePagination table={table} pageSizes={[5, 10]} />
    </div>
  );
};
