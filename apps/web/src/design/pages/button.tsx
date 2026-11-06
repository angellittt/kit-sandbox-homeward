// design-system-kit 0.45.0 · profile shadcn · design entry: the Button page
import { Copy, Ellipsis, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Labelled, Property } from "../labels";

export const ButtonPreview = () => {
  return (
    <div className="col" style={{ maxWidth: 640 }}>
      <Property name="Variant" />
      <div className="row">
        <Labelled label="default">
          <Button>Save changes</Button>
        </Labelled>
        <Labelled label="secondary">
          <Button variant="secondary">Secondary</Button>
        </Labelled>
        <Labelled label="outline">
          <Button variant="outline">Outline</Button>
        </Labelled>
        <Labelled label="ghost">
          <Button variant="ghost">Ghost</Button>
        </Labelled>
        <Labelled label="destructive">
          <Button variant="destructive">Delete</Button>
        </Labelled>
        <Labelled label="link">
          <Button variant="link">Learn more</Button>
        </Labelled>
      </div>
      <Property name="Size and state" />
      <div className="row">
        <Labelled label="xs">
          <Button size="xs">Extra small</Button>
        </Labelled>
        <Labelled label="sm">
          <Button size="sm">Small</Button>
        </Labelled>
        <Labelled label="default">
          <Button>Default</Button>
        </Labelled>
        <Labelled label="lg">
          <Button size="lg">Large</Button>
        </Labelled>
        <Labelled label="disabled">
          <Button disabled>Disabled</Button>
        </Labelled>
        <Labelled label="loading">
          <Button disabled aria-busy>
            <Spinner />
            Saving
          </Button>
        </Labelled>
      </div>
      <Property name="Icon size" />
      <div className="row">
        <Labelled label="icon-xs">
          <Button size="icon-xs" variant="outline" aria-label="Add">
            <Plus size={16} />
          </Button>
        </Labelled>
        <Labelled label="icon-sm">
          <Button size="icon-sm" variant="outline" aria-label="Copy">
            <Copy size={16} />
          </Button>
        </Labelled>
        <Labelled label="icon">
          <Button size="icon" variant="outline" aria-label="Search">
            <Search size={16} />
          </Button>
        </Labelled>
        <Labelled label="icon-lg">
          <Button size="icon-lg" variant="ghost" aria-label="More">
            <Ellipsis size={16} />
          </Button>
        </Labelled>
      </div>
    </div>
  );
};
