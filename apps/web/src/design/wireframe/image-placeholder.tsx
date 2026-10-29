// design-system-kit 0.37.0 · profile shadcn · design entry: the ImagePlaceholder wireframe component
//
// Stands in for an image, video, map or chart on a wireframe: a crossed frame
// at the ratio the real asset will have, captioned with what goes there.
// Design-only: the app never imports it (the kit's lint blocks src/design/**).
import { useId, type ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const imagePlaceholderVariants = cva(
  "relative m-0 grid shrink-0 place-items-center overflow-hidden border border-line-strong bg-fill-alternative",
  {
    variants: {
      ratio: {
        "16:9": "aspect-video w-80",
        "4:3": "aspect-4/3 w-80",
        "1:1": "aspect-square w-60",
        "9:16": "aspect-9/16 w-45",
      },
    },
    defaultVariants: { ratio: "16:9" },
  },
);

type ImagePlaceholderProps = Omit<ComponentProps<"figure">, "children"> &
  VariantProps<typeof imagePlaceholderVariants> & {
    /** What goes there ("Site photo · 16:9", "Map of the ward"), never "Image". */
    caption: string;
  };

// A figure named by its caption (aria-labelledby, which every accessibility tree reads): what the media will be.
export const ImagePlaceholder = ({
  ratio,
  caption,
  className,
  ...props
}: ImagePlaceholderProps) => {
  const captionId = useId();
  return (
    <figure
      data-slot="image-placeholder"
      data-ratio={ratio ?? "16:9"}
      aria-labelledby={captionId}
      className={cn(imagePlaceholderVariants({ ratio }), className)}
      {...props}
    >
      {/* The cross: two corner-to-corner lines that stay 1px at any size. */}
      <svg
        data-slot="image-placeholder-diagonal"
        className="absolute inset-0 size-full stroke-label-assistive"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line
          x1="0"
          y1="0"
          x2="100"
          y2="100"
          vectorEffect="non-scaling-stroke"
        />
        <line
          x1="100"
          y1="0"
          x2="0"
          y2="100"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <figcaption
        id={captionId}
        data-slot="image-placeholder-caption"
        className="relative bg-fill-alternative px-1.5 py-0.5 text-label-assistive type-caption-1"
      >
        {caption}
      </figcaption>
    </figure>
  );
};
