// design-system-kit 0.53.0 · profile shadcn · design entry: the labels
//
// What the pages name for a designer: the property a row shows (Property:
// "Variant", "Size") and each example's value or state under it (Labelled:
// "secondary", "disabled"), in the code's own words. Shown only inside the
// shell, which turns them on (ShowLabels): ds-cards mounts a page without
// it, so a card's markup stays the page's alone.
import { createContext, useContext, type ReactNode } from "react";

const LabelsOn = createContext(false);

export const ShowLabels = ({ children }: { children: ReactNode }) => (
  <LabelsOn.Provider value>{children}</LabelsOn.Provider>
);

export const Labelled = ({
  label,
  block,
  children,
}: {
  label: string;
  block?: boolean;
  children: ReactNode;
}) =>
  useContext(LabelsOn) ? (
    <div className="ds-labelled" data-block={block || undefined}>
      {children}
      <span className="ds-label">{label}</span>
    </div>
  ) : (
    children
  );

export const Property = ({ name }: { name: string }) =>
  useContext(LabelsOn) ? <p className="ds-property">{name}</p> : null;
