// design-system-kit 0.38.0 · profile shadcn · design entry: the Dialog page
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export const DialogPreview = () => {
  return (
    <Dialog defaultOpen>
      <DialogTrigger render={<Button variant="outline" />}>
        Rename board
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rename board</DialogTitle>
          <DialogDescription>
            Everyone on the board sees the new name.
          </DialogDescription>
        </DialogHeader>
        <Field>
          <FieldLabel htmlFor="bn">Name</FieldLabel>
          <Input id="bn" defaultValue="Spring launch" />
        </Field>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>
            Cancel
          </DialogClose>
          <Button>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
