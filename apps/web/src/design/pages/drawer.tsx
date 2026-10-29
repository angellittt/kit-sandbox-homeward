// Client page: the Drawer page (Drawer is Homeward's, added with /ds-change on 2026-10-19), ported from its design system card
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Field, FieldLabel } from "@/components/ui/field";

export const DrawerPreview = () => {
  return (
    <Drawer defaultOpen showSwipeHandle>
      <DrawerTrigger render={<Button variant="outline" />}>
        Filters
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Filter animals</DrawerTitle>
          <DrawerDescription>
            Show only the animals you&apos;re looking for.
          </DrawerDescription>
        </DrawerHeader>
        <div
          style={{
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <Field orientation="horizontal">
            <Checkbox id="f1" defaultChecked />
            <FieldLabel htmlFor="f1">Available only</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="f2" />
            <FieldLabel htmlFor="f2">Good with kids</FieldLabel>
          </Field>
        </div>
        <DrawerFooter>
          <DrawerClose render={<Button />}>Show 12 animals</DrawerClose>
          <DrawerClose render={<Button variant="outline" />}>
            Cancel
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
