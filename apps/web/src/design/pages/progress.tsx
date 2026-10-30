// design-system-kit 0.38.0 · profile shadcn · design entry: the Progress page
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress";

export const ProgressPreview = () => {
  return (
    <div className="col" style={{ maxWidth: 380 }}>
      <Progress value={64}>
        <ProgressLabel>Importing invoices</ProgressLabel>
        <ProgressValue />
      </Progress>
      <Progress value={25} aria-label="Upload progress" />
      <Progress value={100}>
        <ProgressLabel>Done</ProgressLabel>
        <ProgressValue />
      </Progress>
    </div>
  );
};
