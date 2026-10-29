// design-system-kit 0.37.0 · profile shadcn · design entry: the Alert page
import { CircleAlert, Info } from "lucide-react";
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export const AlertPreview = () => {
  return (
    <div className="col">
      <Alert>
        <Info size={16} />
        <AlertTitle>Billing moves to monthly in April</AlertTitle>
        <AlertDescription>
          Nothing to do — your plan and price stay the same.
        </AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <CircleAlert size={16} />
        <AlertTitle>Payment failed</AlertTitle>
        <AlertDescription>Use a card that has not expired.</AlertDescription>
      </Alert>
      <Alert>
        <AlertTitle>A new version is available</AlertTitle>
        <AlertDescription>Reload to get the latest changes.</AlertDescription>
        <AlertAction>
          <Button size="xs" variant="outline">
            Reload
          </Button>
        </AlertAction>
      </Alert>
    </div>
  );
};
