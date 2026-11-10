// design-system-kit 0.53.0 · profile shadcn · design entry: the Spinner page
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Labelled } from "../labels";

export const SpinnerPreview = () => {
  return (
    <div className="row">
      <Labelled label="default">
        <Spinner />
      </Labelled>
      <Labelled label="size-6">
        <Spinner className="size-6" />
      </Labelled>
      <Labelled label="in a button">
        <Button disabled aria-busy>
          <Spinner />
          Saving
        </Button>
      </Labelled>
      <Labelled label="in an outline button">
        <Button variant="outline" disabled aria-busy>
          <Spinner />
          Loading
        </Button>
      </Labelled>
    </div>
  );
};
