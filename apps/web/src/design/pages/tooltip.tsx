// design-system-kit 0.53.0 · profile shadcn · design entry: the Tooltip page
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Labelled } from "../labels";

export const TooltipPreview = () => {
  return (
    <div style={{ paddingTop: 40 }}>
      <TooltipProvider>
        <div className="row">
          <Labelled label="open">
            <Tooltip defaultOpen>
              <TooltipTrigger
                render={
                  <Button
                    size="icon"
                    variant="outline"
                    aria-label="Copy link"
                  />
                }
              >
                <Copy width={16} height={16} />
              </TooltipTrigger>
              <TooltipContent>Copy link</TooltipContent>
            </Tooltip>
          </Labelled>
          <Labelled label="on hover">
            <Tooltip>
              <TooltipTrigger render={<Button variant="outline" />}>
                Hover me
              </TooltipTrigger>
              <TooltipContent>A one-line hint</TooltipContent>
            </Tooltip>
          </Labelled>
        </div>
      </TooltipProvider>
    </div>
  );
};
