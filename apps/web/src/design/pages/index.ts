// design-system-kit 0.45.0 · profile shadcn · design entry: the page list
//
// One page per component, as the design system shows it: the shell lists them
// by group, in this order, and shows one at a time (#<slug>). A client
// component gets its page here too. The Wireframe group's components are the
// design entry's own (../wireframe): design-only, never in the app.
import type { ComponentType } from "react";
import { AccordionPreview } from "./accordion";
import { AlertPreview } from "./alert";
import { AlertDialogPreview } from "./alert-dialog";
import { AnnotationPreview } from "./annotation";
import { AvatarPreview } from "./avatar";
import { BadgePreview } from "./badge";
import { BreadcrumbPreview } from "./breadcrumb";
import { ButtonPreview } from "./button";
import { ButtonGroupPreview } from "./button-group";
import { CardPreview } from "./card";
import { CheckboxPreview } from "./checkbox";
import { ComboboxPreview } from "./combobox";
import { DataTablePreview } from "./data-table";
import { DatePickerPreview } from "./date-picker";
import { DialogPreview } from "./dialog";
import { DrawerPreview } from "./drawer";
import { DropdownMenuPreview } from "./dropdown-menu";
import { EmptyPreview } from "./empty";
import { FieldPreview } from "./field";
import { ImagePlaceholderPreview } from "./image-placeholder";
import { InputPreview } from "./input";
import { InputGroupPreview } from "./input-group";
import { PaginationPreview } from "./pagination";
import { PopoverPreview } from "./popover";
import { ProgressPreview } from "./progress";
import { RadioGroupPreview } from "./radio-group";
import { ScreenPreview } from "./screen";
import { SelectPreview } from "./select";
import { SeparatorPreview } from "./separator";
import { SheetPreview } from "./sheet";
import { SidebarPreview } from "./sidebar";
import { SkeletonPreview } from "./skeleton";
import { SliderPreview } from "./slider";
import { SonnerPreview } from "./sonner";
import { SpinnerPreview } from "./spinner";
import { SwitchPreview } from "./switch";
import { TablePreview } from "./table";
import { TabsPreview } from "./tabs";
import { TextPlaceholderPreview } from "./text-placeholder";
import { TextareaPreview } from "./textarea";
import { TogglePreview } from "./toggle";
import { ToggleGroupPreview } from "./toggle-group";
import { TooltipPreview } from "./tooltip";

export type DesignPage = {
  slug: string;
  name: string;
  group: string;
  summary?: string;
  Page: ComponentType;
};

export const GROUPS = [
  "Actions",
  "Forms",
  "Data",
  "Navigation",
  "Overlays",
  "Feedback",
  "Status",
  "Layout",
  "Wireframe",
];

