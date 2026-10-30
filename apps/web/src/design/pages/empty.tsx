// design-system-kit 0.37.5 · profile shadcn · design entry: the Empty page
import { Inbox } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export const EmptyPreview = () => {
  return (
    <Empty style={{ maxWidth: 420 }}>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Inbox size={16} />
        </EmptyMedia>
        <EmptyTitle>No invoices match that filter</EmptyTitle>
        <EmptyDescription>
          Try a client or project name, or clear the filter.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="row" style={{ justifyContent: "center" }}>
          <Button variant="outline" size="sm">
            Clear filter
          </Button>
          <Button size="sm">Create invoice</Button>
        </div>
      </EmptyContent>
    </Empty>
  );
};
