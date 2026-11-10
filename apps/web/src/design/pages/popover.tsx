// design-system-kit 0.53.0 · profile shadcn · design entry: the Popover page
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Property } from "../labels";

export const PopoverPreview = () => {
  return (
    <>
      <Property name="Open on load: header, a field with a button, and close" />
      <div style={{ height: 220 }}>
        <Popover defaultOpen modal={false}>
          <PopoverTrigger render={<Button variant="outline" size="sm" />}>
            Share
          </PopoverTrigger>
          <PopoverContent align="start">
            <PopoverHeader>
              <PopoverTitle>Share this board</PopoverTitle>
              <PopoverDescription>
                Anyone with the link can view.
              </PopoverDescription>
            </PopoverHeader>
            <InputGroup>
              <InputGroupInput
                defaultValue="example.com/b/spring"
                aria-label="Share link"
                readOnly
              />
              <InputGroupAddon align="inline-end">
                <InputGroupButton size="icon-xs" aria-label="Copy link">
                  <Copy width={16} height={16} />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
            <PopoverClose render={<Button variant="outline" size="sm" />}>
              Done
            </PopoverClose>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};
