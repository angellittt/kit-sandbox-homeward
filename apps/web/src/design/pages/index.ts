// design-system-kit 0.37.4 · profile shadcn · design entry: the page list
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
  { slug: "button", name: "Button", group: "Actions", Page: ButtonPreview },
  {
    slug: "button-group",
    name: "ButtonGroup",
    group: "Actions",
    Page: ButtonGroupPreview,
  },
  { slug: "toggle", name: "Toggle", group: "Actions", Page: TogglePreview },
  {
    slug: "toggle-group",
    name: "ToggleGroup",
    group: "Actions",
    Page: ToggleGroupPreview,
  },
  { slug: "checkbox", name: "Checkbox", group: "Forms", Page: CheckboxPreview },
  { slug: "combobox", name: "Combobox", group: "Forms", Page: ComboboxPreview },
  {
    slug: "date-picker",
    name: "DatePicker",
    group: "Forms",
    Page: DatePickerPreview,
  },
  { slug: "field", name: "Field", group: "Forms", Page: FieldPreview },
  { slug: "input", name: "Input", group: "Forms", Page: InputPreview },
  {
    slug: "input-group",
    name: "InputGroup",
    group: "Forms",
    Page: InputGroupPreview,
  },
  {
    slug: "radio-group",
    name: "RadioGroup",
    group: "Forms",
    Page: RadioGroupPreview,
  },
  { slug: "select", name: "Select", group: "Forms", Page: SelectPreview },
  { slug: "slider", name: "Slider", group: "Forms", Page: SliderPreview },
  { slug: "switch", name: "Switch", group: "Forms", Page: SwitchPreview },
  { slug: "textarea", name: "Textarea", group: "Forms", Page: TextareaPreview },
  {
    slug: "data-table",
    name: "DataTable",
    group: "Data",
    Page: DataTablePreview,
  },
  { slug: "table", name: "Table", group: "Data", Page: TablePreview },
  {
    slug: "breadcrumb",
    name: "Breadcrumb",
    group: "Navigation",
    Page: BreadcrumbPreview,
  },
  {
    slug: "pagination",
    name: "Pagination",
    group: "Navigation",
    Page: PaginationPreview,
  },
  {
    slug: "sidebar",
    name: "Sidebar",
    group: "Navigation",
    Page: SidebarPreview,
  },
  { slug: "tabs", name: "Tabs", group: "Navigation", Page: TabsPreview },
  {
    slug: "alert-dialog",
    name: "AlertDialog",
    group: "Overlays",
    Page: AlertDialogPreview,
  },
  { slug: "dialog", name: "Dialog", group: "Overlays", Page: DialogPreview },
  { slug: "drawer", name: "Drawer", group: "Overlays", Page: DrawerPreview },
  {
    slug: "dropdown-menu",
    name: "DropdownMenu",
    group: "Overlays",
    Page: DropdownMenuPreview,
  },
  { slug: "popover", name: "Popover", group: "Overlays", Page: PopoverPreview },
  { slug: "sheet", name: "Sheet", group: "Overlays", Page: SheetPreview },
  { slug: "tooltip", name: "Tooltip", group: "Overlays", Page: TooltipPreview },
  { slug: "alert", name: "Alert", group: "Feedback", Page: AlertPreview },
  { slug: "empty", name: "Empty", group: "Feedback", Page: EmptyPreview },
  {
    slug: "progress",
    name: "Progress",
    group: "Feedback",
    Page: ProgressPreview,
  },
  {
    slug: "skeleton",
    name: "Skeleton",
    group: "Feedback",
    Page: SkeletonPreview,
  },
  { slug: "sonner", name: "Sonner", group: "Feedback", Page: SonnerPreview },
  { slug: "spinner", name: "Spinner", group: "Feedback", Page: SpinnerPreview },
  { slug: "avatar", name: "Avatar", group: "Status", Page: AvatarPreview },
  { slug: "badge", name: "Badge", group: "Status", Page: BadgePreview },
  {
    slug: "accordion",
    name: "Accordion",
    group: "Layout",
    Page: AccordionPreview,
  },
  { slug: "card", name: "Card", group: "Layout", Page: CardPreview },
  {
    slug: "separator",
    name: "Separator",
    group: "Layout",
    Page: SeparatorPreview,
  },
  {
    slug: "image-placeholder",
    name: "ImagePlaceholder",
    group: "Wireframe",
    Page: ImagePlaceholderPreview,
  },
  {
    slug: "text-placeholder",
    name: "TextPlaceholder",
    group: "Wireframe",
    Page: TextPlaceholderPreview,
  },
  {
    slug: "annotation",
    name: "Annotation",
    group: "Wireframe",
    Page: AnnotationPreview,
  },
  { slug: "screen", name: "Screen", group: "Wireframe", Page: ScreenPreview },
];
