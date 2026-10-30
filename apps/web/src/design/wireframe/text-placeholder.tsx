// design-system-kit 0.38.0 · profile shadcn · design entry: the TextPlaceholder wireframe component
//
// Stands in for body copy that isn't written yet. Only for copy that doesn't
// change the flow: headings, labels, button verbs, empty states and errors
// get real words, because the wireframe is where content gets decided.
// Design-only: the app never imports it (the kit's lint blocks src/design/**).
import type { ComponentProps } from "react";
import { cn } from "cn";

type TextPlaceholderProps = Omit<ComponentProps<"div">, "children"> & {
  /** heading: one bar · paragraph: body bars, the last shorter · line: one body bar. */
  type?: "heading" | "paragraph" | "line";
  /** A paragraph's bars. */
  lines?: number;
};

export const TextPlaceholder = ({
  type = "paragraph",
  lines = 4,
  className,
  ...props
}: TextPlaceholderProps) => {
  const bars = type === "paragraph" ? Math.max(1, lines) : 1;
  return (
    <div
      data-slot="text-placeholder"
      data-type={type}
      aria-hidden="true"
      className={cn("flex w-80 max-w-full flex-col gap-2.5", className)}
      {...props}
    >
      {type === "heading" ? (
        <span
          data-slot="text-placeholder-heading-bar"
          className="block h-4 w-11/20 rounded-xs bg-label-normal"
        />
      ) : (
        Array.from({ length: bars }, (_, i) => (
          <span
            key={i}
            data-slot="text-placeholder-body-bar"
            className={cn(
              "block h-2 w-full rounded-xs bg-fill-strong",
              type === "paragraph" && bars > 1 && i === bars - 1 && "w-3/5",
            )}
          />
        ))
      )}
    </div>
  );
};
