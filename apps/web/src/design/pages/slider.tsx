// design-system-kit 0.38.0 · profile shadcn · design entry: the Slider page
import { useState } from "react";
import { Field, FieldLabel } from "@/components/ui/field";
import { Slider } from "@/components/ui/slider";

export const SliderPreview = () => {
  const [v, setV] = useState(40);
  return (
    <div className="col" style={{ maxWidth: 360 }}>
      <Field>
        <FieldLabel>{"Volume — " + v + "%"}</FieldLabel>
        <Slider
          value={v}
          onValueChange={(n) => {
            if (typeof n === "number") setV(n);
          }}
          max={100}
          step={1}
          aria-label="Volume"
        />
      </Field>
      <Field>
        <FieldLabel>Budget range</FieldLabel>
        <Slider defaultValue={[20, 70]} aria-label="Budget" />
      </Field>
      <Field data-disabled>
        <FieldLabel>Disabled</FieldLabel>
        <Slider defaultValue={30} disabled aria-label="Disabled slider" />
      </Field>
    </div>
  );
};
