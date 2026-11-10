// design-system-kit 0.53.0 · profile shadcn · design entry: the Switch page
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";
import { Labelled } from "../labels";

export const SwitchPreview = () => {
  return (
    <div className="col" style={{ maxWidth: 380 }}>
      <Labelled label="on, with description" block>
        <Field orientation="horizontal">
          <FieldContent>
            <FieldLabel htmlFor="s1">Public board</FieldLabel>
            <FieldDescription>
              Anyone with the link can read it.
            </FieldDescription>
          </FieldContent>
          <Switch id="s1" defaultChecked />
        </Field>
      </Labelled>
      <Labelled label="off" block>
        <Field orientation="horizontal">
          <FieldLabel htmlFor="s2">Email updates</FieldLabel>
          <Switch id="s2" />
        </Field>
      </Labelled>
      <Labelled label="sm" block>
        <Field orientation="horizontal">
          <FieldLabel htmlFor="s3">Small</FieldLabel>
          <Switch id="s3" size="sm" defaultChecked />
        </Field>
      </Labelled>
      <Labelled label="disabled" block>
        <Field orientation="horizontal" data-disabled>
          <FieldLabel htmlFor="s4">Disabled</FieldLabel>
          <Switch id="s4" disabled />
        </Field>
      </Labelled>
    </div>
  );
};
