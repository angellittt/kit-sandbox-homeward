// design-system-kit 0.37.3 · profile shadcn · design entry: the Tooltip page
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const TooltipPreview = () => {
  return (
    <div style={{ paddingTop: 40 }}>
      <TooltipProvider>
        <div className="row">
          <Tooltip defaultOpen>
            <TooltipTrigger
              render={
                <Button size="icon" variant="outline" aria-label="Copy link" />
              }
            >
              <Copy size={16} />
            </TooltipTrigger>
            <TooltipContent>Copy link</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger render={<Button variant="outline" />}>
              Hover me
            </TooltipTrigger>
            <TooltipContent>A one-line hint</TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </div>
  );
};
