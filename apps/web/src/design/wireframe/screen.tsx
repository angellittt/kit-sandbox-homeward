// design-system-kit 0.37.0 · profile shadcn · design entry: the Screen wireframe component
//
// Frames one step of a flow: the step's label above ("03 Upload documents" and
// the device), then a frame with a browser or phone bar at its top and the
// screen's content below. Fill it with the real components, not drawings of
// them, so switching the theme from Wireframe shows the screen in the brand.
// Design-only: the app never imports it (the kit's lint blocks src/design/**).
import type { ComponentProps, ReactNode } from "react";
import { cva } from "class-variance-authority";
import { cn } from "cn";

type Device = "browser" | "phone";

const screenFrameVariants = cva(
  "overflow-hidden border-2 border-line-strong bg-background-normal",
  {
    variants: {
      device: {
        browser: "w-full",
        phone: "w-55 rounded-xl",
      },
    },
  },
);

const screenBarVariants = cva("flex items-center border-line-strong", {
  variants: {
    device: {
      browser: "h-10 gap-2 border-b-2 bg-background-alternative px-3",
      phone:
        "h-11 justify-center border-b bg-background-normal text-label-normal type-label-2",
    },
  },
});

type ScreenLabelProps = Omit<ComponentProps<"div">, "children"> & {
  /** The step and the screen's name: "03 Upload documents". */
  screen: string;
  device: Device;
};

export const ScreenLabel = ({
  screen,
  device,
  className,
  ...props
}: ScreenLabelProps) => (
  <div
    data-slot="screen-label"
    className={cn("flex items-baseline gap-2", className)}
    {...props}
  >
    <span
      data-slot="screen-label-screen"
      className="text-label-normal type-label-1"
    >
      {screen}
    </span>
    <span
      data-slot="screen-label-device"
      className="text-label-alternative type-caption-1"
    >
      {device === "phone" ? "Phone" : "Browser"}
    </span>
  </div>
);

type ScreenBarProps = Omit<ComponentProps<"div">, "children"> & {
  device: Device;
  /** The browser's address. */
  url?: string;
  /** The phone's clock. */
  time?: string;
};

export const ScreenBar = ({
  device,
  url = "/",
  time = "9:41",
  className,
  ...props
}: ScreenBarProps) => (
  <div
    data-slot="screen-bar"
    data-device={device}
    className={cn(screenBarVariants({ device }), className)}
    {...props}
  >
    {device === "browser" ? (
      <>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            data-slot="screen-dot"
            className="size-2.5 shrink-0 rounded-full border-[1.5px] border-line-strong"
          />
        ))}
        <span
          data-slot="screen-address"
          className="flex h-6 min-w-0 flex-1 items-center border border-line-strong bg-background-normal px-2 text-label-alternative type-caption-1"
        >
          {url}
        </span>
      </>
    ) : (
      <span data-slot="screen-time">{time}</span>
    )}
  </div>
);

type ScreenProps = Omit<ComponentProps<"section">, "children"> & {
  device?: Device;
  /** The step and the screen's name, shown above the frame: "03 Upload documents". */
  screen: string;
  url?: string;
  time?: string;
  children?: ReactNode;
};

export const Screen = ({
  device = "browser",
  screen,
  url,
  time,
  children,
  className,
  ...props
}: ScreenProps) => (
  <section
    data-slot="screen"
    data-device={device}
    aria-label={screen}
    className={cn("flex flex-col gap-2", className)}
    {...props}
  >
    <ScreenLabel screen={screen} device={device} />
    <div data-slot="screen-frame" className={screenFrameVariants({ device })}>
      <ScreenBar device={device} url={url} time={time} />
      <div data-slot="screen-body" className="flex flex-col gap-3 p-4">
        {children}
      </div>
    </div>
  </section>
);
