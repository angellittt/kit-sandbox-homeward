// design-system-kit 0.45.0 · profile shadcn · design entry: the Checkbox page
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldLabel } from "@/components/ui/field";
import { Labelled } from "../labels";

export const CheckboxPreview = () => {
  return (
    <div className="col">
      <Labelled label="checked" block>
        <Field orientation="horizontal">
          <Checkbox id="c1" defaultChecked />
          <FieldLabel htmlFor="c1">Send me the weekly digest</FieldLabel>
        </Field>
      </Labelled>
      <Labelled label="unchecked" block>
        <Field orientation="horizontal">
          <Checkbox id="c2" />
          <FieldLabel htmlFor="c2">Unchecked</FieldLabel>
        </Field>
      </Labelled>
      <Labelled label="indeterminate" block>
        <Field orientation="horizontal">
          <Checkbox id="c3" indeterminate />
          <FieldLabel htmlFor="c3">Select all (some selected)</FieldLabel>
        </Field>
      </Labelled>
      <Labelled label="invalid" block>
        <Field orientation="horizontal" data-invalid>
          <Checkbox id="c4" aria-invalid />
          <FieldLabel htmlFor="c4">Accept the terms</FieldLabel>
        </Field>
      </Labelled>
      <Labelled label="disabled" block>
        <Field orientation="horizontal" data-disabled>
          <Checkbox id="c5" disabled />
          <FieldLabel htmlFor="c5">Unavailable</FieldLabel>
        </Field>
      </Labelled>
    </div>
  );
};
