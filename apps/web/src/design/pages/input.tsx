// design-system-kit 0.37.5 · profile shadcn · design entry: the Input page
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export const InputPreview = () => {
  return (
    <div className="col" style={{ maxWidth: 340 }}>
      <Field>
        <FieldLabel htmlFor="pn">Project name</FieldLabel>
        <Input
          id="pn"
          placeholder="e.g. Spring launch"
          aria-describedby="pn-help"
        />
        <FieldDescription id="pn-help">
          Shown to your whole team.
        </FieldDescription>
      </Field>
      <Field data-invalid>
        <FieldLabel htmlFor="pw">Password</FieldLabel>
        <Input
          id="pw"
          type="password"
          defaultValue="short"
          aria-invalid
          aria-describedby="pw-error"
        />
        <FieldError id="pw-error">Use at least 8 characters</FieldError>
      </Field>
      <Field data-disabled>
        <FieldLabel htmlFor="ws">Workspace</FieldLabel>
        <Input id="ws" defaultValue="Locked by your admin" disabled />
      </Field>
    </div>
  );
};
