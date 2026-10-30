// design-system-kit 0.37.2 · profile shadcn · design entry: the Sonner page
import { useEffect } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";

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
    <div className="row">
      <Button
        variant="outline"
        onClick={() => {
          toast("Board archived");
        }}
      >
        Show toast
      </Button>
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
      <Toaster position="bottom-right" />
    </div>
  );
};
