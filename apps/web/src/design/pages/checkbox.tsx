// design-system-kit 0.38.0 · profile shadcn · design entry: the Checkbox page
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldLabel } from "@/components/ui/field";

export const CheckboxPreview = () => {
  return (
    <div className="col">
      <Field orientation="horizontal">
        <Checkbox id="c1" defaultChecked />
        <FieldLabel htmlFor="c1">Send me the weekly digest</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="c2" />
        <FieldLabel htmlFor="c2">Unchecked</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="c3" indeterminate />
        <FieldLabel htmlFor="c3">Select all (some selected)</FieldLabel>
      </Field>
      <Field orientation="horizontal" data-invalid>
        <Checkbox id="c4" aria-invalid />
        <FieldLabel htmlFor="c4">Accept the terms</FieldLabel>
      </Field>
      <Field orientation="horizontal" data-disabled>
        <Checkbox id="c5" disabled />
        <FieldLabel htmlFor="c5">Unavailable</FieldLabel>
      </Field>
    </div>
  );
};
