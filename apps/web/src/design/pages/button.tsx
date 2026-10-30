// design-system-kit 0.37.4 · profile shadcn · design entry: the Button page
import { Copy, Ellipsis, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export const ButtonPreview = () => {
  return (
    <div className="col" style={{ maxWidth: 640 }}>
      <div className="row">
        <Button>Save changes</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Delete</Button>
        <Button variant="link">Learn more</Button>
      </div>
      <div className="row">
        <Button size="xs">Extra small</Button>
        <Button size="sm">Small</Button>
        <Button>Default</Button>
        <Button size="lg">Large</Button>
        <Button disabled>Disabled</Button>
        <Button disabled aria-busy>
          <Spinner />
          Saving
        </Button>
      </div>
      <div className="row">
        <Button size="icon-xs" variant="outline" aria-label="Add">
          <Plus size={16} />
        </Button>
        <Button size="icon-sm" variant="outline" aria-label="Copy">
          <Copy size={16} />
        </Button>
        <Button size="icon" variant="outline" aria-label="Search">
          <Search size={16} />
        </Button>
        <Button size="icon-lg" variant="ghost" aria-label="More">
          <Ellipsis size={16} />
        </Button>
      </div>
    </div>
  );
};
