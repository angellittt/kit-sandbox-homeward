// design-system-kit 0.53.0 · profile shadcn · design entry: the Combobox page
import { useState } from "react";
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  useComboboxAnchor,
} from "@/components/ui/combobox";
import { Field, FieldLabel } from "@/components/ui/field";
import { Labelled } from "../labels";

export const ComboboxPreview = () => {
  const people = [
    "Ada Lovelace",
    "Grace Hopper",
    "Jean Bartik",
    "Katherine Johnson",
    "Margaret Hamilton",
    "Radia Perlman",
  ];
  const [one, setOne] = useState<string | null>("Grace Hopper");
  const [many, setMany] = useState(["Ada Lovelace", "Radia Perlman"]);
  const anchor = useComboboxAnchor();
  return (
    <div className="col" style={{ maxWidth: 380 }}>
      <Labelled label="single" block>
        <Field>
          <FieldLabel htmlFor="as">Assignee</FieldLabel>
          <Combobox items={people} value={one} onValueChange={setOne}>
            <ComboboxInput id="as" placeholder="Search people" />
            <ComboboxContent>
              <ComboboxEmpty>No people found.</ComboboxEmpty>
              <ComboboxList>
                {(p) => (
                  <ComboboxItem key={p} value={p}>
                    {p}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </Field>
      </Labelled>
      <Labelled label="multiple" block>
        <Field>
          <FieldLabel htmlFor="rv">Reviewers</FieldLabel>
          <Combobox
            items={people}
            multiple
            value={many}
            onValueChange={setMany}
          >
            <ComboboxChips ref={anchor}>
              {many.map((p) => (
                <ComboboxChip key={p}>{p}</ComboboxChip>
              ))}
              <ComboboxChipsInput
                id="rv"
                placeholder={many.length ? "" : "Add a reviewer"}
              />
            </ComboboxChips>
            <ComboboxContent anchor={anchor}>
              <ComboboxEmpty>No people found.</ComboboxEmpty>
              <ComboboxList>
                {(p) => (
                  <ComboboxItem key={p} value={p}>
                    {p}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </Field>
      </Labelled>
    </div>
  );
};
