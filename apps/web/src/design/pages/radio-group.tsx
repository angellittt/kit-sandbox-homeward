// design-system-kit 0.53.0 · profile shadcn · design entry: the RadioGroup page
import {
  Field,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Labelled } from "../labels";

export const RadioGroupPreview = () => {
  return (
    <FieldSet>
      <FieldLegend>Plan</FieldLegend>
      <RadioGroup defaultValue="team">
        <Labelled label="unselected" block>
          <Field orientation="horizontal">
            <RadioGroupItem value="solo" id="r1" />
            <FieldLabel htmlFor="r1">Solo</FieldLabel>
          </Field>
        </Labelled>
        <Labelled label="selected" block>
          <Field orientation="horizontal">
            <RadioGroupItem value="team" id="r2" />
            <FieldLabel htmlFor="r2">Team</FieldLabel>
          </Field>
        </Labelled>
        <Labelled label="disabled" block>
          <Field orientation="horizontal" data-disabled>
            <RadioGroupItem value="ent" id="r3" disabled />
            <FieldLabel htmlFor="r3">Enterprise (contact sales)</FieldLabel>
          </Field>
        </Labelled>
      </RadioGroup>
    </FieldSet>
  );
};
