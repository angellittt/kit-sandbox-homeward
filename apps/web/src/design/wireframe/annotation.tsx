// design-system-kit 0.37.5 · profile shadcn · design entry: the Annotation wireframe component
//
// Explains behaviour or an open question on a wireframe: a numbered pin on the
// element, and a note with the same number in the margin, never over the UI.
// The dashed border sets a note apart from the interface in any theme.
// Design-only: the app never imports it (the kit's lint blocks src/design/**).
import type { ComponentProps, ReactNode } from "react";
import { cn } from "cn";

type AnnotationPinProps = Omit<ComponentProps<"span">, "children"> & {
  /** The number shared by the pin on the element and its note. */
  number: number | string;
};

export const AnnotationPin = ({
  number,
  className,
  ...props
}: AnnotationPinProps) => (
  <span
    data-slot="annotation-pin"
    className={cn(
      "inline-grid size-6 shrink-0 place-items-center rounded-full bg-label-normal text-background-normal type-label-2",
      className,
    )}
    {...props}
  >
    {number}
  </span>
);

type AnnotationProps = Omit<ComponentProps<"div">, "children"> & {
  number: number | string;
  /** One point: what happens, or what is undecided. */
  children: ReactNode;
};

export const Annotation = ({
  number,
  children,
  className,
  ...props
}: AnnotationProps) => (
  <div
    data-slot="annotation"
    className={cn(
      "flex w-65 items-start gap-2 border-2 border-dashed border-label-normal bg-fill-normal px-4 py-3",
      className,
    )}
    {...props}
  >
    <AnnotationPin number={number} />
    <p
      data-slot="annotation-note"
      className="m-0 min-w-0 flex-1 text-label-normal type-body-2"
    >
      {children}
    </p>
  </div>
);
