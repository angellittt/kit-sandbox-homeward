// design-system-kit 0.37.3 · profile shadcn · design entry: the Field page
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

export const FieldPreview = () => {
  const [email, setEmail] = useState("hello@example");
  const bad = email.indexOf(".") === -1;
  return (
    <div className="col" style={{ maxWidth: 380 }}>
      <Field data-invalid={bad ? true : undefined}>
        <FieldLabel htmlFor="em">Email</FieldLabel>
        <Input
          id="em"
          value={email}
          aria-invalid={bad}
          aria-describedby={bad ? "em-error" : "em-help"}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {bad ? (
          <FieldError id="em-error">
            Add the part after the @ — like example.com
          </FieldError>
        ) : (
          <FieldDescription id="em-help">We never share it.</FieldDescription>
        )}
      </Field>
      <FieldSet>
        <FieldLegend>Notify me about</FieldLegend>
        <Field orientation="horizontal">
          <Checkbox id="n1" defaultChecked />
          <FieldLabel htmlFor="n1">Invoices</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="n2" />
          <FieldLabel htmlFor="n2">Weekly digest</FieldLabel>
        </Field>
      </FieldSet>
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="pub">Public board</FieldLabel>
          <FieldDescription>Anyone with the link can read it.</FieldDescription>
        </FieldContent>
        <Switch id="pub" />
      </Field>
    </div>
  );
};