export const PAGES: DesignPage[] = [
  {
    slug: "button",
    name: "Button",
    group: "Actions",
    summary: "Button triggers an action.",
    Page: ButtonPreview,
  },
  {
    slug: "button-group",
    name: "ButtonGroup",
    group: "Actions",
    summary:
      "Button Group joins related buttons into one control: a split button, pager arrows, a toolbar section.",
    Page: ButtonGroupPreview,
  },
  {
    slug: "toggle",
    name: "Toggle",
    group: "Actions",
    summary:
      "Toggle turns one option on or off from a button: bold, pin, show archived.",
    Page: TogglePreview,
  },
  {
    slug: "toggle-group",
    name: "ToggleGroup",
    group: "Actions",
    summary:
      "Toggle Group sets one or several related options from a row of toggles: a view switcher, text alignment, formatting.",
    Page: ToggleGroupPreview,
  },
  {
    slug: "checkbox",
    name: "Checkbox",
    group: "Forms",
    summary:
      "Checkbox turns one independent option on or off, applied when the form is submitted.",
    Page: CheckboxPreview,
  },
  {
    slug: "combobox",
    name: "Combobox",
    group: "Forms",
    summary:
      "Combobox picks one or more options from a long list by typing to filter it.",
    Page: ComboboxPreview,
  },
  {
    slug: "date-picker",
    name: "DatePicker",
    group: "Forms",
    summary:
      "Date Picker enters a single date or a date range, by picking from a calendar or typing.",
    Page: DatePickerPreview,
  },
  {
    slug: "field",
    name: "Field",
    group: "Forms",
    summary:
      "Field wraps a form control with its label, help text and error, wired for accessibility.",
    Page: FieldPreview,
  },
  {
    slug: "input",
    name: "Input",
    group: "Forms",
    summary:
      "A text field is a composition, not a component: a `Field` around `FieldLabel` + `Input` + `FieldDescription` or `FieldError`.",
    Page: InputPreview,
  },
  {
    slug: "input-group",
    name: "InputGroup",
    group: "Forms",
    summary:
      "Input Group puts an icon, button, text or spinner beside a control inside one frame — search boxes, prefixed URLs, a field with a clear button.",
    Page: InputGroupPreview,
  },
  {
    slug: "radio-group",
    name: "RadioGroup",
    group: "Forms",
    summary: "Radio Group picks exactly one option from a short list.",
    Page: RadioGroupPreview,
  },
  {
    slug: "select",
    name: "Select",
    group: "Forms",
    summary: "Select chooses one option from a list in a popup.",
    Page: SelectPreview,
  },
  {
    slug: "slider",
    name: "Slider",
    group: "Forms",
    summary: "Slider picks a value or a range on a continuous scale.",
    Page: SliderPreview,
  },
  {
    slug: "switch",
    name: "Switch",
    group: "Forms",
    summary: "Switch applies a setting immediately.",
    Page: SwitchPreview,
  },
  {
    slug: "textarea",
    name: "Textarea",
    group: "Forms",
    summary: "Textarea takes multi-line text — notes, descriptions, comments.",
    Page: TextareaPreview,
  },
  {
    slug: "data-table",
    name: "DataTable",
    group: "Data",
    summary:
      "Data Table shows records that people sort, select, page through and filter. It's a Table driven by `@tanstack/react-table`.",
    Page: DataTablePreview,
  },
  {
    slug: "table",
    name: "Table",
    group: "Data",
    summary: "Table shows rows of comparable records.",
    Page: TablePreview,
  },
  {
    slug: "breadcrumb",
    name: "Breadcrumb",
    group: "Navigation",
    summary: "Breadcrumb shows where a page sits in a deep hierarchy.",
    Page: BreadcrumbPreview,
  },
  {
    slug: "pagination",
    name: "Pagination",
    group: "Navigation",
    summary: "Pagination moves between pages of a long table or list.",
    Page: PaginationPreview,
  },
  {
    slug: "sidebar",
    name: "Sidebar",
    group: "Navigation",
    summary:
      "Sidebar is the app shell for dashboards and portals: a column with grouped navigation, a header and a footer for the account menu.",
    Page: SidebarPreview,
  },
  {
    slug: "tabs",
    name: "Tabs",
    group: "Navigation",
    summary: "Tabs switch between related panels in place.",
    Page: TabsPreview,
  },
  {
    slug: "alert-dialog",
    name: "AlertDialog",
    group: "Overlays",
    summary:
      "Alert Dialog interrupts for a decision that has to be confirmed before anything happens.",
    Page: AlertDialogPreview,
  },
  {
    slug: "dialog",
    name: "Dialog",
    group: "Overlays",
    summary:
      "Dialog interrupts with a focused task or a short form, over the page.",
    Page: DialogPreview,
  },
  {
    slug: "drawer",
    name: "Drawer",
    group: "Overlays",
    summary:
      "Drawer slides a panel up from the bottom of the screen on phones, for things like filtering the animal list without leaving it; people can swipe it closed.",
    Page: DrawerPreview,
  },
  {
    slug: "dropdown-menu",
    name: "DropdownMenu",
    group: "Overlays",
    summary:
      'Dropdown Menu lists commands for an object behind a button — the "⋯" on a row or card.',
    Page: DropdownMenuPreview,
  },
  {
    slug: "popover",
    name: "Popover",
    group: "Overlays",
    summary:
      "Popover holds a small interactive panel anchored to its trigger — a share link, filters, a quick edit.",
    Page: PopoverPreview,
  },
  {
    slug: "sheet",
    name: "Sheet",
    group: "Overlays",
    summary:
      "Sheet slides a panel in from an edge for record details, filters or edit forms without leaving the page.",
    Page: SheetPreview,
  },
  {
    slug: "tooltip",
    name: "Tooltip",
    group: "Overlays",
    summary:
      "Tooltip names an icon or adds a one-line hint, on hover and focus.",
    Page: TooltipPreview,
  },
  {
    slug: "alert",
    name: "Alert",
    group: "Feedback",
    summary:
      "Alert shows an inline message tied to a page or form — success, warning, error or information.",
    Page: AlertPreview,
  },
  {
    slug: "empty",
    name: "Empty",
    group: "Feedback",
    summary:
      "Empty fills a page, table, list or search result that has nothing to show yet.",
    Page: EmptyPreview,
  },
  {
    slug: "progress",
    name: "Progress",
    group: "Feedback",
    summary:
      "Progress shows how far a measurable task has got — uploads, imports, multi-step completion.",
    Page: ProgressPreview,
  },
  {
    slug: "skeleton",
    name: "Skeleton",
    group: "Feedback",
    summary:
      "Skeleton holds the shape of content while it loads — cards, table rows, lists.",
    Page: SkeletonPreview,
  },
  {
    slug: "sonner",
    name: "Sonner",
    group: "Feedback",
    summary:
      "Toasts confirm that something happened, briefly, without interrupting.",
    Page: SonnerPreview,
  },
  {
    slug: "spinner",
    name: "Spinner",
    group: "Feedback",
    summary:
      "Spinner shows that something is loading when progress can't be measured.",
    Page: SpinnerPreview,
  },
  {
    slug: "avatar",
    name: "Avatar",
    group: "Status",
    summary: "Avatar shows a person as a photo, with initials as the fallback.",
    Page: AvatarPreview,
  },
  {
    slug: "badge",
    name: "Badge",
    group: "Status",
    summary: "Badge labels a status or category in a small pill.",
    Page: BadgePreview,
  },
  {
    slug: "accordion",
    name: "Accordion",
    group: "Layout",
    summary:
      "Accordion stacks collapsible sections — FAQs, settings groups, long forms split into steps.",
    Page: AccordionPreview,
  },
  {
    slug: "card",
    name: "Card",
    group: "Layout",
    summary: "Card groups related content and actions on a raised surface.",
    Page: CardPreview,
  },
  {
    slug: "separator",
    name: "Separator",
    group: "Layout",
    summary: "Separator divides groups of content and menu sections.",
    Page: SeparatorPreview,
  },
  {
    slug: "image-placeholder",
    name: "ImagePlaceholder",
    group: "Wireframe",
    summary:
      "ImagePlaceholder stands in for an image, video, map or chart on a wireframe.",
    Page: ImagePlaceholderPreview,
  },
  {
    slug: "text-placeholder",
    name: "TextPlaceholder",
    group: "Wireframe",
    summary: "TextPlaceholder stands in for body copy that isn't written yet.",
    Page: TextPlaceholderPreview,
  },
  {
    slug: "annotation",
    name: "Annotation",
    group: "Wireframe",
    summary:
      "Annotation explains behaviour or an open question on a wireframe, as a numbered pin and a note in the margin.",
    Page: AnnotationPreview,
  },
  {
    slug: "screen",
    name: "Screen",
    group: "Wireframe",
    summary:
      "Screen frames one step of a flow: a browser or phone bar, with a label that numbers the step.",
    Page: ScreenPreview,
  },
];
