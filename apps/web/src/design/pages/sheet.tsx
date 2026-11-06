// design-system-kit 0.45.0 · profile shadcn · design entry: the Sheet page
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Property } from "../labels";

export const SheetPreview = () => {
  return (
    <>
      <Property name="Open on load, from the right: header, content and a footer action" />
      <Sheet defaultOpen>
        <SheetTrigger render={<Button variant="outline" />}>
          Filters
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
            <SheetDescription>
              Narrow the list by status and owner.
            </SheetDescription>
          </SheetHeader>
          <div style={{ padding: "0 16px" }}>
            <Field orientation="horizontal">
              <Checkbox id="f1" defaultChecked />
              <FieldLabel htmlFor="f1">Open only</FieldLabel>
            </Field>
          </div>
          <SheetFooter>
            <SheetClose render={<Button />}>Apply</SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};
