// design-system-kit 0.45.0 · profile shadcn · design entry: the Input page
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Labelled } from "../labels";

export const InputPreview = () => {
  return (
    <div className="col" style={{ maxWidth: 340 }}>
      <Labelled label="default" block>
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
      </Labelled>
      <Labelled label="invalid" block>
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
      </Labelled>
      <Labelled label="disabled" block>
        <Field data-disabled>
          <FieldLabel htmlFor="ws">Workspace</FieldLabel>
          <Input id="ws" defaultValue="Locked by your admin" disabled />
        </Field>
      </Labelled>
    </div>
  );
};
