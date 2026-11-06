// design-system-kit 0.45.0 · profile shadcn · design entry: the Progress page
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress";
import { Labelled } from "../labels";

export const ProgressPreview = () => {
  return (
    <div className="col" style={{ maxWidth: 380 }}>
      <Labelled label="with label" block>
        <Progress value={64}>
          <ProgressLabel>Importing invoices</ProgressLabel>
          <ProgressValue />
        </Progress>
      </Labelled>
      <Labelled label="no label" block>
        <Progress value={25} aria-label="Upload progress" />
      </Labelled>
      <Labelled label="complete" block>
        <Progress value={100}>
          <ProgressLabel>Done</ProgressLabel>
          <ProgressValue />
        </Progress>
      </Labelled>
    </div>
  );
};
