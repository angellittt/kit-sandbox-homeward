// design-system-kit 0.45.0 · profile shadcn · design entry: the DropdownMenu page
import { Copy, Ellipsis } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Property } from "../labels";

export const DropdownMenuPreview = () => {
  return (
    <>
      <Property name="Open on load: label, item with shortcut, item with icon, disabled item, checkbox item, separator, destructive item" />
      <div style={{ height: 270 }}>
        <DropdownMenu defaultOpen modal={false}>
          <DropdownMenuTrigger
            render={
              <Button
                variant="outline"
                size="icon-sm"
                aria-label="Board actions"
              />
            }
          >
            <Ellipsis size={16} />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuGroup>
              <DropdownMenuLabel>Board</DropdownMenuLabel>
              <DropdownMenuItem>
                Rename
                <DropdownMenuShortcut>R</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Copy size={16} />
                Duplicate
                <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem disabled>
                Move (no other workspaces)
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuCheckboxItem checked>
              Show archived
            </DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              Delete board
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};
