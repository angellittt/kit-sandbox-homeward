// design-system-kit 0.45.0 · profile shadcn · design entry: the Badge page
import { Badge } from "@/components/ui/badge";
import { Labelled } from "../labels";

export const BadgePreview = () => {
  return (
    <div className="row">
      <Labelled label="default">
        <Badge>New</Badge>
      </Labelled>
      <Labelled label="secondary">
        <Badge variant="secondary">Draft</Badge>
      </Labelled>
      <Labelled label="destructive">
        <Badge variant="destructive">Overdue</Badge>
      </Labelled>
      <Labelled label="outline">
        <Badge variant="outline">Archived</Badge>
      </Labelled>
      <Labelled label="ghost">
        <Badge variant="ghost">Ghost</Badge>
      </Labelled>
      <Labelled label="link">
        <Badge
          variant="link"
          render={(props) => (
            <a {...props} href="#badge">
              {props.children}
            </a>
          )}
        >
          Link
        </Badge>
      </Labelled>
    </div>
  );
};
