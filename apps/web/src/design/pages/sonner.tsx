// design-system-kit 0.53.0 · profile shadcn · design entry: the Sonner page
import { useEffect } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { Labelled, Property } from "../labels";

export const SonnerPreview = () => {
  useEffect(() => {
    toast("Board archived", {
      description: "It moved to Archive.",
      action: { label: "Undo", onClick: () => {} },
      duration: Infinity,
    });
    toast.success("Changes saved", { duration: Infinity });
  }, []);
  return (
    <>
      <Property name="On load: a toast with description and action, and a success toast" />
      <div className="row">
        <Labelled label="default toast">
          <Button
            variant="outline"
            onClick={() => {
              toast("Board archived");
            }}
          >
            Show toast
          </Button>
        </Labelled>
        <Labelled label="error toast">
          <Button
            variant="outline"
            onClick={() => {
              toast.error("Couldn’t sync", {
                description: "We’ll try again in a minute.",
              });
            }}
          >
            Show error
          </Button>
        </Labelled>
        <Toaster position="bottom-right" />
      </div>
    </>
  );
};
