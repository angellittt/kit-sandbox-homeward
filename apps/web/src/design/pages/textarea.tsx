// design-system-kit 0.53.0 · profile shadcn · design entry: the Textarea page
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { Labelled } from "../labels";

export const TextareaPreview = () => {
  return (
    <div className="col" style={{ maxWidth: 380 }}>
      <Labelled label="default" block>
        <Field>
          <FieldLabel htmlFor="t1">Notes</FieldLabel>
          <Textarea
            id="t1"
            placeholder="Anything the team should know"
            aria-describedby="t1-help"
          />
          <FieldDescription id="t1-help">
            Visible to everyone on the project.
          </FieldDescription>
        </Field>
      </Labelled>
      <Labelled label="invalid" block>
        <Field data-invalid>
          <FieldLabel htmlFor="t2">Summary</FieldLabel>
          <Textarea
            id="t2"
            aria-invalid
            aria-describedby="t2-error"
            defaultValue="Too short"
          />
          <FieldError id="t2-error">Write at least 20 characters</FieldError>
        </Field>
      </Labelled>
      <Labelled label="disabled" block>
        <Field data-disabled>
          <FieldLabel htmlFor="t3">Locked</FieldLabel>
          <Textarea id="t3" disabled defaultValue="Read-only for viewers." />
        </Field>
      </Labelled>
    </div>
  );
};
