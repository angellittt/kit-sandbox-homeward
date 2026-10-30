// design-system-kit 0.37.3 · profile shadcn · design entry: the Select page
import { Field, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const SelectPreview = () => {
  const regions = [
    { value: "eu", label: "Europe" },
    { value: "us", label: "United States" },
    { value: "ap", label: "Asia Pacific" },
  ];
  return (
    <div className="col" style={{ maxWidth: 300, height: 270 }}>
      <Field>
        <FieldLabel htmlFor="rg">Region</FieldLabel>
        <Select defaultValue="eu" items={regions} defaultOpen modal={false}>
          <SelectTrigger id="rg">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Regions</SelectLabel>
              {regions.map((r) => (
                <SelectItem key={r.value} value={r.value}>
                  {r.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
      <div className="row">
        <Select items={regions}>
          <SelectTrigger size="sm" aria-label="Small select">
            <SelectValue placeholder="Small" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {regions.map((r) => (
                <SelectItem key={r.value} value={r.value}>
                  {r.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select items={regions} disabled>
          <SelectTrigger aria-label="Disabled select">
            <SelectValue placeholder="Disabled" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {regions.map((r) => (
                <SelectItem key={r.value} value={r.value}>
                  {r.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
