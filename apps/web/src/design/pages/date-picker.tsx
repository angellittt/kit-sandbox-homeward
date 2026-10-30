// design-system-kit 0.37.3 · profile shadcn · design entry: the DatePicker page
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { DatePicker, hintFor } from "@/components/ui/date-picker";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";

export const DatePickerPreview = () => {
  const [one, setOne] = useState<Date | undefined>(new Date(2026, 3, 9));
  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(2026, 3, 6),
    to: new Date(2026, 3, 17),
  });
  const [err, setErr] = useState<string | null>(null);
  const [pick, setPick] = useState<Date | undefined>();
  return (
    <div className="col" style={{ maxWidth: 380 }}>
      <Field>
        <FieldLabel htmlFor="due">Due date</FieldLabel>
        <DatePicker id="due" value={one} onChange={setOne} />
        <FieldDescription>{hintFor()}</FieldDescription>
      </Field>
      <Field data-invalid={err ? true : undefined}>
        <FieldLabel htmlFor="sch">Schedule</FieldLabel>
        <DatePicker
          mode="range"
          id="sch"
          value={range}
          onChange={setRange}
          onValidationChange={setErr}
        />
        {err ? (
          <FieldError id="sch-error">{err}</FieldError>
        ) : (
          <FieldDescription>{"Start and end, " + hintFor()}</FieldDescription>
        )}
      </Field>
      <Field>
        <FieldLabel htmlFor="pick">Start date</FieldLabel>
        <DatePicker id="pick" typed={false} value={pick} onChange={setPick} />
        <FieldDescription>{"Picking only (typed={false})"}</FieldDescription>
      </Field>
    </div>
  );
};
