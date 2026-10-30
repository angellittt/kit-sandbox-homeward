// design-system-kit 0.37.1 · profile shadcn · design entry: the Badge page
import { Badge } from "@/components/ui/badge";

export const BadgePreview = () => {
  return (
    <div className="row">
      <Badge>New</Badge>
      <Badge variant="secondary">Draft</Badge>
      <Badge variant="destructive">Overdue</Badge>
      <Badge variant="outline">Archived</Badge>
      <Badge variant="ghost">Ghost</Badge>
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
    </div>
  );
};
