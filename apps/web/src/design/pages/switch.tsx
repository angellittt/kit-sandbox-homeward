// design-system-kit 0.37.2 · profile shadcn · design entry: the Switch page
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";

export const SwitchPreview = () => {
  return (
    <div className="col" style={{ maxWidth: 380 }}>
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="s1">Public board</FieldLabel>
          <FieldDescription>Anyone with the link can read it.</FieldDescription>
        </FieldContent>
        <Switch id="s1" defaultChecked />
      </Field>
      <Field orientation="horizontal">
        <FieldLabel htmlFor="s2">Email updates</FieldLabel>
        <Switch id="s2" />
      </Field>
      <Field orientation="horizontal">
        <FieldLabel htmlFor="s3">Small</FieldLabel>
        <Switch id="s3" size="sm" defaultChecked />
      </Field>
      <Field orientation="horizontal" data-disabled>
        <FieldLabel htmlFor="s4">Disabled</FieldLabel>
        <Switch id="s4" disabled />
      </Field>
    </div>
  );
};
