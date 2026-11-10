// design-system-kit 0.53.0 · profile shadcn · design entry: the Alert page
import { CircleAlert, Info } from "lucide-react";
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Labelled } from "../labels";

export const AlertPreview = () => {
  return (
    <div className="col">
      <Labelled label="default" block>
        <Alert>
          <Info width={16} height={16} />
          <AlertTitle>Billing moves to monthly in April</AlertTitle>
          <AlertDescription>
            Nothing to do — your plan and price stay the same.
          </AlertDescription>
        </Alert>
      </Labelled>
      <Labelled label="destructive" block>
        <Alert variant="destructive">
          <CircleAlert width={16} height={16} />
          <AlertTitle>Payment failed</AlertTitle>
          <AlertDescription>Use a card that has not expired.</AlertDescription>
        </Alert>
      </Labelled>
      <Labelled label="with action" block>
        <Alert>
          <AlertTitle>A new version is available</AlertTitle>
          <AlertDescription>Reload to get the latest changes.</AlertDescription>
          <AlertAction>
            <Button size="xs" variant="outline">
              Reload
            </Button>
          </AlertAction>
        </Alert>
      </Labelled>
    </div>
  );
};
