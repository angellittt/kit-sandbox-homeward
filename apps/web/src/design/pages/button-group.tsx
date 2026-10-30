// design-system-kit 0.37.4 · profile shadcn · design entry: the ButtonGroup page
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

export const ButtonGroupPreview = () => {
  return (
    <div className="col">
      <ButtonGroup aria-label="Invoice actions">
        <Button variant="outline">Send</Button>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                variant="outline"
                size="icon"
                aria-label="More send options"
              />
            }
          >
            <ChevronDown size={16} />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Schedule send</DropdownMenuItem>
            <DropdownMenuItem>Send a copy to me</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>
      <div className="row">
        <ButtonGroup aria-label="Toolbar">
          <ButtonGroup>
            <Button variant="outline" size="icon" aria-label="Previous">
              <ChevronLeft size={16} />
            </Button>
            <Button variant="outline" size="icon" aria-label="Next">
              <ChevronRight size={16} />
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant="outline">Archive</Button>
            <Button variant="outline">Report</Button>
          </ButtonGroup>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="secondary">Copy</Button>
          <ButtonGroupSeparator />
          <Button variant="secondary" size="icon" aria-label="Copy options">
            <ChevronDown size={16} />
          </Button>
        </ButtonGroup>
      </div>
      <ButtonGroup style={{ maxWidth: 320 }}>
        <ButtonGroupText>https://</ButtonGroupText>
        <Input aria-label="Domain" placeholder="example.com" />
      </ButtonGroup>
    </div>
  );
};
