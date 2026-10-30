// design-system-kit 0.37.4 · profile shadcn · design entry: the RadioGroup page
import {
  Field,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const RadioGroupPreview = () => {
  return (
    <FieldSet>
      <FieldLegend>Plan</FieldLegend>
      <RadioGroup defaultValue="team">
        <Field orientation="horizontal">
          <RadioGroupItem value="solo" id="r1" />
          <FieldLabel htmlFor="r1">Solo</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="team" id="r2" />
          <FieldLabel htmlFor="r2">Team</FieldLabel>
        </Field>
        <Field orientation="horizontal" data-disabled>
          <RadioGroupItem value="ent" id="r3" disabled />
          <FieldLabel htmlFor="r3">Enterprise (contact sales)</FieldLabel>
        </Field>
      </RadioGroup>
    </FieldSet>
  );
};
