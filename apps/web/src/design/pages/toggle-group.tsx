// design-system-kit 0.53.0 · profile shadcn · design entry: the ToggleGroup page
import { useState } from "react";
import { Bold, Italic, LayoutGrid, List, Underline } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Labelled } from "../labels";

export const ToggleGroupPreview = () => {
  const [view, setView] = useState(["list"]);
  const [marks, setMarks] = useState(["bold"]);
  const [align, setAlign] = useState(["left"]);
  return (
    <div className="col">
      <Labelled label="outline, single">
        <ToggleGroup
          variant="outline"
          spacing={0}
          value={view}
          onValueChange={(v) => {
            if (v.length) setView(v);
          }}
          aria-label="View"
        >
          <ToggleGroupItem value="list" aria-label="List">
            <List width={16} height={16} />
          </ToggleGroupItem>
          <ToggleGroupItem value="grid" aria-label="Grid">
            <LayoutGrid width={16} height={16} />
          </ToggleGroupItem>
        </ToggleGroup>
      </Labelled>
      <Labelled label="default, multiple">
        <ToggleGroup
          multiple
          value={marks}
          onValueChange={setMarks}
          aria-label="Formatting"
        >
          <ToggleGroupItem value="bold" aria-label="Bold">
            <Bold width={16} height={16} />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Italic">
            <Italic width={16} height={16} />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Underline">
            <Underline width={16} height={16} />
          </ToggleGroupItem>
        </ToggleGroup>
      </Labelled>
      <Labelled label="outline, sm">
        <ToggleGroup
          variant="outline"
          size="sm"
          spacing={0}
          value={align}
          onValueChange={(v) => {
            if (v.length) setAlign(v);
          }}
          aria-label="Alignment"
        >
          <ToggleGroupItem value="left">Left</ToggleGroupItem>
          <ToggleGroupItem value="center">Center</ToggleGroupItem>
          <ToggleGroupItem value="right">Right</ToggleGroupItem>
        </ToggleGroup>
      </Labelled>
    </div>
  );
};
