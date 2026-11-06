// design-system-kit 0.45.0 · profile shadcn · design entry: the Toggle page
import { useState } from "react";
import { Bold, Italic, Star, Underline } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { Labelled, Property } from "../labels";

export const TogglePreview = () => {
  const [b, setB] = useState(true);
  const [i, setI] = useState(false);
  const [s, setS] = useState(false);
  return (
    <div className="col">
      <Property name="Variant default" />
      <div className="row">
        <Labelled label="pressed">
          <Toggle aria-label="Bold" pressed={b} onPressedChange={setB}>
            <Bold size={16} />
          </Toggle>
        </Labelled>
        <Labelled label="default">
          <Toggle aria-label="Italic" pressed={i} onPressedChange={setI}>
            <Italic size={16} />
          </Toggle>
        </Labelled>
        <Labelled label="disabled">
          <Toggle aria-label="Underline" disabled>
            <Underline size={16} />
          </Toggle>
        </Labelled>
      </div>
      <Property name="Variant outline" />
      <div className="row">
        <Labelled label="outline, sm">
          <Toggle
            variant="outline"
            size="sm"
            pressed={s}
            onPressedChange={setS}
          >
            <Star size={16} data-icon="inline-start" />
            Starred only
          </Toggle>
        </Labelled>
        <Labelled label="outline">
          <Toggle variant="outline">Default</Toggle>
        </Labelled>
        <Labelled label="outline, lg, pressed">
          <Toggle variant="outline" size="lg" defaultPressed>
            Large
          </Toggle>
        </Labelled>
      </div>
    </div>
  );
};
