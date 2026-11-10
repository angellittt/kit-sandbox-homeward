// design-system-kit 0.53.0 · profile shadcn · stock component (base-nova + baseline only)
/**
 * Stock base-nova (shadcn 4.21.1, 2026-10-07) + TTT baseline:
 * - `motion-reduce:[animation-duration:2.4s]`: under reduced motion it keeps turning, slowed (loading-indicator exception).
 * - `aria-hidden={undefined}`: a labelled status, so no icon set hides it (SVGR's Material icons are hidden unless told).
 */
import { cn } from "cn";
import { Loader2Icon } from "lucide-react";

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <Loader2Icon
      data-slot="spinner"
      role="status"
      aria-label="Loading"
      aria-hidden={undefined}
      className={cn(
        "size-4 animate-spin motion-reduce:[animation-duration:2.4s]",
        className,
      )}
      {...props}
    />
  );
}

export { Spinner };
