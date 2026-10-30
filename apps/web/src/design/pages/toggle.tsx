// design-system-kit 0.37.2 · profile shadcn · design entry: the Toggle page
import { useState } from "react";
import { Bold, Italic, Star, Underline } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

export const TogglePreview = () => {
  const [b, setB] = useState(true);
  const [i, setI] = useState(false);
  const [s, setS] = useState(false);
  return (
    <div className="col">
      <div className="row">
        <Toggle aria-label="Bold" pressed={b} onPressedChange={setB}>
          <Bold size={16} />
        </Toggle>
        <Toggle aria-label="Italic" pressed={i} onPressedChange={setI}>
          <Italic size={16} />
        </Toggle>
        <Toggle aria-label="Underline" disabled>
          <Underline size={16} />
        </Toggle>
      </div>
      <div className="row">
        <Toggle variant="outline" size="sm" pressed={s} onPressedChange={setS}>
          <Star size={16} data-icon="inline-start" />
          Starred only
        </Toggle>
        <Toggle variant="outline">Default</Toggle>
        <Toggle variant="outline" size="lg" defaultPressed>
          Large
        </Toggle>
      </div>
    </div>
  );
};
