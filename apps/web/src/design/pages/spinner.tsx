// design-system-kit 0.37.1 · profile shadcn · design entry: the Spinner page
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export const SpinnerPreview = () => {
  return (
    <div className="row">
      <Spinner />
      <Spinner className="size-6" />
      <Button disabled aria-busy>
        <Spinner />
        Saving
      </Button>
      <Button variant="outline" disabled aria-busy>
        <Spinner />
        Loading
      </Button>
    </div>
  );
};
